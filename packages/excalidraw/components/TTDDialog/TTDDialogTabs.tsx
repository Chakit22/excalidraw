import { Tabs as RadixTabs } from "radix-ui";

import type { ReactNode } from "react";

const TTDDialogTabs = (
  props: {
    children: ReactNode;
  } & { dialog: "ttd"; tab: "text-to-diagram" | "mermaid" },
) => {
  return (
    <RadixTabs.Root className="ttd-dialog-tabs-root" value={props.tab}>
      {props.children}
    </RadixTabs.Root>
  );
};

TTDDialogTabs.displayName = "TTDDialogTabs";

export default TTDDialogTabs;
