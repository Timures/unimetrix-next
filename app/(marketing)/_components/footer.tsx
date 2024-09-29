import { Logo } from "@/components/logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full p-4 border-t bg-foreground dark:bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-background dark:text-foreground text-xs">
          Copyright Timures 2024
        </div>
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Link
            href={"#"}
            className="text-background dark:text-foreground text-sm hover:underline"
          >
            Privacy Policy
          </Link>

          <Link
            href={"#"}
            className="text-background dark:text-foreground text-sm hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
