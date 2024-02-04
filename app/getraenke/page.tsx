const mongoose = require("mongoose");
const Drink = require("@/components/Drink");
import { deleteDrink, newDrink } from "@/components/dataBaseFunctions";

export default function Home() {
  mongoose.connect("mongodb://localhost/getraenkeliste");

  let Error = "";

  async function run() {
    let bla = await Drink.find({ drinkName: "Coke" });
    return bla;
  }

  console.log(run());

  return (
    <main className="flex min-h-screen flex-col justify-around items-center justify-items-start p-12 h-screen">
      ()
    </main>
  );
}
