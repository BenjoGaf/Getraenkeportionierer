import React from "react";
import Mischverhaltnis from "./Mischverhaltnis";

const Mixdrink = () => {
  return (
    <div className="flex flex-col flex-auto md:mx-5 md:mb-0 mb-6 lg:w-2/3 xl:p-10 md:p-6 p-2 border-neutral-600 border-2 rounded-md">
      <div className="flex justify-center w-full p-4 mb-4">
        <h1 className="w-42 text-3xl">Getränk mischen</h1>
      </div>
      <hr className="h-px mb-12 bg-neutral-600 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col h-full">
        <Mischverhaltnis />
      </div>
    </div>
  );
};

export default Mixdrink;
