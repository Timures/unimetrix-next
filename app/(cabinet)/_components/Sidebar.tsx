"use client";

import { usePathname } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { useProfile } from "@/hooks/useProfile";

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
  const [expanded, setExpanded] = useLocalStorage<Record<string, boolean>>(
    storageKey,
    {}
  );

  // Извлекаем id организации из пути
  const getActiveOrganizationSlug = (path: string): string | undefined => {
    const parts = path.split("/");
    const organizationIndex = parts.indexOf("organization");

    // Проверяем, есть ли индекс "organization" и есть ли следующий элемент
    if (organizationIndex !== -1 && parts.length > organizationIndex + 1) {
      return parts[organizationIndex + 1]; // Получаем ID организации
    }
    return undefined; // Если ID не найден
  };

  const activeOrganization = getActiveOrganizationSlug(pathname);

  const onExpand = (slug: string) => {
    setExpanded((current) => {
      const newState = { ...current };
      // Закрываем все
      Object.keys(newState).forEach((key) => {
        newState[key] = false;
      });
      // Открываем только текущий
      newState[slug] = true;
      return newState;
    });
    setExpanded((current) => ({ ...current, [slug]: true })); // Открываем текущий
  };

  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-10 w-[50%]" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <NavItem.Skeleton />
          <NavItem.Skeleton />
          <NavItem.Skeleton />
        </div>
      </>
    );
  }

  return (
    <aside>
      <div className="font-medium text-xs flex items-center justify-between mb-1">
        <span className="pl-4">Workspaces</span>
        <CreateOrganization />
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        {data?.organizations.map((organization) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization === organization.slug}
            isExpanded={expanded[organization.slug]}
            organization={organization as Organization}
            onExpand={() => onExpand(organization.slug)}
          />
        ))}
      </Accordion>
    </aside>
  );
};

export default Sidebar;
