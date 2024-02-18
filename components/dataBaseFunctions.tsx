"use server";

const mongoose = require("mongoose");
const Drink = require("@/components/Drink");

mongoose.connect("mongodb://localhost/getraenkeliste");

export async function newDrink(name: string) {
  try {
    const drink = await Drink.find({ drinkName: name });
    if (drink.length === 0) {
      console.log("Getränk existiert noch nicht");
      await Drink.create({ drinkName: name, pumpe: 0 });
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

export async function returnAllDrinks() {
  return JSON.stringify(await Drink.find());
}

export async function returnSelectableDrinks() {
  return JSON.stringify(await Drink.where("pumpe").gt(0));
}

export async function updatePumpe(nameToUpdate, pumpeToUpdate) {
  try {
    // delete Pumpe bei Drink vorher
    const pumpDelete = await Drink.find({ pumpe: pumpeToUpdate });
    if (pumpDelete.length >= 1) {
      pumpDelete[0].pumpe = 0;
      await pumpDelete[0].save();
    }

    // add Pumpe bei Drink jetzt
    const drink = await Drink.find({ drinkName: nameToUpdate });
    console.log(drink);
    drink[0].pumpe = pumpeToUpdate;
    await drink[0].save();
  } catch (e) {
    console.log(e.message);
  }
}
