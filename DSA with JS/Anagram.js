let str1 = 'mngau';
let str2 = 'umang';
function anagram(str1,str2){
    //check length
    if(str1.length != str2.length){
        return false;
    }
    for(i = 0; i < str1.length; i++){
        let character = str1[i];
        if(!str2.includes(character)){
            return false;
        }
    }
    console.log(`The string '${str1}' is an anagram of '${str2}'`) 
    return true;
}
console.log(anagram(str1,str2));

