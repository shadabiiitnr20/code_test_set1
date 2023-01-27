function lcs(arr1) { var arr = arr1.concat().sort()
     a1 = arr[0] 
     a2 = arr[arr.length - 1]; 
     len = a1.length; i = 0; 
     while(i<len && a1.charAt(i) === a2.charAt(i)) i++; 
     return a1.substring(0,i); }

console.log(lcs['awwbcde', 'azbcdii'])






var twoSum = function(nums, target) {
    for(let i = 0; i <= nums.length; i++){
        for(let j = 0; j <= nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};

console.log([1,2,3,4], 6)