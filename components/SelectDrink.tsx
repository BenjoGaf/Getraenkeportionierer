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

export default function DropdownMenuRadioGroupDemo({ pumpenZahl, allDrinks }) {
  allDrinks = JSON.parse(allDrinks);
  const [selectedDrink, setSelectedDrink] = React.useState("Cola");
  function valueChanged() {
    console.log(allDrinks);
  }
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
            {allDrinks.map((drink) => (
              <DropdownMenuRadioItem value={drink.drinkName}>
                {drink.drinkName}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
