// PuzzlesPage.tsx
"use client";

import { useEffect, useState } from "react";
import Board from "../components/Chessboard";
import { useRouter } from "next/navigation";
import { useMiniKit, useComposeCast } from "@coinbase/onchainkit/minikit";
import { Timer, CheckCheck, FlagTriangleRight } from "lucide-react";
import { Chess } from "chess.js";
import sdk from "@farcaster/frame-sdk";




type Puzzle = {
  pgn: string;
  solution: string[];
};

export default function PuzzlesPage() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [countdown, setCountdown] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [solvedCount, setSolvedCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hasPosted, setHasPosted] = useState(false);
  const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
  const [nextPuzzle, setNextPuzzle] = useState<Puzzle | null>(null);

  const { context } = useMiniKit();
  const router = useRouter();
  const fid = context?.user?.fid?.toString() || "124";
  const username = context?.user?.username || "fallback"

  const { composeCast } = useComposeCast();

  



  async function fetchPuzzle(): Promise<Puzzle> {
    const res = await fetch(`/api/getPuzzles?difficulty=easiest`, { next: { revalidate: 60 } });
    return res.json();
  }

  useEffect(() => {
    // Preload first two puzzles before game starts
    fetchPuzzle().then(setCurrentPuzzle);
    fetchPuzzle().then(setNextPuzzle);
    sdk.actions.ready({ disableNativeGestures: true });
  }, []);

  useEffect(() => {
    if (!gameStarted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameOver(true);
          setGameStarted(false);
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, gameStarted]);

  useEffect(() => {
    if (gameOver && !hasPosted) {
      postFinalScore();
      setHasPosted(true);
    }
  }, [gameOver, hasPosted]);

  async function postFinalScore() {
    try {
      const res = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fid: fid, scoreToAdd: solvedCount, username: username }),
      });

      if (!res.ok) throw new Error("Failed to update score");

      const data = await res.json();
      console.log("✅ Score updated:", data.totalScore);
    } catch (err) {
      console.error("Error posting score:", err);
    }
  }

  function handlePuzzleSolved() {
    setSolvedCount((prev) => prev + 1);

    // Swap nextPuzzle → currentPuzzle, then preload a new nextPuzzle
    setCurrentPuzzle(nextPuzzle);
    fetchPuzzle().then(setNextPuzzle);
  }

  function handlePuzzleSkipped() {
    setCurrentPuzzle(nextPuzzle);
    fetchPuzzle().then(setNextPuzzle);
  }

  function handlePlayAgain() {
    setSolvedCount(0);
    setTimeLeft(60);
    setCountdown(3);
    setGameOver(false);
    setHasPosted(false);
    setGameStarted(false);
  }

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameStarted(true);
    }
  }, [countdown]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {!gameStarted && !gameOver ? (
        <div className="text-6xl font-bold animate-pulse">{countdown}</div>
      ) : gameOver ? (
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-bold">⏳ Time’s Up!</h1>
          <p className="text-xl">
            You solved <span className="font-bold">{solvedCount}</span> puzzles!
          </p>
          <div className="flex gap-4">
            <button
              onClick={() =>composeCast({
                text: `I solved ${solvedCount} puzzles, think you got what it takes to beat me?`

              })}
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Share on Farcaster
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg"
            >
              Home
            </button>
          </div>
        </div>
      ) : currentPuzzle ? (
        <>
        <div className="mb-[100px] mt-[-100px] text-xl font-bold text-[#EBECD0]">
            {(() => {
              const game = new Chess();
              game.loadPgn(currentPuzzle.pgn);
              return game.turn() === "w" ? "White" : "Black";
            })()}{" "}
            to move
          </div>
          <div className=" w-[90%] flex items-center justify-between  text-white px-4 py-2 rounded-lg shadow-md mt-[-50px]">
            <span
              className={`flex gap-2 font-mono text-lg ${timeLeft <= 10 ? "text-red-400 animate-pulse" : ""
                }`}
            >
              <Timer size={20} /> {timeLeft}s
            </span>

            <span className="font-mono text-lg flex gap-2">
              <FlagTriangleRight size={20} /> {solvedCount}
            </span>
          </div>

          <div className="h-2 w-[90%] bg-[#526144] rounded-full overflow-hidden">
            <div
              className=" h-full bg-[#739552] transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / 60) * 100}%` }}
            />
          </div>

          <div className="w-full max-w-[90vmin] aspect-square mt-3">
            <Board puzzle={currentPuzzle} onPuzzleSolved={handlePuzzleSolved} />
          </div>
          <div className="flex justify-between w-[90%] mt-5">
            <div className="text-[#4B824B]">{username}</div>
            <button onClick={handlePuzzleSkipped} className="px-4 py-2 bg-[#4B824B] text-white rounded-lg">Skip</button>
          </div>
        </>
      ) : (
        <div className="text-xl">Loading puzzle...</div>
      )}
    </div>
  );
}
