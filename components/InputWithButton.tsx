"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { newDrink } from "./dataBaseFunctions";

export function InputWithButton() {
  const [inputValue, setInputValue] = useState("");
  const [showDrinkAddedText, setShowDrinkAddedText] = useState(false);
  const [drinkAddedWorked, setDrinkAddedWorked] = useState<boolean>(false);

  const addDrink = async (drinkToAdd) => {
    setDrinkAddedWorked(await newDrink(drinkToAdd));
    console.log(drinkAddedWorked);
    setInputValue("");
    setShowDrinkAddedText(true);
    setTimeout(() => {
      setShowDrinkAddedText(false);
    }, 3000);
  };

  return (
    <>
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
      <div>
        {showDrinkAddedText &&
          (drinkAddedWorked === true ? (
            <p>Getränk wurde hinzugefügt!</p>
          ) : (
            <p>Getränk existiert bereits!</p>
          ))}
      </div>
    </>
  );
}
