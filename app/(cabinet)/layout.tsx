import { PropsWithChildren } from "react";
import { DashboardHeader } from "./_components/DashboardHeader";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
};
export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="h-full container mx-auto px-2">
      <DashboardHeader />
      {children}
    </div>
  );
}
