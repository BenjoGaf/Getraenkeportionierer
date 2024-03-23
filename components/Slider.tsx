"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { sendServer } from "@/components/SendServer";
import SelectDrinkDropDownMenu from "./SelectDrinkDropDownMenu";
import { returnAllDrinks, returnSelectableDrinks } from "./dataBaseFunctions";
import { GET } from "@/app/api/sendMixToServer/route";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [selectableDrinks, setSelectableDrinks] = useState([]);
  const [selectedDrink1, setSelectedDrink1] = useState("auswählen");
  const [selectedDrink2, setSelectedDrink2] = useState("auswählen");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfiguredDrinksMessage, setShowConfiguredDrinksMessage] =
    useState(false);
  const [confDrinkMessage, setConfDrinkMessage] = useState("");
  const [showStopButton, setShowStopButton] = useState(false);
  const [showMixingMessage, setShowMixingMessage] = useState(false);
  const [mixingMessage, setMixingMessage] = useState("");

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    setSelectableDrinks(JSON.parse(await returnSelectableDrinks()));
  };

  const errorMixingDrink = (errorGiven) => {
    setErrorMessage(errorGiven);
    setShowErrorMessage(true);
    setTimeout(() => {
      setShowErrorMessage(false);
    }, 3000);
  };

  const configuredMessage = (message) => {
    setConfDrinkMessage(message);
    setShowConfiguredDrinksMessage(true);
    setTimeout(() => {
      setShowConfiguredDrinksMessage(false);
    }, 3000);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value, 10));
  };

  const cancelMixing = () => {
    fetch("/api/sendMixToServer?id=0.5,3,4").then((response) => {
      console.log(response);
    });
  };

  const giveParamsToServer = async (mixRatio) => {
    setMixingMessage("Getränk wird gemischt ...");
    setShowMixingMessage(true);
    setShowStopButton(true);

    sendServer(mixRatio).then((answer) => {
      console.log(answer);
      if (answer === "isMixing") {
        console.log(answer);
        setMixingMessage("Mischt bereits, bitte warten ...");
        setShowStopButton(false);
        setTimeout(() => {
          setShowMixingMessage(false);
        }, 3000);
      } else {
        setShowStopButton(false);
        setMixingMessage("Getränk wurde gemischt!");
        setTimeout(() => {
          setShowMixingMessage(false);
        }, 3000);
      }
    });
  };

  const sendMixdrinks = () => {
    console.log(selectableDrinks);
    const valueRightNow = sliderValue;

    let pumpSelectedDrink1: number = 0;
    let pumpSelectedDrink2: number = 0;

    if (selectedDrink1 !== "auswählen") {
      selectableDrinks.map((drink) => {
        if (drink.drinkName === selectedDrink1) {
          pumpSelectedDrink1 = drink.pumpe;
        }
      });
    } else if (selectedDrink1 === "auswählen") pumpSelectedDrink1 = 0;

    if (selectedDrink2 !== "auswählen") {
      selectableDrinks.map((drink, index) => {
        if (drink.drinkName === selectedDrink2)
          pumpSelectedDrink2 = drink.pumpe;
      });
    } else if (selectedDrink2 === "auswählen") pumpSelectedDrink2 = 0;

    if (pumpSelectedDrink1 === 0 && pumpSelectedDrink2 === 0) {
      errorMixingDrink("Kein Getränk ausgewählt");
    }

    // only first Drink selected
    if (pumpSelectedDrink1 !== 0 && pumpSelectedDrink2 === 0) {
      console.log("inIf1");
      if (valueRightNow === 100) {
        let mixRatio = "1," + pumpSelectedDrink1 + ",0";
        giveParamsToServer(mixRatio);
      } else errorMixingDrink("Getränk2 nicht ausgewählt");
    }

    // only second Drink selected
    if (pumpSelectedDrink1 === 0 && pumpSelectedDrink2 !== 0) {
      console.log("inIf2");
      if (valueRightNow === 0) {
        let mixRatio = "1," + pumpSelectedDrink2 + ",0";
        giveParamsToServer(mixRatio);
      } else errorMixingDrink("Getränk1 nicht ausgewählt");
    }

    // both Selected
    if (pumpSelectedDrink1 !== 0 && pumpSelectedDrink2 !== 0) {
      console.log("inIf3");
      let mixRatio =
        valueRightNow / 100 +
        "," +
        pumpSelectedDrink1 +
        "," +
        pumpSelectedDrink2;
      giveParamsToServer(mixRatio);
    }
  };

  const buttonPressed = (index) => {
    switch (index) {
      case 1: {
        let drink1 = "Cola";
        let drink2 = "Fanta";
        let isAvailable = 0;
        selectableDrinks.map((drink) => {
          if (drink.drinkName === drink1) isAvailable++;
          if (drink.drinkName === drink2) isAvailable++;
        });
        if (isAvailable === 2) {
          setSelectedDrink1(drink1);
          setSelectedDrink2(drink2);
          setSliderValue(50);
        } else configuredMessage("Getränke sind nicht im Automat");
        break;
      }

      case 2: {
        let drink1 = "Bacardi";
        let drink2 = "Cola";
        let isAvailable = 0;
        selectableDrinks.map((drink) => {
          if (drink.drinkName === drink1) isAvailable++;
          if (drink.drinkName === drink2) isAvailable++;
        });
        if (isAvailable === 2) {
          setSelectedDrink1(drink1);
          setSelectedDrink2(drink2);
          setSliderValue(30);
        } else configuredMessage("Getränke sind nicht im Automat");
        break;
      }

      case 3: {
        let drink1 = "Vodka";
        let drink2 = "Orangensaft";
        let isAvailable = 0;
        selectableDrinks.map((drink) => {
          if (drink.drinkName === drink1) isAvailable++;
          if (drink.drinkName === drink2) isAvailable++;
        });
        if (isAvailable === 2) {
          setSelectedDrink1(drink1);
          setSelectedDrink2(drink2);
          setSliderValue(30);
        } else configuredMessage("Getränke sind nicht im Automat");
        break;
      }

      case 4: {
        let drink1 = "Gin";
        let drink2 = "Tonic";
        let isAvailable = 0;
        selectableDrinks.map((drink) => {
          if (drink.drinkName === drink1) isAvailable++;
          if (drink.drinkName === drink2) isAvailable++;
        });
        if (isAvailable === 2) {
          setSelectedDrink1(drink1);
          setSelectedDrink2(drink2);
          setSliderValue(30);
        } else configuredMessage("Getränke sind nicht im Automat");
        break;
      }

      case 5: {
        let drink1 = "Wein";
        let drink2 = "Wasser";
        let isAvailable = 0;
        selectableDrinks.map((drink) => {
          if (drink.drinkName === drink1) isAvailable++;
          if (drink.drinkName === drink2) isAvailable++;
        });
        if (isAvailable === 2) {
          setSelectedDrink1(drink1);
          setSelectedDrink2(drink2);
          setSliderValue(50);
        } else configuredMessage("Getränke sind nicht im Automat");
        break;
      }
    }
  };

  return (
    <div>
      <div className="relative mb-6">
        <label htmlFor="labels-range-input" className="sr-only">
          Labels range
        </label>
        <input
          id="labels-range-input"
          type="range"
          value={sliderValue}
          min="0"
          max="100"
          step="5"
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
          0%
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          50%
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
          100%
        </span>
      </div>

      <div className="flex flex-row w-full justify-around">
        <div className="flex flex-col align-middle justify-center ">
          <span className="h-full text-center pl-4 pt-2">{sliderValue}%</span>
          <SelectDrinkDropDownMenu
            selectableDrinks={selectableDrinks}
            selectedDrink={selectedDrink1}
            setSelectedDrink={setSelectedDrink1}
          />
        </div>

        <div className="flex flex-col align-middle justify-center ">
          <span className="h-full text-center pl-4 pt-2">
            {100 - sliderValue}%
          </span>
          <SelectDrinkDropDownMenu
            selectableDrinks={selectableDrinks}
            selectedDrink={selectedDrink2}
            setSelectedDrink={setSelectedDrink2}
          />
        </div>
      </div>
      <div className="h-20 p-8 ml-4">
        {showErrorMessage && (
          <div className="text-red-500">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>

      <div className="flex flex-row p-10 pb-0">
        <div className="flex flex-col">
          <p className="m-2">Inspiration?</p>
          <div className="flex flex-wrap">
            {[
              "Spezi",
              "BacardiCola",
              "VodkaOrange",
              "GinTonic",
              "Spritzer",
            ].map((preDrink, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => buttonPressed(index + 1)}
                className="m-2"
              >
                {preDrink}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <Button
            variant="outline"
            onClick={sendMixdrinks}
            className="mt-12 ml-8"
          >
            Mischen
          </Button>
          {showMixingMessage && <p>{mixingMessage}</p>}
          {
            <Button
              variant="outline"
              onClick={cancelMixing}
              className="mt-12 ml-8"
            >
              abbrechen
            </Button>
          }
        </div>
      </div>
      {showConfiguredDrinksMessage && (
        <div className="text-red-500">
          <p>{confDrinkMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Slider;
