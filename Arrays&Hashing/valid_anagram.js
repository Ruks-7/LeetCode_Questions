/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//General solution with constraints
var isAnagram = function(s, t) {

    let sCharacters = Array.from(s).sort().join("")
    let tCharacters = Array.from(t).sort().join("")

    console.log(sCharacters)
    
    //Strings must have more than one character && less than 4000 characters(Constraint 1)
    if(s.length<=1 && t.length<=1 && s.length>(5*Math.pow(10,4)) && t.length>(5*Math.pow(10,4))){
        return(console.log(0))
    }

    //String characters are lowercase(Constraint 2)
    if(s!==s.toLowerCase() && t!==t.LowerCase()){
        return(console.log(0))
    }

    //Strings must have equal length
    if(s.length!==t.length){
        return (console.log(false))
    }

    //Strings have similar characters
    if(sCharacters!==tCharacters){
        return (console.log(false))
    }

    return (console.log(true))

};

//Without checking constraints
//Solution 1: Better option if the input has unicode characters
var isAnagram = function(s, t) {

    let sCharacters = Array.from(s).sort().join("")
    let tCharacters = Array.from(t).sort().join("")

    //Strings have similar characters
    if(sCharacters!==tCharacters){
        return (console.log(false))
    }

    return (console.log(true))

};

//Solution 2
var isAnagram = function(s, t) {

    let sCharacters = s.split("").sort().join()
    let tCharacters = t.split("").sort().join()

    //Strings have similar characters
    if(sCharacters!==tCharacters){
        return (console.log(false))
    }

    return (console.log(true))
};


isAnagram("car", "rac")
isAnagram("rat", "car")