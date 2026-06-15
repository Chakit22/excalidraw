import { Tabs as RadixTabs } from "radix-ui";

export const TTDDialogTabTrigger = ({
  children,
  tab,
  onTabSelect,
  ...rest
}: {
  children: React.ReactNode;
  tab: "text-to-diagram" | "mermaid";
  onTabSelect?: (tab: "text-to-diagram" | "mermaid") => void;
} & Omit<React.HTMLAttributes<HTMLButtonElement>, "onSelect">) => {
  return (
    <RadixTabs.Trigger
      value={tab}
      asChild
      onClick={(event) => {
        onTabSelect?.(tab);
      }}
    >
      <button type="button" className="ttd-dialog-tab-trigger" {...rest}>
        {children}
      </button>
    </RadixTabs.Trigger>
  );
};
TTDDialogTabTrigger.displayName = "TTDDialogTabTrigger";
