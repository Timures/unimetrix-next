"use client";

import { GanttChartSquare } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";

export function Sidebar() {
  return (
    <aside className="bg-gray-900 border-r border-r-border border-gray-800 h-full flex flex-col justify-between">
      <div>
        <Link
          href="/"
          className="flex  items-center gap-2.5 p-2 border-b border-b-border"
        >
          <GanttChartSquare className="text-yellow-500" size={38} />
          <span className="text-2xl font-bold relative">
            Unimetrix
            <span className="absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal">
              beta
            </span>
          </span>
        </Link>

        <div className="p-3 relative">
          <LogoutButton />
          {MENU.map((item) => (
            <MenuItem item={item} key={item.link} />
          ))}
        </div>

        <footer className="text-xs opacity-40 font-normal text-center p-2">
          2024 &copy; With love from{" "}
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-primary text-brand-300 transition-colors"
          >
            Timures
          </a>
          . <br />
          All rights reserved.
        </footer>
      </div>
    </aside>
  );
}
