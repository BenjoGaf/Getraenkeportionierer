"use client";

import React, { useState } from "react";

import { returnAllDrinks } from "@/components/dataBaseFunctions";
import Getrankeliste from "@/components/Getrankeliste";
import { useRouter } from "next/navigation";
import DropDownMenus from "@/components/PumpenDropDownMenus";
import { Button } from "@/components/ui/button";
import DeleteDropDownMenu from "@/components/DeleteDropDownMenu";

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
    <main className="flex min-h-screen flex-col justify-around items-center justify-items-start p-12 h-screen">
      <div className="flex flex-row p-3">
        <div className="font-sans text-5xl pb-3 text-center">
          Automat bearbeiten
        </div>
        {/* Button zurück */}
        <div className="pl-80">
          <Button variant="outline" size="lg" onClick={() => router.push("/")}>
            Zurück
          </Button>
        </div>
      </div>
      {/* Inhalt */}
      <div className="flex flex-col w-full flex-wrap justify-between p-3 ">
        <div className="flex flex-row p-5 justify-around">
          <DropDownMenus
            allDrinks={allDrinks}
            updatePumpenLocal={updatePumpen}
            fetchDrinks={fetchDrinks}
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around w-full px-32">
        <Getrankeliste allDrinks={allDrinks} />
        <DeleteDropDownMenu allDrinks={allDrinks} fetchDrinks={fetchDrinks} />
      </div>
    </main>
  );
}
