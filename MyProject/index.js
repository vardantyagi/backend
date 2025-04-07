var giveMeAJoke = require('give-me-a-joke');

// var fn = "Vardan";
// var ln = "Aashirvad";
// giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
//     console.log("custom joke");
//     console.log(joke);
// });

giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});