// Your code here

function mapToNegativize(numbers){
  return numbers.map(negativize);
}
function negativize(number){
  return -number;
}

//mapToNoChange
function mapToNoChange(array){
  const newArray=[];
   array.forEach(element =>newArray.push(element));
   return newArray;
}
//mapToDouble
function mapToDouble(array){
  const newArray=[];
  array.forEach(element =>newArray.push(element*2));
  return newArray
}
