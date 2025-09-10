// app/puzzles/layout.tsx
import React from "react";

export default function PuzzlesLayout({ children }: { children: React.ReactNode }) {
  // Note: this is a nested layout that inherits Providers from root layout
  // but intentionally does NOT render the Navbar.
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {children}
      </main>
      {/* no navbar here */}
    </div>
  );
}
