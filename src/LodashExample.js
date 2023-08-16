
//import the lodash module
const lodash=require('lodash')
let nums=[2,34,65]
let num=34
//Create a function to find a maximum value from number array.

let findMaxNum=(nums)=>{
return lodash.max(nums)
}

//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
let findMaxNumFromSec=(nums,num)=>{
  return lodash.filter(nums,current=>current>num)
  }

//Create a function to return all values of employeeName array in capital letters.




module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
