import React from "react";
import { Tabs as RadixTabs } from "radix-ui";

import type { SidebarTabName } from "../../types";

type SidebarTabTriggerWithProps = {
  onTabSelect?: (tab: SidebarTabName) => void;
};

export const SidebarTabTriggers = ({
  children,
  onTabSelect,
  ...rest
}: {
  children: React.ReactNode;
  onTabSelect?: (tab: SidebarTabName) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect">) => {
  const components = React.Children.map(children, (child) => {
    if (!React.isValidElement<SidebarTabTriggerWithProps>(child)) {
      return child;
    }

    return React.cloneElement(child, {
      onTabSelect,
    });
  });

  return (
    <RadixTabs.List className="sidebar-triggers" {...rest}>
      {components}
    </RadixTabs.List>
  );
};
SidebarTabTriggers.displayName = "SidebarTabTriggers";
