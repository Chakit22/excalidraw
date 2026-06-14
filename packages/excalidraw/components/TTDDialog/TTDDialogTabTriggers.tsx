import { Tabs as RadixTabs } from "radix-ui";

export const TTDDialogTabTriggers = ({
  children,
  onTabSelect,
  ...rest
}: {
  children: React.ReactNode;
  onTabSelect?: (tab: "text-to-diagram" | "mermaid") => void;
} & React.HTMLAttributes<HTMLDivElement>) => {
  void onTabSelect;

  return (
    <RadixTabs.List className="ttd-dialog-triggers" {...rest}>
      {children}
    </RadixTabs.List>
  );
};
TTDDialogTabTriggers.displayName = "TTDDialogTabTriggers";
