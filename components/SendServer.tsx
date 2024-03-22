"use server";

import { resolve } from "path";

// Pfad zum Python-Skript
const pythonScriptPathRaspi =
  "/home/benja/Documents/diplo/Getraenkeportionierer/components/serverCom.py";

let isMixing = false;

const { spawn } = require("child_process");

async function mix(valueToSend: string) {
  isMixing = true;

  const pythonScriptPathWin = ["components/serverCom.py", valueToSend];

  const talkToArduino = spawn("python", pythonScriptPathWin);

  // talkToArduino.stdin.write(valueToSend);
  // talkToArduino.stdin.end();

  // if (valueToSend === "cancel") {
  //   talkToArduino.stdin.write("cancel");
  // }

  // talkToArduino.stdout.on("data", function (data) {
  //   // Coerce Buffer object to String
  //   console.log(String(data));
  //   isMixing = false;
  //   // resolve("finished");
  // });

  talkToArduino.stdout.on("data", function (data) {
    // Coerce Buffer object to String
    console.log(String(data));
    if (data === "cancel") {
      resolve("finished");
      isMixing = false;
    }
  });

  talkToArduino.on("close", (code: Error | null) => {
    console.log(`Python-Prozess wurde mit dem Code ${code} beendet`);
  });

  // log to debug
  talkToArduino.stderr.on("data", (data: string) => {
    console.error(`stderr: ${data}`);
  });
  console.log("fettig");
  isMixing = false;
}

export async function sendServer(valueToSend: string) {
  if (isMixing === true) return "isMixing";
  await mix(valueToSend);

  return "finished";

  // let bla = await checkMixing(valueToSend);
  // setTimeout(() => {
  //   isMixing = false;
  // }, 200);
  // return bla;
}

/*
  pythonProcess.on('close', (code: Error | null) => {
    console.log(`Python-Prozess wurde mit dem Code ${code} beendet`);
  }); */
