import React from "react";

export default function NotFound() {
  return (
    <main className="center-wrap">
      <section className="game-card" role="alert" aria-live="assertive">
        <div className="card-head">
          <div className="card-title">404 – Page Not Found</div>
        </div>
        <div className="controls">
          <p className="status-text">
            The page you’re looking for doesn’t exist.
          </p>
        </div>
      </section>
    </main>
  );
}
