import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ModeToggle } from "./ui/ModeToggle/ModeToggle";
import { MainNav } from "./main-nav";
import { buttonVariants } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-foreground dark:bg-background">
      <div className="container px-2 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-3">
            <Link
              href={siteConfig.links.signIn}
              className="text-background dark:text-foreground text-sm hover:underline"
            >
              Sign In
            </Link>
            <Link
              href={siteConfig.links.signUp}
              className={buttonVariants({ variant: "outline" })}
            >
              Sign Up
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
