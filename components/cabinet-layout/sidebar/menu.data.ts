import { LayoutDashboard } from "lucide-react";
import { IMenuItem } from "./menu.interface";

export const MENU: IMenuItem[] = [
  {
    icon: LayoutDashboard,
    link: "/cabinet",
    name: "Dashboard",
  },
  {
    icon: LayoutDashboard,
    link: "/organizations",
    name: "Organizations",
  },
];
