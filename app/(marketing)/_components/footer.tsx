import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100 dark:bg-gray-900">
      <div className="text-black md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size={"sm"} variant={"link"} asChild>
            <Link href={"#"} className="dark:text-gray-50">
              Privacy Policy
            </Link>
          </Button>
          <Button size={"sm"} variant={"link"} asChild>
            <Link href={"#"} className="dark:text-gray-50">
              Terms of Service
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
