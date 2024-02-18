"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { newDrink } from "./dataBaseFunctions";

export function InputWithButton() {
  const [inputValue, setInputValue] = useState("");

  const addDrink = (drinkToAdd) => {
    console.log(drinkToAdd);
    newDrink(drinkToAdd);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addDrink(inputValue);
      }}
    >
      <div className="flex flex-row w-full justify-between">
        <Input
          type="text"
          id="inputDrink"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter Drink"
        />
        <Button variant="outline" type="submit">
          Hinzufügen
        </Button>
      </div>
    </form>
  );
}
