function validAnagram(arr1,arr2){
    // add whatever parameters you deem necessary - good luck!
    const val1 = String(arr1)
    const val2 = String(arr2)

    if(val1.length!==val2.length){
        return false;
    }
    console.log("Converted into object...")
    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of val1){
      freqCounter1[val] = freqCounter1[val] + 1 || 1
    }
    for(let val of val2){
      freqCounter2[val] = freqCounter2[val] + 1 || 1
    }

    console.log(freqCounter1);
    console.log(freqCounter2);

    console.log("Converted into arrays...")
    
    let Key1 = Object.keys(freqCounter1);
    console.log('Key1:', Key1)

    let Key2 = Object.keys(freqCounter2);
    console.log('Key2:', Key2)

    let Val1 = Object.values(freqCounter1);
    console.log('Val1:', Val1)

    let Val2 = Object.values(freqCounter2);
    console.log('Val2:', Val2)
    
    console.log("Converted into strings...")

    let Keys1 ='';
    for(let i of Key1){
      Keys1 += i;
    }

    let Keys2 ='';
    for(let i of Key2){
      Keys2 += i;
    }

    let Vals1 ='';
    for(let i of Val1){
      Vals1 += i;
    }

    let Vals2 ='';
    for(let i of Val2){
      Vals2 += i;
    }

    console.log('Keys1:', Keys1)
    console.log('Keys2:', Keys2)
    console.log('Vals1:', Vals1)
    console.log('Vals2:', Vals2)

    console.log("Compared the strings...")

    if((Keys1 === Keys2) && (Vals1 === Vals2)){
      return true;
    }
    else{
      return false;
    }
    
    
}
console.log(validAnagram(182,281));
  