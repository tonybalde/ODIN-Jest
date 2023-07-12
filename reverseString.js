// hello ---> olleh
// Hello World! --> !dlorW olleH

function reverseString(str){
        let revArr = [];

        for (let i = 1; i <= str.length; i++){
            revArr.push(str.charAt(str.length-i));
            
        }
        return revArr.join("")
}

module.exports = reverseString;