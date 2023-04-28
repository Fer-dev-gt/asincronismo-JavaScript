// En este ejercicio utilicé el método ".map()" para crear una biografía personlizada con los datos de una lista de Objetos con los datos completos de nuestros usuarios.
// Use los parámetros del método ".map()": element, index, array, this
// Tambíen use el método '.join(", ")' para concatenar los elemento de un SubArray
"use strict";

let completeUserData = [
  //start of object 1
  {
    firstName: "Susan",
    lastName: "Steward",
    pronouns: {
      main: { capitalized: "She", lowerCase: "she" },
      possessive: { capitalized: "Her", lowerCase: "her" }
    },
    additionalInfo: {
      hometown: "Sidney",
      favoriteColor: "green",
      favoriteSeason: "summer",
      favoriteFood: "pizza",
      pet: { name: "Charlie", species: "dog" },
      siblings: ["John", "Jerry", "Samantha"]
    }
  },

  //start of object 2
  {
    firstName: "Daniel",
    lastName: "Longbottom",
    pronouns: {
      main: { capitalized: "He", lowerCase: "he" },
      possessive: { capitalized: "His", lowerCase: "his" }
    },
    additionalInfo: {
      hometown: "London",
      favoriteColor: "blue",
      favoriteSeason: "spring",
      favoriteFood: "tacos",
      pet: { name: "Luna", species: "dog" },
      siblings: ["Sarah", "Jenny", "Samantha"]
    }
  },

  //start of object 3
  {
    firstName: "Jacob",
    lastName: "Black",
    pronouns: {
      main: { capitalized: "He", lowerCase: "he" },
      possessive: { capitalized: "His", lowerCase: "his" }
    },
    additionalInfo: {
      hometown: "New York",
      favoriteColor: "yellow",
      favoriteSeason: "fall",
      favoriteFood: "sushi",
      pet: { name: "Milo", species: "cat" },
      siblings: ["Ralph", "Ronald", "Reggie", "Regina", "Rachel"]
    }
  }
];

/* 
Challenge

Use the map method to generate a new array of biographies 
for our users from the previous tutorial. Each of the 
biographies should look like this:

["1. Susan Steward is from Sidney. She has a dog named Charlie. 
 Her favorite color is green and her favorite food is pizza. Her 
 siblings are John, Jerry, and Samantha.", "2. Daniel Longbottom is..." etc.]

 It should use the following format, which you can use as a template: 

"[index number + 1]. [person's full name] is from [hometown]. 
 [Appropriate pronoun] has a [pet species] named [pet name]. 
 [Appropriate pronoun] favorite color is [favorite color] and 
 [appropriate pronoun] favorite food is [favorite food]. 
 [Appropriate pronoun] siblings are [siblings]."

Hint: for the arrays inside of the objects, it may be helpful to use the map method additional times, and it may be helpful to use the index and array arguments. The "this" argument is unnecessary. */


let biographies = completeUserData.map((element, index, array) => {
    console.log(`${index + 1}. ${element.firstName} ${element.lastName} is from ${element.additionalInfo.hometown}. ${element.pronouns.main.capitalized} has a dog named ${element.additionalInfo.pet.name}. 
 ${element.pronouns.possessive.capitalized} favorite color is ${element.additionalInfo.favoriteColor} and ${element.pronouns.possessive.lowerCase} favorite food is ${element.additionalInfo.favoriteFood}. ${element.pronouns.possessive.capitalized} 
 siblings are ${element.additionalInfo.siblings.join(", ")}.`)
})






























// let arr = [3, 4, 5, 6]

// let modifiedArray = arr.map(function(element){
//     return element * 3
// })

// let users = [
//   {firstName : "Susan", lastName: "Steward"},
//   {firstName : "Daniel", lastName: "Longbottom"},
//   {firstName : "Jacob", lastName: "Black"}
// ];

// let userFullNames = users.map(function(element){
//   return `${element.firstName} ${element.lastName}`;
// });



// let arr = [2, 3, 5, 7];

// arr.map(function(element, index, array){}, this);