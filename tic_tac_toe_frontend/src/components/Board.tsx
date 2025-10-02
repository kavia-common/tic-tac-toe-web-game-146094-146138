"use client";

import React from "react";

export type Player = "X" | "O";
export type CellValue = Player | null;

export interface BoardProps {
  cells: CellValue[];
  onCellClick: (index: number) => void;
  disabled?: boolean;
  winningLine?: number[] | null;
}

/**
 * PUBLIC_INTERFACE
 * Renders the 3x3 Tic Tac Toe board and handles cell clicks.
 * - cells: array of 9 values (X, O, or null)
 * - onCellClick: callback with index when a cell is clicked
 * - disabled: optional flag to prevent interaction (e.g., game over)
 * - winningLine: optional array of indices highlighting the winning combination
 */
export function Board({
  cells,
  onCellClick,
  disabled = false,
  winningLine = null,
}: BoardProps) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {cells.map((value, idx) => {
        const isDisabled = disabled || value !== null;
        const isWinning =
          winningLine !== null ? winningLine.includes(idx) : false;
        return (
          <button
            key={idx}
            type="button"
            aria-label={`Cell ${idx + 1}${value ? `, ${value}` : ""}`}
            aria-disabled={isDisabled}
            className={[
              "cell",
              isDisabled ? "disabled" : "",
              isWinning ? "ring-2 ring-offset-2 ring-blue-500/70" : "",
            ].join(" ")}
            onClick={() => !isDisabled && onCellClick(idx)}
          >
            {value ? (
              <span
                className={["mark", value === "X" ? "mark-x" : "mark-o"].join(
                  " "
                )}
                aria-hidden="true"
              >
                {value}
              </span>
            ) : (
              <span className="visually-hidden">Empty</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
