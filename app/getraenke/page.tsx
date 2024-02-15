import * as React from "react";

import DropdownMenuRadioGroupDemo from "@/components/SelectDrink";

import { returnAllDrinks } from "@/components/dataBaseFunctions";
import { updatePumpe } from "@/components/dataBaseFunctions";
import Getrankeliste from "@/components/Getrankeliste";

// async function getDrinksString();
let allDrinks = JSON.stringify(await returnAllDrinks());

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around items-center justify-items-start p-12 h-screen">
      <div className="flex flex-col p-3 ">
        <div className="font-sans text-4xl pb-3 text-center">
          Getränke bearbeiten
        </div>
      </div>
      {/* Inhalt */}
      <div className="flex flex-col w-full flex-wrap justify-between p-3 ">
        <div className="flex flex-row p-5 justify-around">
          {[1, 2, 3, 4, 5].map((pumpe, index) => (
            <DropdownMenuRadioGroupDemo
              key={index}
              pumpenZahl={index + 1}
              allDrinksGiven={allDrinks}
            />
          ))}
        </div>
      </div>
      <Getrankeliste allDrinks={allDrinks} />
    </main>
  );
}
