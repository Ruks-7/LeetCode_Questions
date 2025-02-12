/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Only one valid answer exists.
//Has a time complexity of 0(N pow 2) - Brute Force Algorithm
var twoSum = function(nums, target) {

    for(i=0; i<=nums.length; i++){
        num1=nums[i]
        for(m=i+1; m<=nums.length; m++){
            num2=nums[m]
            if(num1+num2===target){
                return(console.log([i,m]))
            }
        }
    }
};

//Using a map
//Time complexity - 0(N)
var twoSum = function(nums, target) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if(map.has(complement)) {
            return ( console.log([map.get(complement), i]));
        }
        
        map.set(nums[i], i);
        console.log(map)
    }
};

twoSum([3,2,1,9,4], 6)