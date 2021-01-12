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

