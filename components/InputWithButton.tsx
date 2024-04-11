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
    <div className="flex flex-col pt-10">
      <p className="p-2 text-xl font-bold md:text-3xl">
        Getränk der Liste hinzufügen:
      </p>
      <div>
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
              placeholder="Getränk"
            />
            <Button variant="outline" size="lg" type="submit">
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
      </div>
    </div>
  );
}
