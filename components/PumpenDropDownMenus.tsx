"use client";

import { useEffect } from "react";
import DropdownMenuRadioGroupDemo from "./PumpeDropDown";
import { updatePumpe } from "./dataBaseFunctions";

export default function DropDownMenus({
  allDrinks,
  setAllDrinks,
  fetchDrinks,
}) {
  useEffect(() => {
    fetchDrinks();
  }, []);

  const pumpChanged = (drinkToUpdate, pumpeToUpdate) => {
    console.log(drinkToUpdate, pumpeToUpdate);
    let allDrinksChanged = allDrinks;

    allDrinksChanged.map((drink) => {
      if (drink.pumpe === pumpeToUpdate) drink.pumpe = 0;
      if (drink.drinkName === drinkToUpdate) drink.pumpe = pumpeToUpdate;
    });

    setAllDrinks(allDrinksChanged);
    console.log(allDrinks);

    updatePumpe(drinkToUpdate, pumpeToUpdate);
  };

  return (
    <>
      {[1, 2, 3, 4, 5].map((pumpe, index) => (
        <DropdownMenuRadioGroupDemo
          key={index}
          pumpenZahl={index + 1}
          allDrinks={allDrinks}
          pumpChanged={pumpChanged}
        />
      ))}
    </>
  );
}
