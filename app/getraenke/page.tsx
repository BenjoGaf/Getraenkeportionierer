const mongoose = require("mongoose");
const Drink = require("@/components/Drink");

mongoose.connect("mongodb://localhost/getraenkeliste");

run();

async function run() {
  const t1 = await Drink.create({ drinkName: "Pepsi", pumpe: 2 });
  console.log(t1);
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around items-center justify-items-start p-12 h-screen">
      <div></div>
    </main>
  );
}
