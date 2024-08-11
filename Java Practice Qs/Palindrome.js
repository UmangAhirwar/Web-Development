var isPalindrome = function(x) {
    let numStr = x.toString();
   
   // Reverse the string
   let reversedStr = numStr.split('').reverse().join('');
   console.log('reversedStr:', reversedStr)
   
   // Convert back to number
   let reversedNum = parseInt(reversedStr)
   if(reversedNum === x){
       return true;
   }
   else{
       return false;
   }
   console.log('reversedStr:', reversedStr)

};
console.log(isPalindrome(1024));
