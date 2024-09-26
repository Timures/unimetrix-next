import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <p
          className={cn(
            "text-lg text-neutral-700 pb-1 dark:text-neutral-50",
            headingFont.className
          )}
        >
          <span className="text-orange-500">Jos</span>par
        </p>
      </div>
    </Link>
  );
};
