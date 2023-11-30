/*
Create a promise that will ask the user for both number 1 and number 2. The promise will check if the entry values were numbers, and then you will resolve it with an output similar to this: 3 + 7 = 10 otherwise, the rejection message will be both, or either 3 or 7 (is or are) not number(s).
*/

function performAddition() {
   const numb1 = prompt("Enter Value 1:");
   const numb2 = prompt("Enter Value 2:");
 
   addNumbers(numb1, numb2)
     .then((result) => {
       document.getElementById("result").textContent = result;
     })
     .catch((error) => {
       document.getElementById("result").textContent = `ERROR: " ${error}`;
     });
 }
 
 function addNumbers(numb1, numb2) {
   return new Promise((resolve, reject) => {
     if (isNaN(numb1) || isNaN(numb2)) {
       reject(`${isNaN(numb1) ? numb1 : numb2} " IS NOT A VALUE.`);
     } else {
       let sum = parseFloat(numb1) + parseFloat(numb2);
       resolve(`${numb1} + ${numb2} = ${sum}`);
     }
   });
 }


 
// <<<====================== OR ======================>>> \\

// function performAddition() {
//    return new Promise((resolve, reject) => {
//      // The function will ask for for a input
//      let numb1 = prompt("Enter number 1:");
//      let numb2 = prompt("Enter number 2:");
 
//      // the if statement checks if the inputs are valid numbers
//      if (isNaN(numb1) || isNaN(numb2)) {
//        // The promise is rejected if one or both inputs are not numbers
//        reject(`Error: ${isNaN(numb1) ? numb1 : numb2} is not a number.`);
//      } else {
//        // If both inputs are numbers, it will work
//        let sum = parseFloat(numb1) + parseFloat(numb2);
 
//        // Resolve the promise with the result
//        resolve(`${numb1} + ${numb2} = ${sum}`);
//      }
//    });
//  }
 
//  // Example usage of the promise
//  performAddition()
//    .then((result) => {
//      console.log(result);
//    })
//    .catch((error) => {
//      console.error(error);
//    });
 