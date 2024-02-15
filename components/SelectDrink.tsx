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
  allDrinksGiven,
}) {
  allDrinksGiven = JSON.parse(allDrinksGiven);

  const [allDrinks, setAllDrinks] = React.useState(allDrinksGiven);
  const [selectedDrink, setSelectedDrink] = React.useState("nothing");

  useEffect(() => {
    allDrinks.map((drink) => {
      if (drink.pumpe === pumpenZahl) setSelectedDrink(drink.drinkName);
    });
  }, []);

  function valueChanged(drinkToUpdate) {
    allDrinksGiven.map((drink) => {
      if (drink.drinkName === drinkToUpdate) drink.pumpe = pumpenZahl;
    });
    setAllDrinks(allDrinksGiven);
    setSelectedDrink(drinkToUpdate);
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
                  key={index}
                  value={drink.drinkName}
                  onClick={() => {
                    valueChanged(drink.drinkName);
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
