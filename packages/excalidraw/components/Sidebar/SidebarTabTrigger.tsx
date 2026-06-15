import { Tabs as RadixTabs } from "radix-ui";

import type { SidebarTabName } from "../../types";

export const SidebarTabTrigger = ({
  children,
  tab,
  onTabSelect,
  ...rest
}: {
  children: React.ReactNode;
  tab: SidebarTabName;
  onTabSelect?: (tab: SidebarTabName) => void;
} & Omit<React.HTMLAttributes<HTMLButtonElement>, "onSelect">) => {
  return (
    <RadixTabs.Trigger value={tab} asChild>
      <button
        {...rest}
        type="button"
        className="excalidraw-button sidebar-tab-trigger"
        onClick={(event) => {
          rest.onClick?.(event);
          onTabSelect?.(tab);
        }}
      >
        {children}
      </button>
    </RadixTabs.Trigger>
  );
};
SidebarTabTrigger.displayName = "SidebarTabTrigger";
