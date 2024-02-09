import React from "react";

const Getrankeliste = ({ allDrinks }) => {
  allDrinks = JSON.parse(allDrinks);

  return (
    <div>
      <div>
        <div className="font-sans text-2xl pb-3 text-center">
          Getränkeliste:
        </div>
      </div>
      <div className="flex flex-col flex-wrap">
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
