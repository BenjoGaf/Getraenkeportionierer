"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { sendToServer } from "@/components/SendServer";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value, 10));
  };

  const sendMixdrinks = async () => {
    const valueRightNow = sliderValue;
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
        <p>Getränk 1: {sliderValue}%</p>
        <p>Getränk 2: {100 - sliderValue}%</p>
      </div>
      <div>
        <Button variant="outline" onClick={sendMixdrinks} className="  mt-4">
          Mischen
        </Button>
      </div>
    </div>
  );
};

export default Slider;
