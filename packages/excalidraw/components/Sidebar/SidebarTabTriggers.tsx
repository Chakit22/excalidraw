import { Tabs as RadixTabs } from "radix-ui";

import type { SidebarTabName } from "../../types";

export const SidebarTabTriggers = ({
  children,
  onTabSelect,
  ...rest
}: { children: React.ReactNode } & Omit<
  React.RefAttributes<HTMLDivElement>,
  "onSelect"
> & {
    onTabSelect?: (tab: SidebarTabName) => void;
  }) => {
  void onTabSelect;

  return (
    <RadixTabs.List className="sidebar-triggers" {...rest}>
      {children}
    </RadixTabs.List>
  );
};
SidebarTabTriggers.displayName = "SidebarTabTriggers";
