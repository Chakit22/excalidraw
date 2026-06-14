import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

import DropdownMenuSubContent from "./DropdownMenuSubContent";
import DropdownMenuSubTrigger from "./DropdownMenuSubTrigger";
import {
  getSubMenuContentComponent,
  getSubMenuTriggerComponent,
} from "./dropdownMenuUtils";
import React, { useState } from "react";

type MenuSubTriggerInjectedProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const DropdownMenuSub = ({ children }: { children?: React.ReactNode }) => {
  const MenuTriggerComp = getSubMenuTriggerComponent(children);
  const MenuContentComp = getSubMenuContentComponent(children);
  const [open, setOpen] = useState(false);
  const MenuTriggerWithProps =
    React.isValidElement<MenuSubTriggerInjectedProps>(MenuTriggerComp)
      ? React.cloneElement(MenuTriggerComp, {
          onClick: () => {
            setOpen((prev) => !prev);
          },
        })
      : MenuTriggerComp;

  return (
    <DropdownMenuPrimitive.Sub open={open}>
      {MenuTriggerWithProps}
      {MenuContentComp}
    </DropdownMenuPrimitive.Sub>
  );
};

DropdownMenuSub.Trigger = DropdownMenuSubTrigger;
DropdownMenuSub.Content = DropdownMenuSubContent;

DropdownMenuSub.displayName = "DropdownMenuSub";

export default DropdownMenuSub;
