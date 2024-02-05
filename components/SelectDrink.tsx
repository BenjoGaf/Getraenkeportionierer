"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function valueChanged() {
  console.log("pressed");
}

export default function DropdownMenuRadioGroupDemo({ pumpenZahl }) {
  const [selectedDrink, setSelectedDrink] = React.useState("Cola");

  return (
    <div>
      Pumpe {pumpenZahl}:
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{selectedDrink}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Drink</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={selectedDrink}
            onValueChange={setSelectedDrink}
            onClick={valueChanged}
          >
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
