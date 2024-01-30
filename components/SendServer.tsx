"use server";

const { spawn } = require('child_process');

// Pfad zum Python-Skript
const pythonScript = 'components/com.py';

// Argumente für das Python-Skript
const args = ['arg1', 'arg2'];


export async function sendToServer(valueToSend: number) {
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
  });
}
