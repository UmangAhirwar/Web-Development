function validAnagram(first,second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};

    for(letter of first){
        lookup[letter] ? lookup[letter] =+ 1 : lookup[letter] = 1;
    }
    console.log('lookup:', lookup)

    for(letter of second){
        lookup[letter] ? lookup[letter] -= 1 : false;  
    }
    return true;
}

console.log(validAnagram('anagram', 'anagarm'));




