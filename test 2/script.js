let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];

// 1. Display the entire shopping list
console.log("1. Full list:", shoppingList);

// 2. Display the first item
console.log("2. First item:", shoppingList[0]);

// 3. Display the last item
console.log("3. Last item:", shoppingList[shoppingList.length - 1]);

// 4. Add "Cooking Oil" to the end
shoppingList.push("Cooking Oil");
console.log("4. After adding Cooking Oil:", shoppingList);

// 5. Remove the first item
shoppingList.shift();
console.log("5. After removing first item:", shoppingList);

// 6. Change "Sugar" to "Tea Leaves"
let index = shoppingList.indexOf("Sugar");
if (index !== -1) {
    shoppingList[index] = "Tea Leaves";
}
console.log("6. After changing Sugar:", shoppingList);

// 7. Display the total number of items
console.log("7. Total items:", shoppingList.length);