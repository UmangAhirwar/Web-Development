// Write a function which takes a string and return count of each character in the string.

function charCount(str){
    let result = {};
    str = str.replace(/\s/g, '');
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if(result[char] > 0){
            result[char]++;
        }
        else{
            result[char] = 1;
        }
    }
    return result;
}
console.log(charCount('Hi th123ere'))