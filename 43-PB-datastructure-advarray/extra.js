const supplies = ["meat", "potatoes", "chicken", "corn"];

const cookSupplies = array => {
    const cookedFood = array.map((food) => {
        switch (food) {
            case "meat":
                return "hamburger";

            case "potatoes":
                return "potato fries";

            case "chicken":
                return "roasted chicken leg";

            case "corn":
                return "pop corn";
            default:
                return;
        }

    });
    return cookedFood;
}
const cookedFood = cookSupplies(supplies);

console.log(cookedFood);


const isVegetarian = cookedFood.filter((food) => {
    return food === "pop corn" || food === "potato fries";
});

console.log(isVegetarian);

const eatFood = cookedFood.reduce(() => {
    return "poo!";
});

console.log(eatFood);