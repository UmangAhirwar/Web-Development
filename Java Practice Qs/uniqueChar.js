//Write a JS function to extract unique characters from a string.
//For eg: str = “abcdabcdefgggh” ans=“abcdefgh”

function getUnique(str){
    let uniqueStr = '';
    for(let i = 0; i < str.length; i++){
        if(uniqueStr.indexOf(str[i]) == -1){
            uniqueStr += str[i] ;
        }
    }
    return uniqueStr
}
console.log(getUnique('abcddeffffghh'));
