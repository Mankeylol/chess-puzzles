// app/profile/layout.tsx
import Navbar from "../components/navbar";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      <Navbar />
    </div>
  );
}
