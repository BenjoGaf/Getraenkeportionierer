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

import { updatePumpe } from "@/components/dataBaseFunctions";

export default function DropdownMenuRadioGroupDemo({ pumpenZahl, allDrinks }) {
  allDrinks = JSON.parse(allDrinks);
  const [selectedDrink, setSelectedDrink] = React.useState("Cola");

  function valueChanged(drinkToUpdate, pumpeIndex) {
    allDrinks.map((drink) => {
      if (drink.drinkName === drinkToUpdate) drink.pumpe = pumpeIndex;
    });
    console.log(allDrinks);
  }

  return (
    <div className="flex flex-col p-3">
      <div className="p-2">Pumpe {pumpenZahl}:</div>
      <div>
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
            >
              {allDrinks.map((drink, index) => (
                <DropdownMenuRadioItem
                  value={drink.drinkName}
                  onClick={() => {
                    valueChanged(drink.drinkName, pumpenZahl);
                    // updatePumpe(drink.drinkName, pumpenZahl);
                  }}
                >
                  {drink.drinkName}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
