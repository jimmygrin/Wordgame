$(document).ready(function(){
    $("#form").on("click", "button", function(e){
        e.preventDefault()
var commonwords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
  ];

var guess = document.getElementById("guess").value
//   console.log(guess)  

var newwords = commonwords.filter(word => word.length > 2);

var randomword = newwords[Math.floor(Math.random()*newwords.length)];

// console.log(randomword)



var length = randomword.length

// console.log(length)

var randomarr = Array.from(randomword)

// console.log(randomarr)

var guess = document.getElementById("guess").value
//   console.log(guess)  

randomarr.forEach(lettercheck);

function lettercheck(letter) {
    if (letter == guess) {
        console.log('yes')
    } else {
        console.log('no')
    }
}











// console.log(randomarr)

// console.log(guess)

// // var counter = 8

// // var guess

// console.log (randomword)
// console.log(length)





})

               
})

        



