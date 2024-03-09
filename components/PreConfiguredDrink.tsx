import React from "react";
import { Button } from "./ui/button";

const PreConfiguredDrink = ({ index, preDrink, buttonPressed }) => {
  return (
    <div>
      <Button variant="outline" onClick={buttonPressed(index)} className="m-2">
        {preDrink}
      </Button>
    </div>
  );
};

export default PreConfiguredDrink;
