import { Metadata } from "next";
import { PropsWithChildren } from "react";
export const metadata: Metadata = {
  title: "Organization",
};
export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
