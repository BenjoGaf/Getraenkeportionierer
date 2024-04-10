"use client";
import React from "react";

const Getrankeliste = ({ allDrinks }) => {
  return (
    <div className="flex flex-col w-1/2 justify-center pr-28">
      <div>
        <div className="font-sans text-3xl pb-3 text-center">
          Getränkeliste:
        </div>
      </div>
      <div className="flex flex-col flex-wrap min-h-44 text-center">
        {allDrinks.map((drink, index) => (
          <div className="p-2 text-2xl" key={index}>
            {drink.drinkName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getrankeliste;
