/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Solution 1
//Using set() and comparing the sizes of original array and Set object
var containsDuplicate = function(nums) {
    let uniqueValues = new Set(nums)

    if(nums.length === uniqueValues.size){
        return (console.log(false))
    }

    return (console.log(true))
};

//Solution 2
//Using a nested loop results into a high time complexity thus not an optimal solution
var containsDuplicate = function(nums) {
    let length = nums.length

    for(i=0; i<=length; i++){

        for(a=i+1; a<=length; a++){
            if(nums[i] === nums[a]){
                return (console.log(true))
            }
        }
    }
    return (console.log(false))
};


//Get the duplicate values
var containsDuplicate = function(nums) {
    let uniqueValues = new Set()
    duplicates=[]

    nums.forEach((item) => {
        if(uniqueValues.has(item)){
            duplicates.push(item)
        }
        else{
        uniqueValues.add(item)
        }
    });
    console.log(duplicates)
}

containsDuplicate([1,2,3,4,5,6,7,8,7,10,9,2]) 
