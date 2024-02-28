"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";
import { sendToServer } from "@/components/SendServer";
import { sendStatusCode } from "next/dist/server/api-utils";
import { InputWithButton } from "./InputWithButton";

const Clean = () => {
  const [checkboxesVisible, setCheckboxesVisible] = useState(false);
  const [checkBoxesValue, setCheckboxesValue] = useState<number | undefined>(
    undefined
  );
  const [errorPumpNotSelected, setErrorPumpNotSelected] = useState(false);

  const prepareFormat = () => {
    let feld: Array<number>;
    [1, 2, 3, 4, 5].map((i) => {
      i === checkBoxesValue ? (feld[i] = 100) : (feld[i] = 0);
    });
  };

  const router = useRouter();

  return (
    <div className="flex flex-col flex-auto md:mx-5 lg:w-1/3 xl:p-10 p-2 border-neutral-600 border-2 rounded-md">
      <div className="flex justify-center py-4 mb-4">
        <h1 className="lg:text-3xl text-2xl">Automat reinigen</h1>
      </div>
      <hr className="h-px mb-6 bg-neutral-600 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between xl:p-5">
            <div className="flex flex-col">
              <Button
                variant="outline"
                className="w-48"
                onClick={() => {
                  setCheckboxesVisible(!checkboxesVisible);
                }}
              >
                Pumpe auswählen
              </Button>
              {checkboxesVisible === true ? (
                <ToggleGroup type="single" onValueChange={(value) => {}}>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <ToggleGroupItem
                      key={index}
                      value={`${index}`}
                      aria-label="Toggle bold"
                      className="border-solid border-gray-300 border"
                    >
                      {index}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              ) : null}
            </div>
            <Button
              variant="outline"
              onClick={() => {
                checkBoxesValue === undefined
                  ? setErrorPumpNotSelected(!errorPumpNotSelected)
                  : prepareFormat();
              }}
            >
              reinigen
            </Button>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-col w-full p-5">
          <InputWithButton />
          <div className="pt-14">
            <Button variant="outline" onClick={() => router.push("/getraenke")}>
              Pumpen konfigurieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clean;
