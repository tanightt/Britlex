// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
// const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(500, 10, 5000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));




// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimiter);
//   // Change code above this line
//     console.log(words);
//     return words;
    
// }

// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");




// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
      
//     // console.log(message);
//     let word = message.split(" ");
//     // console.log(word);
//     console.log(word.length * pricePerWord);

//    // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10); //50
// calculateEngravingPrice("JavaScript is in my blood", 20); //100
// calculateEngravingPrice("Web-development is creative work", 40); //160
// calculateEngravingPrice("Web-development is creative work", 20); //80




// function slugify(title) {
//   // Change code below this line
//     // console.log(title);
//     let slug = title.toLowerCase().split(' ').join('-');
//     console.log(slug);
//   // Change code above this line
// }

// slugify("Arrays for begginers");
// slugify("How to become a JUNIOR developer in TWO WEEKS");




// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
   
//     // console.log(firstArray, secondArray, maxLength);
//     let array = firstArray.concat(secondArray);
//     // console.log(array, maxLength);
//     if (array.length > maxLength) {
//         let maxArray = array.slice(0, maxLength);
//         // console.log(maxArray);
//         return maxArray;
//     }
//     // console.log(array);
//     return array;

//     // Change code above this line
// }
  
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);




// console.log("For my love i am send you my heart right now");

// function calculateTotal(number) {
//  // Change code below this line
//     for (let i = 0; i < number; i++) {
//         const element = array[i];

//         For my love i am send you my heart right now

//     }




// function calculateTotal(number) {
//  // Change code below this line
    
//     // for (const value of number) {
//     //     console.log(value);
//     // }
//     let total = 0;
//     for (let i = 1; i <= number; i += 1) {

//         total += i;

//     }
//     return total;

//   // Change code above this line
// }

// calculateTotal(1); //1
// calculateTotal(3); //6
// calculateTotal(18);
// calculateTotal(); //0




// function calculateTotalPrice(order) {
//     let total = 0;
//     console.log(order);
    
//   // Change code below this line
//     for (let i = 0; i < order.length; i++) {
//         total += order[i];
//     }
//   // Change code above this line
//     console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]); //138
// calculateTotalPrice([412, 371, 94, 63, 176]); //1116




// function findLongestWord(string) {
//     console.log(string);
//   // Change code below this line
//     let word = string.split(" ");
//     let longWord = "";
    
// for (let i = 0; i < word.length; i++) {
//     if (word[i].length > longWord.length) {
//         longWord = word[i];
//         console.log("yes", longWord);
//     }
// }
//     return longWord;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog"); //jumped
// findLongestWord("Google do a roll"); //Google
// findLongestWord("May the force be with you"); //force




// function createArrayOfNumbers(min, max) {
//     console.log(min, max);
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i++) {
//         // console.log(i);
//         numbers.push(i);
//     }
//   // Change code above this line
//     console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3); //[1, 2, 3]
// createArrayOfNumbers(14, 17); //[14, 15, 16, 17]
// createArrayOfNumbers(29, 34); //[29, 30, 31, 32, 33, 34]




// function filterArray(numbers, value) {
//     // console.log(numbers, value);
//    // Change code below this line
//     const numberValue = [];
//     for (const number of numbers) {
//         if (number > value) {
//             // console.log(number);
//             numberValue.push(number);
//         }
//         // console.log(numberValue);
//     }
//     console.log(numberValue);
    
//    // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3); //[4, 5]
// filterArray([1, 2, 3, 4, 5], 5); //[]
// filterArray([12, 24, 8, 41, 76], 20); //[24, 41, 76]




// function getCommonElements(array1, array2) {
//   // Change code below this line
//      const newArray = [];
//     for (const element of array1) {
//         if (array2.includes(element)) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
//  // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19]); //[1, 2]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); //[10, 30, 40]




// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const number = [];
// for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//         number.push(i);
//     }
    
// }
// return number;

//     // Change code above this line
// }
  
// getEvenNumbers(2, 5); //[2, 4]
// getEvenNumbers(3, 11); //[4, 6, 8, 10]
// getEvenNumbers(8, 8); //[8]
// getEvenNumbers(7, 7); //[]




// function includes(array, value) {
//   // Change code below this line
//     for (const element of array) {
//         if (element === value) {
//             return true;
//         }
//     }
//     return false;
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 17); //false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"); //true




// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//     }
//     console.log(propCount);
//   return propCount;
// }

// countProps({ name: "Mango", age: 2 }); //2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); //3




// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);



// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return {category, priority, ...data, completed};
 
//   // Change code above this line
// }

// console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })); //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" })); //{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }



//Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// // Change code below this line
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const book = this.books.indexOf(oldName)
// if (book !== -1) {
//   this.books.splice(book, 1, newName)
// }

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));; //["Dune", "Haze", "The guardian of dreams"]




// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//    }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       const potion = this.potions[i];
//       if (potion.name === potionName) {
//         return this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//     },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       const potion = this.potions[i];
//       if (potion.name === oldName) {
//         return potion.name = newName;
//       }
//     }
//    return `Potion ${oldName} is not in inventory!`;
//     },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions()); //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); //last
// // console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })); //'Error! Potion Stone skin is already in your inventory!'
// // console.log(atTheOldToad.removePotion("Dragon breath")); //[ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); //[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]




// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//         if (!this.pizzas.includes(pizzaName)) {
//        return onError(pizzaName);
//     }
//     return onSuccess(pizzaName);
//     }
//   }
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));




// function changeEven(numbers, value) {
//   // Change code below this line
//   const newEven = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newEven.push(number + value);
//     } else {
//         newEven.push(number);
//     }
//   })
//     return newEven;
//   // Change code above this line
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]




