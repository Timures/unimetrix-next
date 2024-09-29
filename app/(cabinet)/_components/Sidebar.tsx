"use client";
import { usePathname } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { useProfile } from "@/hooks/useProfile";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { CreateOrganization } from "../organization/CreateOrganization";

import { NavItem, Organization } from "./NavItem";

interface SidebarProps {
  storageKey?: string;
}

const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const pathname = usePathname();
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

  // Извлекаем id организации из пути
  const activeOrganization = pathname.split("/").pop();

  if (isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  <div className="font-medium text-xs flex items-center justify-between mb-1">
    <span className="pl-4">Workspaces</span>
    <CreateOrganization />
  </div>;
  return (
    <aside>
      <div className="font-medium text-xs flex items-center justify-between mb-1">
        <span className="pl-4">Workspaces</span>
        <CreateOrganization />
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {data?.organizations.map((organization) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </aside>
  );
};
export default Sidebar;
