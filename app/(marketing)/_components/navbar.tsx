import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle/ModeToggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center dark:bg-gray-900">
      <Logo />
      <div className="text-black md:max-w-screen-2xl mx-auto flex items-center w-full justify-end gap-3">
        <Button
          size={"sm"}
          variant={"ghost"}
          className=" dark:hover:bg-gray-800"
          asChild
        >
          <Link href={"/sign-in"} className="dark:text-neutral-50">
            Sign In
          </Link>
        </Button>
        <Button size={"sm"} asChild>
          <Link href={"/sign-up"}>Sign Up</Link>
        </Button>

        <ModeToggle />
      </div>
    </div>
  );
};
