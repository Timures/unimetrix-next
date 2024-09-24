import CabinetLayout from "@/components/cabinet-layout/CabinetLayout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <CabinetLayout>{children}</CabinetLayout>;
}
