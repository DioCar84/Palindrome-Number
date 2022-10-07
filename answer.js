/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    const numtoArr = Array.from(String(x));
    
    for(let i = 0; i< numtoArr.length; i++){
        if(numtoArr[i] !== numtoArr.reverse()[i]) return false;
    }
    return true;
};
