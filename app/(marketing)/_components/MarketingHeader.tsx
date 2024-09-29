import Link from "next/link";

import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/main-nav";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle/ModeToggle";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-foreground dark:bg-background">
      <div className="container mx-auto px-2 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
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
              className={buttonVariants({ variant: "default" })}
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
