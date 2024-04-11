"use client";
import React from "react";

const Getrankeliste = ({ allDrinks }) => {
  return (
    <div className="flex flex-col align-middle w-full md:w-1/2 pt-12 md:pt-0 justify-center md:pr-28">
      <div>
        <div className="font-sans font-bold text-3xl pb-3 text-center">
          Getränkeliste:
        </div>
      </div>
      <div className="flex flex-col flex-wrap min-h-44 text-center">
        {allDrinks.map((drink, index) => (
          <div className="p-2 text-xl md:text-3xl" key={index}>
            {drink.drinkName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getrankeliste;
