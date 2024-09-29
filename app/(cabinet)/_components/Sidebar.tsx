"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useProfile } from "@/hooks/useProfile";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { CreateOrganization } from "../organization/CreateOrganization";

interface SidebarProps {
  storageKey?: string;
}

const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const { data, isLoading } = useProfile();
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((current) => ({
      ...current,
      [id]: !expanded[id],
    }));
  };

  if (isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }
  return (
    <aside className="font-medium text-xs flex items-center mb-1">
      <span className="pl-4">Workspaces</span>
      <CreateOrganization />
    </aside>
  );
};
export default Sidebar;
