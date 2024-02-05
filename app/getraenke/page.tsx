import * as React from "react";

import DropdownMenuRadioGroupDemo from "@/components/SelectDrink";

import returnAllDrinks from "@/components/dataBaseFunctions";

// async function getDrinksString();
let allDrinks = await returnAllDrinks();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around items-center justify-items-start p-12 h-screen">
      <div className="flex flex-col p-3 ">
        <div className="font-sans text-4xl pb-3 text-center">Getränkeliste</div>
      </div>
      {/* Inhalt */}
      <div className="flex flex-col w-full flex-wrap justify-between p-3 ">
        <div className="flex flex-row p-5">
          <DropdownMenuRadioGroupDemo pumpenZahl={1} />
        </div>
      </div>
    </main>
  );
}
