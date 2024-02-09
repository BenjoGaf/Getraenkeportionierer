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
import { error } from "console";

export default function DropdownMenuRadioGroupDemo({
  pumpenZahl,
  allDrinksGiven,
}) {
  allDrinksGiven = JSON.parse(allDrinksGiven);
  const [selectedDrink, setSelectedDrink] = React.useState("Cola");

  const [allDrinks, setAllDrinks] = React.useState(allDrinksGiven);

  function valueChanged(drinkToUpdate, pumpeIndex) {
    allDrinks.map((drink) => {
      if (drink.drinkName === drinkToUpdate) drink.pumpe = pumpeIndex;
    });
    setAllDrinks(allDrinks);
    console.log(allDrinks);
  }

  function getValuePump(): string {
    let pumpDrink = "nothing";
    allDrinks.map((drink) => {
      if (drink.pumpe === pumpenZahl) pumpDrink = drink.drinkName;
    });
    return pumpDrink;
  }

  return (
    <div className="flex flex-col p-3">
      <div className="p-2">Pumpe {pumpenZahl}:</div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{getValuePump()}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Drink</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={getValuePump()}
              onValueChange={setSelectedDrink}
            >
              {allDrinks.map((drink, index) => (
                <DropdownMenuRadioItem
                  key={index}
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
