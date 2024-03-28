export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  console.log(id);
  console.log(isMixing);

  // check if already mixing
  let cnt = 0;
  // if (isMixing === true) {
  //   mixingResult = "nothing";
  //   console.log("isMixing")
  //   return Response.json("h");
  // }
  // else {
  // }

  if (id === "checking") {
    if (isMixing === "true") return Response.json("isStillMixing");
    if (isMixing === "false") return Response.json("isFinished");
    if (isMixing === "cancel") {
      isMixing = "false";
      return Response.json("cancelled");
    }
  } else if (id === "cancel") {
    if (isMixing === "false") return Response.json("isntMixing");
    console.log("kill");
    talkToArduino.stdin.pause();
    talkToArduino.kill();

    // connect to "cancel" script
    const { spawn } = require("child_process");
    const pythonScriptPathWin = ["components/cancelCom.py"];
    talkToArduino = spawn("python", pythonScriptPathWin);

    talkToArduino.stdout.on("data", function (data) {
      // Coerce Buffer object to String
      console.log(String(data));
      talkToArduino = null;
    });

    talkToArduino.stderr.on("data", (data: string) => {
      console.error(`stderr: ${data}`);
    });

    talkToArduino.on("close", (code: Error | null) => {
      console.log(`Python-Prozess wurde mit dem Code ${code} beendet`);
    });

    isMixing = "cancel";

    return Response.json("cancelled");
  } else if (isMixing === "true") {
    return Response.json("isMixing");
  } else {
    // connect to python
    const { spawn } = require("child_process");
    const pythonScriptPathWin = ["components/serverCom.py", id];
    talkToArduino = spawn("python", pythonScriptPathWin);

    isMixing = "true";

    talkToArduino.stdout.on("data", function (data) {
      // Coerce Buffer object to String
      console.log(String(data));
      talkToArduino = null;
      isMixing = "false";
    });

    // while (mixingResult === "nothing" && shouldCancel === false && cnt < 50000) {
    //   console.log("pending");
    //   cnt++;
    // }

    // log to debug
    talkToArduino.stderr.on("data", (data: string) => {
      console.error(`stderr: ${data}`);
    });

    talkToArduino.on("close", (code: Error | null) => {
      console.log(`Python-Prozess wurde mit dem Code ${code} beendet`);
    });

    cnt++;
    console.log("fertig");
    return Response.json("startedMixing");
  }
}

let talkToArduino;

let isMixing = "false";
