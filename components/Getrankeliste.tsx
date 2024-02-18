"use client";
import React from "react";

const Getrankeliste = ({ allDrinks }) => {
  return (
    <div className="flex flex-col w-1/2 justify-center">
      <div>
        <div className="font-sans text-2xl pb-3 text-center">
          Getränkeliste:
        </div>
      </div>
      <div className="flex flex-col flex-wrap min-h-44 text-center">
        {allDrinks.map((drink, index) => (
          <div className="p-2" key={index}>
            {drink.drinkName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getrankeliste;
