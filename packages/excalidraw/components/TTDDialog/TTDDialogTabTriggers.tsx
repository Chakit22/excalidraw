import React from "react";
import { Tabs as RadixTabs } from "radix-ui";

type TTDDialogTabTriggerWithProps = {
  onTabSelect?: (tab: "text-to-diagram" | "mermaid") => void;
};

export const TTDDialogTabTriggers = ({
  children,
  onTabSelect,
  ...rest
}: {
  children: React.ReactNode;
  onTabSelect?: (tab: "text-to-diagram" | "mermaid") => void;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const components = React.Children.map(children, (child) => {
    if (!React.isValidElement<TTDDialogTabTriggerWithProps>(child)) {
      return child;
    }

    return React.cloneElement(child, {
      onTabSelect,
    });
  });

  return (
    <RadixTabs.List className="ttd-dialog-triggers" {...rest}>
      {components}
    </RadixTabs.List>
  );
};
TTDDialogTabTriggers.displayName = "TTDDialogTabTriggers";
