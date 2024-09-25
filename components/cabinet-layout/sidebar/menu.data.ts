import { Building2, LayoutDashboard, Settings2 } from "lucide-react";
import { IMenuItem } from "./menu.interface";

export const MENU: IMenuItem[] = [
  {
    icon: LayoutDashboard,
    link: "/cabinet",
    name: "Dashboard",
  },
  {
    icon: Building2,
    link: "/cabinet/organizations",
    name: "Organizations",
  },
  {
    icon: Settings2,
    link: "/cabinet/settings",
    name: "Settings",
  },
];
