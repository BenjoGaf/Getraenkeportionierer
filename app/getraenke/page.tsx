const mongoose = require("mongoose");
const Drink = require("@/components/Drink");

mongoose.connect("mongodb://localhost/getraenkeliste");

let Error = "";

function drinkAlreadyExists() {
  Error = "Getränk wurde schon hinzugefügt";
}


async function newDrink(name: string) {
  const tryName = await Drink.find({drinkName: name})

  if(tryName === /* [] */) {
  const newDrink = await Drink.create({ drinkName: name, pumpe: null });
  console.log(newDrink);
  } else drinkAlreadyExists();
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around items-center justify-items-start p-12 h-screen">
      (Drink.drinkName.map)
    </main>
  );
}
