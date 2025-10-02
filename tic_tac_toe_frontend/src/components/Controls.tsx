"use client";

import React from "react";
import type { Player } from "./Board";

export interface ControlsProps {
  currentPlayer: Player;
  gameOver: boolean;
  winner: Player | null;
  onReset: () => void;
  moves: number;
}

/**
 * PUBLIC_INTERFACE
 * Displays turn indicator, game status (winner or tie), and reset controls.
 */
export function Controls({
  currentPlayer,
  gameOver,
  winner,
  onReset,
  moves,
}: ControlsProps) {
  const statusText = gameOver
    ? winner
      ? `Winner: ${winner}`
      : "It's a Tie!"
    : `Turn: ${currentPlayer}`;

  return (
    <div className="controls" aria-live="polite">
      <div className="status">
        <span className="status-line" aria-hidden="true" />
        <span className="status-text">{statusText}</span>
        <span className="status-line" aria-hidden="true" />
      </div>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onReset}
          aria-label="Reset game"
        >
          Reset Game
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onReset}
          aria-label="Play again"
          disabled={!gameOver && moves === 0}
          title={!gameOver && moves === 0 ? "Make a move first" : "Play again"}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
