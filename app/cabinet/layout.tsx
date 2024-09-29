import { PropsWithChildren } from "react";
import { CabinetHeader } from "./_components/CabinetHeader";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
};
export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="h-full container mx-auto px-2">
      <CabinetHeader />
      {children}
    </div>
  );
}
