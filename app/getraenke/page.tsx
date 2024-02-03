const mongoose = require("mongoose");
const Drink = require("@/components/Drink");

mongoose.connect("mongodb://localhost/getraenkeliste");

async function newDrink(name: string) {
  const newDrink = await Drink.create({ drinkName: name, pumpe: null });
  console.log(newDrink);
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around items-center justify-items-start p-12 h-screen">
      <div>()</div>
    </main>
  );
}
