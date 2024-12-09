let nums = [1,2,1,3,4,5]
target = 3;
function summ(){
    for(i=0; i<nums.length;i++){
      for(j=1;j<nums.length;j++){
        if(nums[i]+nums[j] === target){
            return number=[nums[i],nums[j]];
        }
      }
    }
}

console.log('summ:', summ());