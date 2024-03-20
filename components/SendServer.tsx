"use server";

// Pfad zum Python-Skript
const pythonScriptPathRaspi =
  "/home/benja/Documents/diplo/Getraenkeportionierer/components/serverCom.py";

// Argumente für das Python-Skript

let stop = false;

export async function sentStop() {
  stop = true;
}


export async function sendToServer(valueToSend: string) {
  const pythonScriptPathWin = ["components/serverCom.py", valueToSend];
  console.log(valueToSend);

  const { spawn } = require("child_process");
  let answer = []; // Store readings

  const talkToArduino = spawn("python", pythonScriptPathWin);
  talkToArduino.stdout.on("data", function (data) {
    // Coerce Buffer object to Float
    answer.push(String(data));

    // Log to debug
    console.log(answer);
  });

  talkToArduino.stderr.on("data", (data: string) => {
    console.error(`stderr: ${data}`);
  });

  /*
  console.log(valueToSend);

  // Ein neuer Python-Prozess wird gestartet
  const pythonProcess = spawn('python', [pythonScript, ...args]);

  // Hören auf Ereignisse von dem Python-Prozess
  pythonProcess.stdout.on('data', (data: string) => {
    console.log(`stdout: ${data}`);
  });

  pythonProcess.stderr.on('data', (data: string) => {
    console.error(`stderr: ${data}`);
  });

  pythonProcess.on('close', (code: Error | null) => {
    console.log(`Python-Prozess wurde mit dem Code ${code} beendet`);
  }); */
}
