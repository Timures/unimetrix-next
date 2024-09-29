import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/main-nav";
import { CreateOrganization } from "../organization/CreateOrganization";
import { SelectOrg } from "../organizations/SelectOrg";
import { UserMenu } from "../user/UserMenu";
import { MobileSidebar } from "./MobileSidebar";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-foreground dark:bg-background">
      <div className="container mx-auto px-2 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MobileSidebar />
        <MainNav items={siteConfig.dashboardNav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-3">
            <SelectOrg />
            <UserMenu />
          </nav>
        </div>
      </div>
    </header>
  );
}
