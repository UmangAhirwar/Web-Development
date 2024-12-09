//Write a function to determine vowel characters in a string and show the count as an output.
function vowels(str){
    let count = 0 ; 
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == 'a' ||
           str.charAt(i) == 'e' ||
           str.charAt(i) == 'i' ||
           str.charAt(i) == 'o' ||
           str.charAt(i) == 'u'
        )
        count++;
    }
    return count;
}
console.log(vowels('hellow wourld'));