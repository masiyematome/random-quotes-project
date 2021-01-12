//Selectors

const generateQuoteButton = document.querySelector(".generate-quote-button");
const quoteText = document.querySelector(".quote-text");
const authorText = document.querySelector(".author-text");

//Event Liteners

generateQuoteButton.addEventListener("click",displayQuote);

//Functions

function generateRandomQuote(quotes){
    const randomIndex = Math.floor(Math.random() * 10);
    console.log(quotes[randomIndex]);
}

function displayQuote(theQuotes){
    const theQuotes = [
        {
            quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
            author : "Winston Churchill",
        },

        {
            quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
            author: "Samuel Smiles",
        },

        {
            quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
            author : "Steve Jobs",
        },

        {
            quote: "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
            author: "Rob Siltanen",
        },

        {
            quote: "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.",
            author : "Mohnish Pabrai",
        },

        {
            quote: "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
            author: "Johann Wolfgang Von Goethe",
        },

        {
            quote: "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.",
            author : "Don Zimmer",
        },

        {
            quote: "Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.",
            author: "Brian Tracy",
        },

        {
            quote: "Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.",
            author : "Brian Tracy",
        },

        {
            quote: "For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.",
            author: "Jack Canfield",
        },

    ];
}

