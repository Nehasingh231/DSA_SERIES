//********Traverse = ek-ek element ko access karna Matlab: har element pr loop lagana — chahe for, while, for-of, reduce, ya koi bhi tarika ho. */


//*** Problem 1: COUNT EVEN AND ODD NUMBERS */ 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
let even = 0;
let odd = 0;
// if(numbers % 2 ===0)  //*** ❌ we cannot dirwct aplly modulo operator(%) on array because it only works on individual no not on array */

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) { //*** ✅ we can apply modulo operator(%) on individual no inside array */
        even++;
    } else {
        odd++;
    }
}
console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}`);

//************************************************************ Problem :  USING FOR-OF-LOOP */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNum =0;
let evenNum = 0;
for( let num of nums){
    if(num % 2 === 0){
        evenNum++
    }else{
        oddNum++
    }
}
console.log(`Even numbers: ${evenNum}, odd numbers: ${oddNum}`);


//*************************************************** Problem :  USING FOR-EACH-LOOP */
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = 0;
let oddCount = 0;
numbers1.forEach((num) => {
    if(num % 2 === 0){
        console.log(` ${num} is even number`);
    }else{
        console.log(` ${num} is odd number`);
    }

})




//****************************************************************  using Function
function countEvenOdd(array){
    let even = [];
    let odd = [];

    for(let num of array) {
        if(num % 2 === 0){
            
            even.push(num);
        }else{
            odd.push(num);
        }
    }
    // return {even, odd}
    // return [even, odd]
//   console.log("Even numbers:", even );
//     console.log("Odd numbers:", odd); // by doing this we get undefined because this function returning nothing here that's why
return { evenCount: even, oddCount: odd };
}
console.log(countEvenOdd([10,30,55,11,78,99,100])) ;











// ***************  Problem 2 : FIND MAXIMUM ELEMENT

function findMax(arr){
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
 return max;
}
console.log(findMax([10,2,45,36,44]))




//  ************  Problem 3 : FIND MINIMUM ELEMENT
function findMIn(arr) {
    let min = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min;
}

console.log(findMIn([10,2,45,36,44]))


// ************  problem 4 : Reverse an array 
 
function reverseArr(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left ++;
        right --;
    }
    return arr;
}

console.log(reverseArr([14,20,56,23,10]))


// ********* With Reverse Method
const arr = [4,5,2,8]
const reversed = arr.reverse()
console.log(reversed);


// ***** ✅ Level 5: Second largest element

function secondLargest (array) {
     let max = -Infinity
     let secondMax = -Infinity

     for(let num of array){
        if(num > max){
            secondMax = max; // current num agar max se bda hai to max SecondMax bn jaega mtlb secondmax ki value hogi -infinite
            max = num;  // current num ab max value hogi
        } else if(num > secondMax && num !== max){
            second = num;
        }
     }

     return secondMax === -Infinity ? "No second largest" : secondMax;
}

console.log(secondLargest([10,20,8,20]))

// ** DRY RUN
// Input: [10, 20, 8, 20]

// Initial:
// max = -Infinity
// second = -Infinity

// ➡ num = 10 → 10 > max → max = 10, second = -Infinity  
// ➡ num = 20 → 20 > max → max = 20, second = 10  
// ➡ num = 8 → 8 > second → NO  
// ➡ num = 20 → same as max → skip

// Final: max = 20, second = 10  
// ✅ Output: 10




// ****

function secondSmallest(arr) {
  let min = Infinity
  let secondMin = Infinity
  for(let num of arr) {
       if(num < min) {
          secondMin = min;
          min = num;
       }else if(num < secondMin && num !== min) {
          secondMin = min
       }
  }
  return secondMin === Infinity ? "No second smallest" : secondMin

}

console.log(secondSmallest([10,20,5,6,9]))