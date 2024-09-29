import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
const headingFont = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
});
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center gap-3">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" /># 1 task management for Online
          schools!
        </div>
        <h1
          className={cn(
            "text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl text-background dark:text-foreground",
            headingFont.className
          )}
        >
          Unimetrix helps online business move
        </h1>

        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>

        <p
          className={cn(
            "max-w-[700px] text-lg text-muted-foreground text-center",
            textFont.className
          )}
        >
          Collaborate, manage projects, and reach new productivity peaks. From
          hight rises to the home office, the way your team works is unique -
          accomplish it all with
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            Sign Up Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketingPage;
