import { Tabs as RadixTabs } from "radix-ui";

import { useUIAppState } from "../../context/ui-appState";

export const SidebarTabs = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & Omit<React.RefAttributes<HTMLDivElement>, "onSelect">) => {
  const appState = useUIAppState();

  if (!appState.openSidebar) {
    return null;
  }

  return (
    <RadixTabs.Root
      className="sidebar-tabs-root"
      value={appState.openSidebar.tab}
      {...rest}
    >
      {children}
    </RadixTabs.Root>
  );
};
SidebarTabs.displayName = "SidebarTabs";
