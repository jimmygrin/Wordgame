$(document).ready(function(){

    $("#start").on("click", function(e){
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

var counter = 10;
var guess = []; 
$("#counter").html(counter)

var newwords = commonwords.filter(word => word.length > 2);
var randomword = newwords[Math.floor(Math.random()*newwords.length)];

console.log(randomword)


var length = randomword.length


// console.log(guess)

for (var i = 0; i < length; i++) {
    guess.push("_");
}   

$("#word").html(guess)



var randomarr = Array.from(randomword)





// Var underscore = ''

// function underscore () {
//     randomword.forEach(letter) {
//         underscore

//         underscore += '_ '
//     }
// }

// $("#word").html(randomword)
// var guesses = []




// var underscore = for(i=0; i > length; i++) {
//   guesses.push("_")
// }

// console.log(guesses)

// document.getElementById("#progress").innerHTML = guesses;
// document.getElementById("#counter").innerHTML = counter;

// console.log(randomword)


// // $("#lines").html(randomword)

// // var counter = 8;
// // $("#counter").html(counter)





$("#submit").on("click", function(e){
    e.preventDefault()


  var letter = document.getElementById('letter').value

  console.log(letter)

    
 

    if (randomword.includes(letter)) {
        
    for (var i = 0; i < randomarr.length; i++) {
        if(randomarr[i] === letter) {
            guess[i] = letter
            counter -= 1
        }
 
    
    
    }
  
  
 $("#word").html(guess)
 $("#counter").html(counter)
//  console.log(counter)


// var guess = document.getElementById("guess").value
// //   console.log(guess)  

// randomarr.forEach(lettercheck);

// function lettercheck(letter) {
//     if (letter == guess) {
//         $("#lines").html(guess)
//     } else {
//         console.log('no')
//     }
// }











// console.log(randomarr)

// console.log(guess)

// // var counter = 8

// // var guess

// console.log (randomword)
// console.log(length)





// })

}            
})


        
})

})
