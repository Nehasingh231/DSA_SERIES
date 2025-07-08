//*********** Two Sum Problem with Target 
function sum (nums, target){
  for(let i = 0; i< nums.length; i++){

   for(let j = i+1; j< nums.length; j++ ){
    if(nums[i]+nums[j] === target){
     return [i,j];
    }
   }
  }
}
console.log(sum([4,5,6,3,8], 7));

// ******Running Sum of 1d array
 function sumNew(nums) {
    let result = [];
    let sum = 0;
  for(let i = 0; i < nums.length; i++){
    sum += nums[i]
    result.push(sum)
  }
  return result;
 }

 console.log(sumNew([1,2,3,4,5]))  // 15