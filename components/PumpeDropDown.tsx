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
import { useEffect } from "react";

import { error } from "console";

export default function DropdownMenuRadioGroupDemo({
  pumpenZahl,
  allDrinks,
  pumpChanged,
}) {
  const [selectedDrink, setSelectedDrink] = React.useState("nichts");

  useEffect(() => {
    let cnt = 0;
    allDrinks.map((drink) => {
      if (drink.pumpe === pumpenZahl) setSelectedDrink(drink.drinkName);
      else cnt++;
    });
    if (cnt === allDrinks.length) setSelectedDrink("nichts");
    console.log(pumpenZahl);
  }, [allDrinks]);

  return (
    <div className="flex flex-col p-3 w-44 justify-center">
      <div className="p-2 text-xl md:text-3xl">Pumpe {pumpenZahl}:</div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="lg">
              {selectedDrink}
            </Button>
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
                  key={index}
                  value={drink.drinkName}
                  onClick={() => {
                    pumpChanged(drink.drinkName, pumpenZahl);
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
