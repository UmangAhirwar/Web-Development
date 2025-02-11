
console.log("Pattern 1");

let star1 = "";
for(let i = 0; i < 5; i++){
        for(j = 0; j < 5; j++){
            star1 += "*"
    }
    star1 += '\n';
}
console.log(star1);

console.log("Pattern 2");
let star2 = "";
for(let i = 0; i < 6; i++){
    for(let j = 0; j < i; j++){
        star2 += "*";
    }
    star2 += '\n';
}
console.log(star2);

console.log("Pattern 3");
let num = "";
for(let i = 1; i < 7; i++){
    for(let j = 1; j < i; j++){
        num += j;
    }
    num += '\n';
}
console.log(num);

console.log("Pattern 4");
let sameNum = "";
for(let i = 0; i < 6; i++){
    for(let j = 0; j < i; j++){
        sameNum += i;
    }
    sameNum += '\n';
}
console.log(sameNum);

console.log("Pattern 5");
let revStar = "";
for(let i = 0; i < 5; i++){
    for(let j = 4 ; j>=i; j--){
        revStar += '*';
    }
    revStar += '\n';
}
console.log(revStar);

console.log("Pattern 6");
let revNum = "";
for(let i = 1; i < 6; i++){
    for(let j = 5; j >= i; j--){
        revNum += j;
    }
    revNum += '\n';
}
console.log(revNum);

console.log("Pattern 7");
let revNum2 = "";
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5 - i + 1; j++){
        revNum2 += j; 
    }
    revNum2 += '\n';
}
console.log(revNum2);
console.log("pattern 8");
let stars = "";
for(let i = 0; i < 5; i++){
    //space
    for(let j = 0; j < 5 - i - 1; j++){
        stars += " ";
    }
    //stars
    for(let j = 0; j < 2 * i + 1; j++){
        stars += "*";
    }
    //space
    for(let j = 0; j < 5 - i - 1; j++){
        stars += " ";
    }
    stars += "\n";
}
console.log(stars);

console.log("pattern 9");
let stars1 = "";
for(let i = 0; i <= 5; i++){
    //space
    for(let j = 0; j < i; j++){
        stars1 += " ";
    }
    //stars
    for(let j = 0; j < 9 - 2*i; j++){
        stars1 += "*";
    }
    //space
    for(let j = 0; j<i; j++){
        stars += " ";
    }
    stars1 += "\n";
}
console.log(stars1);

console.log("Pattern 10");
let stars2 = "";
let stars3 = "";
for(let i = 0; i < 5; i++){
    //space
    for(let j = 0; j < 5 - i - 1; j++){
        stars3 += " ";
    }
    //stars
    for(let j = 0; j < 2 * i + 1; j++){
        stars3 += "*";
    }
    //space
    for(let j = 0; j < 5 - i - 1; j++){
        stars3 += " ";
    }
    stars3 += "\n";
}
for(let i = 0; i < 5; i++){
    //space
    for(let j = 0; j < i; j++){
        stars2 += " ";
    }
    //stars
    for(let j = 0; j < 9 - 2*i; j++){
        stars2 += "*";
    }
    //space
    for(let j = 0; j<i; j++){
        stars += " ";
    }
    stars2 += "\n";
}
console.log(stars3, stars2)







