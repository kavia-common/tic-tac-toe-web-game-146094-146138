"use client";

import React from "react";
import { Board } from "@/components/Board";
import { Controls } from "@/components/Controls";
import {
  createInitialState,
  playMove,
  resetGame,
  type GameState,
} from "@/lib/game";

export default function Home() {
  const [state, setState] = React.useState<GameState>(createInitialState());

  const handleCellClick = (idx: number) => {
    setState((prev) => playMove(prev, idx));
  };

  const handleReset = () => {
    setState(resetGame());
  };

  const { board, currentPlayer, winner, gameOver, winningLine, moves } = state;

  return (
    <main className="center-wrap">
      <section className="game-card" aria-label="Tic Tac Toe game card">
        <div className="card-head">
          <div className="turn-indicator" role="status">
            <span className="turn-dot" aria-hidden="true" />
            <span>
              {gameOver
                ? winner
                  ? `Winner: ${winner}`
                  : "Tie game"
                : `Turn: ${currentPlayer}`}
            </span>
          </div>
          <div className="card-title">3 × 3 Board</div>
        </div>

        <div className="board-wrap">
          <Board
            cells={board}
            onCellClick={handleCellClick}
            disabled={gameOver}
            winningLine={winningLine}
          />
        </div>

        <Controls
          currentPlayer={currentPlayer}
          gameOver={gameOver}
          winner={winner}
          onReset={handleReset}
          moves={moves}
        />
      </section>
    </main>
  );
}
