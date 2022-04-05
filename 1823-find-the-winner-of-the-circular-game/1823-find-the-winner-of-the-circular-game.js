var findTheWinner = function(n, k) {
  // [1,2,3,4,5,6]
  let array = new Array(n).fill(0).map((v, i) => i+1);
  let standingNumber = 1; 
  while(array.length > 1) {
    let arrayLength = array.length;
    const standingIndex = array.indexOf(standingNumber);
    const removeIndex = (standingIndex + (k -1)) % arrayLength
    array.splice(removeIndex, 1);
    if(removeIndex === array.length) {
    	standingNumber = array[0];  
    } else {
      console.log(removeIndex, array.length - 1)
    	standingNumber = array[removeIndex];  
    }
  }
  return array[0];
};
