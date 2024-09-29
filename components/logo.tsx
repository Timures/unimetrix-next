import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
});

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo-unimetrix.svg" alt="Unimetrix" width={40} height={40} />
      <span
        className={cn(
          "inline-block font-bold text-background dark:text-foreground",
          headingFont.className
        )}
      >
        Unimetri<span className="text-yellow-400">x</span>
      </span>
    </Link>
  );
};
