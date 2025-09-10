"use client";

import { useEffect, useState } from "react";
import Board from "../components/Chessboard";
import { useRouter } from "next/navigation";

export default function PuzzlesPage() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [countdown, setCountdown] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [solvedCount, setSolvedCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const router = useRouter();

  // Timer countdown logic
  useEffect(() => {
    if (!gameStarted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameOver(true); // game ends when timer hits 0
          setGameStarted(false);
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, gameStarted]);

  // Pre-game countdown logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameStarted(true);
    }
  }, [countdown]);

  function handlePuzzleSolved() {
    setSolvedCount((prev) => prev + 1);
    // TODO: load next puzzle logic
    setTimeLeft(60); // optional: reset timer per puzzle if you want each puzzle to have full time
  }

  function handlePlayAgain() {
    setSolvedCount(0);
    setTimeLeft(60);
    setCountdown(3);
    setGameOver(false);
    setGameStarted(false);
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {!gameStarted && !gameOver ? (
        // Pre-game countdown
        <div className="text-6xl font-bold animate-pulse">{countdown}</div>
      ) : gameOver ? (
        // Game over screen
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-bold">⏳ Time’s Up!</h1>
          <p className="text-xl">You solved <span className="font-bold">{solvedCount}</span> puzzles!</p>
          <div className="flex gap-4">
            <button
              onClick={handlePlayAgain}
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Play Again
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg"
            >
              Home
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* ✅ Timer + solved count bar */}
          <div className="absolute top-4 left-4 flex items-center gap-6 bg-black/60 text-white px-4 py-2 rounded-lg shadow-md">
            <span
              className={`font-mono text-lg ${
                timeLeft <= 10 ? "text-red-400 animate-pulse" : ""
              }`}
            >
              ⏳ {timeLeft}s
            </span>
            <span className="font-mono text-lg">✅ {solvedCount}</span>
          </div>

          {/* ✅ Chess board */}
          <div className="w-full max-w-[80vmin] aspect-square">
            <Board />
          </div>
        </>
      )}
    </div>
  );
}
