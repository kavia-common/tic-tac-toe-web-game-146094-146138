import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tic Tac Toe – Ocean Professional",
  description: "Play Tic Tac Toe in a modern, minimalist Ocean Professional UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="app-shell" suppressHydrationWarning>
        <header className="site-header" role="banner">
          <div className="header-inner">
            <span aria-hidden="true" className="brand-mark" />
            <div>
              <div className="header-title">Tic Tac Toe</div>
              <div className="text-xs text-gray-500">Modern. Minimal. Ocean Professional.</div>
            </div>
            <div className="header-sub">2-Player Local</div>
          </div>
        </header>
        {children}
        <footer className="site-footer" role="contentinfo">
          Built with Next.js • Ocean Professional theme
        </footer>
      </body>
    </html>
  );
}
