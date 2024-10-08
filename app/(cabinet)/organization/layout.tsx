import { Metadata } from "next";
import { PropsWithChildren } from "react";
import Sidebar from "../_components/Sidebar";
export const metadata: Metadata = {
  title: "Organization",
};
export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="pt-12 md:pt-12 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
}
