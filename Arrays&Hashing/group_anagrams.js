/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//Solution 1: using a Map
var groupAnagrams = function(strs) {
    let charMap=new Map()

    if (strs.length === 0) return [];

    for(let str of strs){
        let sorted = str.split('').sort().join('');

        //If the sorted key doesn't exist, initialize an empty array as the value with the sorted value as key
        if (!charMap.has(sorted)) {
            charMap.set(sorted, []);
        }
        //Else, push the value to the initialized array of the key
        charMap.get(sorted).push(str);
    }
    //Convert the map into an array
    return Array.from(charMap.values());
};

//Solution: using an Object
var groupAnagrams = function(strs) {
    // Use object instead of Map for easier grouping
    let result = {};
    
    // Fix loop condition: change <= to <
    for(let i = 0; i < strs.length; i++) {
        // Sort the current string to use as key
        let sorted = strs[i].split('').sort().join('');
        
        // If key exists, push to array, else create new array
        if(result[sorted]) {
            result[sorted].push(strs[i]);
        } else {
            result[sorted] = [strs[i]];
        }
    }
    
    // Return array of grouped anagrams
    return Object.values(result);
};

// Test
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]