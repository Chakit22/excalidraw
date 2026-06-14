import { Tabs as RadixTabs } from "radix-ui";

import type { SidebarTabName } from "../../types";

export const SidebarTabTrigger = ({
  children,
  tab,
  onSelect,
  onTabSelect,
  ...rest
}: {
  children: React.ReactNode;
  tab: SidebarTabName;
  onSelect?: React.ReactEventHandler<HTMLButtonElement> | undefined;
  onTabSelect?: (tab: SidebarTabName) => void;
} & Omit<React.HTMLAttributes<HTMLButtonElement>, "onSelect">) => {
  return (
    <RadixTabs.Trigger
      value={tab}
      asChild
      onSelect={(event) => {
        onSelect?.(event);
        onTabSelect?.(tab);
      }}
    >
      <button
        type={"button"}
        className={`excalidraw-button sidebar-tab-trigger`}
        {...rest}
      >
        {children}
      </button>
    </RadixTabs.Trigger>
  );
};
SidebarTabTrigger.displayName = "SidebarTabTrigger";
