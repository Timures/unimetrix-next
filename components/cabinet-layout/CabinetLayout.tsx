import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="grid min-h-screen 2xl:grid-cols-[1.1fr_6fr grid-cols-[1.2fr_6fr] shrink-0">
      <Sidebar />

      <main className="p-5 overflow-x-hidden max-h-screen relative">
        <Header />
        {children}
      </main>
    </div>
  );
}
