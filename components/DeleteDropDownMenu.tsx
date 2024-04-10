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
import { useState } from "react";
import { deleteDrink } from "./dataBaseFunctions";

export default function DeleteDropDownMenu({ allDrinks, fetchDrinks }) {
  const [selectedDrink, setSelectedDrink] = useState("auswählen");
  const [showDrinkDeletedText, setShowDrinkDeletedText] = useState(false);

  const deletePressed = () => {
    if (selectedDrink != "auswählen") deleteDrink(selectedDrink);

    fetchDrinks();

    setSelectedDrink("auswählen");
    setShowDrinkDeletedText(true);
    setTimeout(() => {
      setShowDrinkDeletedText(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col w-1/2">
      <div className="p-2 text-3xl">Getränk aus der Liste entfernen:</div>
      <div className="flex flex-row w-full">
        <div className="p-3 pr-20">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="lg">
                {selectedDrink}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Getränk auswählen</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={selectedDrink}
                onValueChange={setSelectedDrink}
              >
                {allDrinks.map((drink, index) => (
                  <DropdownMenuRadioItem key={index} value={drink.drinkName}>
                    {drink.drinkName}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-3">
          <Button variant="outline" size="lg" onClick={() => deletePressed()}>
            Getränk entfernen
          </Button>
        </div>
      </div>
      {showDrinkDeletedText && (
        <div className="p-3 text-red-500">
          <p>Drink wurde aus der Liste entfernt!</p>
        </div>
      )}
    </div>
  );
}
