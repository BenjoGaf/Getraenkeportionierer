import React from "react";
import Mischverhaltnis from "./Mischverhaltnis";

const Mixdrink = () => {
  return (
    <div className="flex flex-col flex-auto w-32 mx-5 p-15 border-black border-2 rounded-md p-10">
      <div className="flex justify-center w-full border-2 border-black rounded-lg p-4 mb-8">
        <h1 className="w-42 text-2xl">Getränk mischen</h1>
      </div>
      <div className="flex flex-col h-full">
        <Mischverhaltnis />
      </div>
    </div>
  );
};

export default Mixdrink;
