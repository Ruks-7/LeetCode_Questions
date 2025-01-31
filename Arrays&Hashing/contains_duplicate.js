/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Solution 1
//Using a nested loop results into a high time complexity thus not an optimal solution
//Using set() and comparing the sizes of original array and Set object
var containsDuplicate = function(nums) {
    let uniqueValues = new Set(nums)

    if(nums.length === uniqueValues.size){
        return (console.log(false))
    }

    return (console.log(true))
};

containsDuplicate([1,2,3,4,5,6,7,8,7,10]) 

//Get the duplicate values
//Comment the code above (lines 8 to 16) to run the code below
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

