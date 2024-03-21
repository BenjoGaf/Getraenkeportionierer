"use server";

// Pfad zum Python-Skript
const pythonScriptPathRaspi =
  "/home/benja/Documents/diplo/Getraenkeportionierer/components/serverCom.py";

// Argumente für das Python-Skript

let stop = false;

export async function sentStop() {
  stop = true;
}

let isMixing = false;

export async function sendToServer(valueToSend: string) {
  if (isMixing === true) {
    console.log("Mixing");
    return "isMixing";
  } else if (isMixing === false) {
    isMixing = true;
    const pythonScriptPathWin = ["components/serverCom.py", valueToSend];
    console.log(valueToSend);

    const { spawn } = require("child_process");

    const talkToArduino = spawn("python", pythonScriptPathWin);
    talkToArduino.stdout.on("data", function (data) {
      // Coerce Buffer object to Float
      let answer = String(data);

      // Log to debug
      console.log(answer);
      console.log("finished");
      isMixing = false;
      return "finished";
    });

    talkToArduino.stderr.on("data", (data: string) => {
      console.error(`stderr: ${data}`);
    });
  }

  /*
  pythonProcess.on('close', (code: Error | null) => {
    console.log(`Python-Prozess wurde mit dem Code ${code} beendet`);
  }); */
}
