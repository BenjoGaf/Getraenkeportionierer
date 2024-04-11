"use client";

import React, { useState } from "react";

import { returnAllDrinks } from "@/components/dataBaseFunctions";
import Getrankeliste from "@/components/Getrankeliste";
import { useRouter } from "next/navigation";
import DropDownMenus from "@/components/PumpenDropDownMenus";
import { Button } from "@/components/ui/button";
import DeleteDropDownMenu from "@/components/DeleteDropDownMenu";
import { InputWithButton } from "@/components/InputWithButton";

export default function Home() {
  const [allDrinks, setAllDrinks] = useState([]);

  const router = useRouter();

  const fetchDrinks = async () => {
    setAllDrinks(JSON.parse(await returnAllDrinks()));
  };

  const updatePumpen = async (drinkToUpdate, pumpeToUpdate) => {
    let allDrinksChanged = allDrinks;

    allDrinksChanged.map((drink) => {
      if (drink.pumpe === pumpeToUpdate) drink.pumpe = 0;
      if (drink.drinkName === drinkToUpdate) drink.pumpe = pumpeToUpdate;
    });
    console.log(allDrinksChanged);

    setAllDrinks(allDrinksChanged);
  };

  return (
    <main className="flex min-h-screen flex-col  items-center justify-items-start p-12 h-screen">
      <div className="flex flex-row p-3">
        <div className="font-sans text-5xl pb-3 text-center">
          Automat bearbeiten
        </div>
        {/* Button zurück */}
        <div className="md:pl-80 pt-8 pl-8">
          <Button variant="outline" size="lg" onClick={() => router.push("/")}>
            Zurück
          </Button>
        </div>
      </div>
      {/* Inhalt */}
      <div className="flex flex-col w-full flex-wrap justify-between p-3 ">
        <div className="flex md:flex-row p-5 md:justify-around flex-col">
          <DropDownMenus
            allDrinks={allDrinks}
            updatePumpenLocal={updatePumpen}
            fetchDrinks={fetchDrinks}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around w-full md:px-32 ">
        <Getrankeliste allDrinks={allDrinks} />
        <div className="flex flex-col md:w-1/2">
          <InputWithButton />
          <DeleteDropDownMenu allDrinks={allDrinks} fetchDrinks={fetchDrinks} />
        </div>
      </div>
    </main>
  );
}
