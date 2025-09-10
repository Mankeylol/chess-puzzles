"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, ChartNoAxesColumnIcon } from "lucide-react"; 

const navItems = [
  { href: "/", label: "Home", icon: <Home size={20} /> },
  { href: "/leaderboard", label: "Leaderboard", icon: <ChartNoAxesColumnIcon size={20} /> },
  { href: "/profile", label: "Profile", icon: <User size={20} /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md">
      <ul className="flex justify-around items-center py-2">
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col items-center text-sm ${
                  isActive ? "text-[#4b824b] font-semibold" : "text-gray-500"
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
