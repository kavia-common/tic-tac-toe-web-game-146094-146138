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
  /**
   * Render chess piece icons for players:
   * - X => Knight (horse)
   * - O => Queen
   * Icons are inline SVG to avoid external deps and to ensure crisp rendering.
   */
  const renderIcon = (value: CellValue) => {
    if (value === "X") {
      // Knight icon, filled with theme primary color via CSS currentColor
      return (
        <span className="mark mark-x" aria-hidden="true">
          <svg
            className="piece-svg"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Knight"
          >
            <path
              d="M19 22H5v-2h1v-2.5c0-1.657 1.343-3 3-3h2.5l-.86-1.72a2 2 0 0 1 .14-1.96l2.44-3.66c.16-.24.26-.52.26-.82V4.5a.5.5 0 0 1 .5-.5h.5c.828 0 1.5.672 1.5 1.5v1.25l1.3.65c.8.4 1.3 1.22 1.3 2.11v2.24c0 .41-.25.78-.63.93L16 13.5V15h1c1.657 0 3 1.343 3 3V20h1v2Zm-6-9.5 3.5-1.4V9.96c0-.19-.11-.36-.28-.45L15 8.75V5.5a.5.5 0 0 0-.5-.5H14v.5c0 .52-.15 1.03-.43 1.47l-2.44 3.66a.5.5 0 0 0-.03.49L12.44 14H9c-.828 0-1.5.672-1.5 1.5V20H16v-3.5c0-1.38-1.12-2.5-2.5-2.5h-.5v-1.5Z"
              fill="currentColor"
            />
          </svg>
        </span>
      );
    }
    if (value === "O") {
      // Queen icon, filled with theme amber via CSS currentColor
      return (
        <span className="mark mark-o" aria-hidden="true">
          <svg
            className="piece-svg"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Queen"
          >
            <path
              d="M7.5 7A1.5 1.5 0 1 1 6 5.5 1.5 1.5 0 0 1 7.5 7Zm9 0A1.5 1.5 0 1 1 15 5.5 1.5 1.5 0 0 1 16.5 7ZM12 7.75A1.75 1.75 0 1 0 12 4.25a1.75 1.75 0 0 0 0 3.5ZM5 9l2.5 6 2-2 2.5 2 2.5-2 2 2L19 9l-3 .75L14.5 9 12 10.5 9.5 9 8 9.75 5 9Zm1.5 9.5h11l.5 1.5H6l.5-1.5Zm1.5-3h8l1 2H6l1-2Z"
              fill="currentColor"
            />
          </svg>
        </span>
      );
    }
    return <span className="visually-hidden">Empty</span>;
  };

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
            {value ? renderIcon(value) : <span className="visually-hidden">Empty</span>}
          </button>
        );
      })}
    </div>
  );
}
