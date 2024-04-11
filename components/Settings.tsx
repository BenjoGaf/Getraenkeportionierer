"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";
import { sendStatusCode } from "next/dist/server/api-utils";
import { InputWithButton } from "./InputWithButton";

const Settings = () => {
  const [checkboxesVisible, setCheckboxesVisible] = useState(false);
  const [checkBoxesValue, setCheckboxesValue] = useState<number | undefined>(
    undefined
  );
  const [errorPumpNotSelected, setErrorPumpNotSelected] = useState(false);
  const [showStopButton, setShowStopButton] = useState(false);
  const [showMixingMessage, setShowMixingMessage] = useState(false);
  const [mixingMessage, setMixingMessage] = useState("");
  const [isMixing, setIsMixing] = useState(false);

  let isCancelled = false;

  const prepareFormat = () => {
    let feld: Array<number>;
    [1, 2, 3, 4, 5].map((i) => {
      i === checkBoxesValue ? (feld[i] = 100) : (feld[i] = 0);
    });
  };

  const cancelMixing = async () => {
    isCancelled = true;
    setIsMixing(false);
    let response = await fetch("/api/sendMixToServer?id=cancel");
    if (response.ok) {
      console.log(await response.json());
      setMixingMessage("Reinigen abgebrochen ...");
      setShowStopButton(false);
      setTimeout(() => {
        setShowMixingMessage(false);
      }, 3000);
    }
  };

  const checkMixingTimeout = () => {
    if (isCancelled === false) {
      let checkMixingInterval = setTimeout(async () => {
        let response = await fetch("/api/sendMixToServer?id=checking");
        if (response.ok) {
          let realResponse = await response.json();
          if (realResponse === "isFinished") {
            setShowStopButton(false);
            setIsMixing(false);
            setMixingMessage("Pumpe wurde gereinigt ...");
            setTimeout(() => {
              setShowMixingMessage(false);
            }, 3000);
            return 0;
          } else if (realResponse === "cancelled") return 0;
          checkMixingTimeout();
        }
      }, 1000);
    }
  };

  const cleanPump = async () => {
    let cleanRatio = "1," + checkBoxesValue + ",0";
    console.log(cleanRatio);

    if (isMixing === true) return 0;
    setIsMixing(true);
    setMixingMessage("Pumpe wird gereinigt ...");
    setShowMixingMessage(true);
    setShowStopButton(true);

    let response = await fetch(`/api/sendMixToServer?id=${cleanRatio}`);
    if (response.ok) {
      let realResponse = await response.json();
      if (realResponse === "startedMixing") {
        setShowStopButton(true);
        setMixingMessage("Pumpe wird gereinigt!");
        isCancelled = false;
      }
      if (realResponse === "isMixing") {
        setMixingMessage("Reinigt bereits, bitte warten ...");
        setShowStopButton(false);
        setTimeout(() => {
          setShowMixingMessage(false);
        }, 3000);
      }
    }
    checkMixingTimeout();
  };

  const router = useRouter();

  return (
    <div className="flex flex-col flex-auto md:mx-5 lg:w-1/3 xl:p-10 p-2 border-neutral-600 border-2 rounded-md">
      <div className="flex justify-center py-4 mb-4">
        <h1 className="lg:text-4xl text-2xl">Automat einstellen</h1>
      </div>
      <hr className="h-px mb-6 bg-neutral-600 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-between xl:p-5">
          <div className="flex flex-row justify-between">
            <Button
              variant="outline"
              size="lg"
              className="w-48 mb-4"
              onClick={() => {
                setCheckboxesVisible(!checkboxesVisible);
              }}
            >
              Pumpe auswählen
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                checkBoxesValue === undefined
                  ? setErrorPumpNotSelected(!errorPumpNotSelected)
                  : cleanPump();
              }}
            >
              reinigen
            </Button>
          </div>

          {checkboxesVisible === true ? (
            <ToggleGroup
              type="single"
              onValueChange={(value) => {
                setCheckboxesValue(Number(value));
              }}
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <ToggleGroupItem
                  key={index}
                  size="lg"
                  value={`${index}`}
                  aria-label="Toggle bold"
                  className="border-solid border-gray-300 border"
                >
                  {index}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          ) : null}
          {showMixingMessage && (
            <p className="px-8 text-2xl">{mixingMessage}</p>
          )}
          {showStopButton && (
            <Button
              size="lg"
              variant="destructive"
              onClick={cancelMixing}
              className="mt-12 ml-8"
            >
              abbrechen
            </Button>
          )}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex pt-14 p-5 w-full">
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push("/getraenke")}
          >
            Pumpen konfigurieren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
