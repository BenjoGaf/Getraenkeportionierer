"use client";

import { useEffect } from "react";
import DropdownMenuRadioGroupDemo from "./PumpeDropDown";
import { updatePumpe } from "./dataBaseFunctions";

export default function DropDownMenus({
  allDrinks,
  updatePumpenLocal,
  fetchDrinks,
}) {
  useEffect(() => {
    fetchDrinks();
  }, []);

  const pumpChanged = (drinkToUpdate, pumpeToUpdate) => {
    // updatePumpenLocal(drinkToUpdate, pumpeToUpdate);

    updatePumpe(drinkToUpdate, pumpeToUpdate);
    fetchDrinks();
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
