export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Unimetrix",
  description: "Task manager that shows result",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  dashboardNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
};
