"use client"

import { Chessboard } from 'react-chessboard';
import { useEffect, useState } from 'react';
import { Chess } from 'chess.js';
import type { PieceDropHandlerArgs, SquareHandlerArgs, } from "react-chessboard"; 
import { Square } from 'chess.js';



export default function Board({onPuzzleSolved}: {onPuzzleSolved: () => void}) {
    const [game, setGame] = useState(new Chess());
    const [moveFrom, setMoveFrom] = useState('');
    const [solution, setSolution] = useState<string[]>([]);
    const [optionSquares, setOptionSquares] = useState({});
    const [boardOrientation, setBoardOrientation] = useState<'white' | 'black'>('white');
    const showAnimations = false;
    


    const fetchPuzzle = async () => {
      const response = await fetch(`/api/getPuzzles?difficulty=easiest`);
      const data = await response.json();

      
      game.loadPgn(data.pgn);
      setGame(game);
      setBoardOrientation(game.turn() === 'w' ? 'white' : 'black');
      setSolution(data.solution);
  };

    useEffect(() => {
        fetchPuzzle();
    }, []);
  const chessboardOptions = {
    // your config options here
    position: game.fen(),
    onPieceDrop,
    onSquareClick,
    moveFrom,
    optionSquares,
    boardOrientation,
    showAnimations,
  };

  function getMoveOptions( square: Square){
    const moves = game.moves({
      square,
      verbose: true
    });
    if (moves.length === 0) {
      setOptionSquares({});
      return false;
    }
    const newSquares: Record<string, React.CSSProperties> = {};

      // loop through the moves and set the option squares
      for (const move of moves) {
        newSquares[move.to] = {
          background: game.get(move.to) && game.get(move.to)?.color !== game.get(square)?.color ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)' // larger circle for capturing
          : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
          // smaller circle for moving
          borderRadius: '50%'
        };
      }
      newSquares[square] = {
        background: 'rgba(255, 255, 0, 0.4)'
      };

      setOptionSquares(newSquares);
      return true;
  }

  function onPieceDrop({
    sourceSquare,
    targetSquare,
  }: PieceDropHandlerArgs) {

    if (!targetSquare) return false;

    const prevFen = game.fen();
    const newGame = new Chess(prevFen);

    const move = newGame.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) {
      return false;
    }


      const moveStr = move.from + move.to + (move.promotion ? move.promotion : "");
      if (solution.length > 0 && moveStr === solution[0]) {
        // ✅ correct move
        let updatedSolution = solution.slice(1); // remove player's move
    
        // check if opponent move exists
        if (updatedSolution.length > 0) {
          const opponentMoveStr = updatedSolution[0];
          const from = opponentMoveStr.slice(0, 2);
          const to = opponentMoveStr.slice(2, 4);
          const promotion = opponentMoveStr.length > 4 ? opponentMoveStr[4] : undefined;
    
          const opponentMove = newGame.move({ from, to, promotion });
          if (opponentMove !== null) {
            updatedSolution = updatedSolution.slice(1); // remove opponent's move
          }
        }
    
        setSolution(updatedSolution);
        setGame(newGame); // update board

        if (updatedSolution.length === 0) {
          onPuzzleSolved?.();
          fetchPuzzle(); // load next puzzle
        }
        return true;
      }

   else {
      // ❌ incorrect move → revert
      const resetGame = new Chess(prevFen);
    setGame(resetGame);
    return false;
    }
  
  }

  function onSquareClick({
    square,
    piece
  }: SquareHandlerArgs) {
    if (!moveFrom && piece) {
      // get the move options for the square
      const hasMoveOptions = getMoveOptions(square as Square);

      // if move options, set the moveFrom to the square
      if (hasMoveOptions) {
        setMoveFrom(square);
      }

      // return early
      return;
    }
    const moves = game.moves({
      square: moveFrom as Square,
      verbose: true
    });
    const foundMove = moves.find(m => m.from === moveFrom && m.to === square);

    if (!foundMove) {
      const hasMoveOptions = getMoveOptions(square as Square);

        // if new piece, setMoveFrom, otherwise clear moveFrom
        setMoveFrom(hasMoveOptions ? square : '');

        // return early
        return;
    }

    const move = game.move(foundMove);
    if (move === null) {
      return false;
    }

    setGame(new Chess(game.fen())); // trigger re-render with new state
    setMoveFrom('');
    return true;
  }



  return (
    <Chessboard options={chessboardOptions} />
  )
}