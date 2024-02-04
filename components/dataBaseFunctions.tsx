const Drink = require("@/components/Drink");

export async function newDrink(name: string) {
  try {
    const drink = await Drink.find({ drinkName: name });
    if (drink.length === 0) {
      console.log("Getränk existiert noch nicht");
      await Drink.create({ drinkName: name, pumpe: null });
      console.log("Getränk hinzugefügt");
    } else if (drink.length > 0) {
      console.log("Getränk existiert bereits");
    }
  } catch (e: any) {
    console.log(e.message);
  }
}

export async function deleteDrink(name: string) {
  try {
    await Drink.deleteOne({ drinkName: name });
  } catch (e: any) {
    console.log(e.message);
  }
}
