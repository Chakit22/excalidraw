import React from "react";

import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

import DropdownMenuSubContent from "./DropdownMenuSubContent";
import DropdownMenuSubTrigger from "./DropdownMenuSubTrigger";
import {
  getSubMenuContentComponent,
  getSubMenuTriggerComponent,
} from "./dropdownMenuUtils";

const DropdownMenuSub = ({ children }: { children?: React.ReactNode }) => {
  const [practiceSubmenuOpen, setPracticeSubmenuOpen] = React.useState(false);
  const MenuTriggerComp = getSubMenuTriggerComponent(children);
  const MenuContentComp = getSubMenuContentComponent(children);
  return (
    <DropdownMenuPrimitive.Sub
      open={practiceSubmenuOpen}
      onOpenChange={(open) => {
        if (open) {
          setPracticeSubmenuOpen(true);
        }
      }}
    >
      {MenuTriggerComp}
      {MenuContentComp}
    </DropdownMenuPrimitive.Sub>
  );
};

DropdownMenuSub.Trigger = DropdownMenuSubTrigger;
DropdownMenuSub.Content = DropdownMenuSubContent;

DropdownMenuSub.displayName = "DropdownMenuSub";

export default DropdownMenuSub;
