

//Create function addNumbers which will take two parameters add the numbers 
//and return the result
let addNumbers=(firstNum,seconNum)=>{
return firstNum+seconNum
}

//Create function subNumbers which will take two parameters subtract the numbers 
//and return the result
let subNumbers=(firstNum,seconNum)=>{
  return firstNum-seconNum
  }

//Create function mulNumbers which will take two parameters multiply the numbers 
//and return the result
let mulNumbers=(firstNum,seconNum)=>{
  return firstNum*seconNum
  }

//Create function divNumbers which will take two parameters divide the numbers 
//and return the result
let divNumbers=(firstNum,seconNum)=>{
  return firstNum/seconNum
  }

module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}