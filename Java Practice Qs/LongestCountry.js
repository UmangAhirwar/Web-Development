country = ['Australia', 'Germany', 'United States of America']
function returnLongName(country){
    let currIndex = 0;
    for(let i = 0; i < country.length; i++){
        if(country[i].length > country[currIndex].length){
            currIndex = country[i];
        }
    }
    return currIndex;
}
console.log(returnLongName(country));