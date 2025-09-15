"use client";

import { Chessboard } from "react-chessboard";
import { useEffect, useState } from "react";
import { Chess, Square } from "chess.js";
import type {
  PieceDropHandlerArgs,
  SquareHandlerArgs,
} from "react-chessboard";

type Puzzle = {
  pgn: string;
  solution: string[];
};

const moveSound = typeof Audio !== "undefined" ? new Audio("/sounds/move-self.mp3") : null;
const captureSound = typeof Audio !== "undefined" ? new Audio("/sounds/capture.mp3") : null;


export default function Board({
  puzzle,
  onPuzzleSolved,
}: {
  puzzle: Puzzle | null;
  onPuzzleSolved: () => void;
}) {
  const [game, setGame] = useState(new Chess());
  const [moveFrom, setMoveFrom] = useState("");
  const [solution, setSolution] = useState<string[]>([]);
  const [optionSquares, setOptionSquares] = useState({});
  const [boardOrientation, setBoardOrientation] = useState<"white" | "black">(
    "white"
  );

  const showAnimations = false;
  const darkSquareStyle = { backgroundColor: "#739552" };
  const lightSquareStyle = { backgroundColor: "#ebecd0" };

  useEffect(() => {
    if (!puzzle) return;

    const newGame = new Chess();
    newGame.loadPgn(puzzle.pgn);

    setGame(newGame);
    setBoardOrientation(newGame.turn() === "w" ? "white" : "black");
    setSolution(puzzle.solution);
    setMoveFrom("");
    setOptionSquares({});
  }, [puzzle]);

  function getMoveOptions(square: Square) {
    const moves = game.moves({ square, verbose: true });
    if (moves.length === 0) {
      setOptionSquares({});
      return false;
    }
    const newSquares: Record<string, React.CSSProperties> = {};

    for (const move of moves) {
      newSquares[move.to] = {
        background:
          game.get(move.to) && game.get(move.to)?.color !== game.get(square)?.color
            ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
            : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
        borderRadius: "50%",
      };
    }
    newSquares[square] = { background: "rgba(255, 255, 0, 0.4)" };
    setOptionSquares(newSquares);
    return true;
  }

  function onPieceDrop({ sourceSquare, targetSquare }: PieceDropHandlerArgs) {
    if (!targetSquare || sourceSquare === targetSquare) return false;
  
    const prevFen = game.fen();
    const newGame = new Chess(prevFen);
  
    const legalMoves = newGame.moves({ verbose: true });
    const isLegal = legalMoves.find(
      (m) => m.from === sourceSquare && m.to === targetSquare
    );
  
    if (!isLegal) return false;
  
    const move = newGame.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });
  
    if (!move) return false;
  
    const moveStr = move.from + move.to + (move.promotion ?? "");
  
    // Only play sound if it's the correct puzzle move
    if (solution.length > 0 && moveStr === solution[0]) {
      if (move.captured) {
        captureSound?.play();
      } else {
        moveSound?.play();
      }
  
      let updatedSolution = solution.slice(1);
      setGame(newGame);
      setSolution(updatedSolution);
  
      // Handle opponent move after 2-second delay
      if (updatedSolution.length > 0) {
        const opponentMoveStr = updatedSolution[0];
        setTimeout(() => {
          const from = opponentMoveStr.slice(0, 2);
          const to = opponentMoveStr.slice(2, 4);
          const promotion = opponentMoveStr.length > 4 ? opponentMoveStr[4] : undefined;
  
          const opponentGame = new Chess(newGame.fen());
          const opponentMove = opponentGame.move({ from, to, promotion });
  
          if (opponentMove) {
            setGame(opponentGame);
            setSolution((prev) => prev.slice(1));
  
            // Play opponent move sound
            if (opponentMove.captured) {
              captureSound?.play();
            } else {
              moveSound?.play();
            }
  
            if (updatedSolution.length === 1) onPuzzleSolved();
          }
        }, 300); // 2-second delay
      } else {
        onPuzzleSolved();
      }
  
      return true;
    }
  
    return false; // incorrect move, no sound
  }
  
  

  function onSquareClick({ square, piece }: SquareHandlerArgs) {
    if (!moveFrom && piece) {
      const hasMoveOptions = getMoveOptions(square as Square);
      if (hasMoveOptions) setMoveFrom(square);
      return;
    }

    const moves = game.moves({ square: moveFrom as Square, verbose: true });
    const foundMove = moves.find((m) => m.from === moveFrom && m.to === square);

    if (!foundMove) {
      const hasMoveOptions = getMoveOptions(square as Square);
      setMoveFrom(hasMoveOptions ? square : "");
      return;
    }

    game.move(foundMove);
    setGame(new Chess(game.fen()));
    setMoveFrom("");
    return true;
  }

  const chessboardOptions = {
    position: game.fen(),
    onPieceDrop,
    onSquareClick,
    moveFrom,
    optionSquares,
    boardOrientation,
    showAnimations,
    darkSquareStyle,
    lightSquareStyle,
  };

  return <Chessboard options={chessboardOptions} />;
}
