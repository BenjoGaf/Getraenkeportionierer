export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const pythonScriptPathRaspi =
    "/home/benja/Documents/diplo/Getraenkeportionierer/components/serverCom.py";

  const { spawn } = require("child_process");

  let isMixing = true;

  console.log(id);
  console.log(checkInstance());

  const pythonScriptPathWin = ["components/serverCom.py", id];

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
  Response.json("Fertig");
}

let cnt = 0;
function checkInstance() {
  cnt++;
  if (cnt === 1) return true;
  return false;
}
