const quoteContainer = document.getElementById('quote-container');
const quoteText= document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');




//posting on twitter

const tweetQuote = function(){
    const quote = quoteText.innerHTML;
    const author = authorText.innerHTML;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`;
    window.open(twitterUrl, '_blank');
}


//Get quote from API

async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        authorText.innerHTML = data.quoteAuthor;
        quoteText.innerHTML = data.quoteText;
    } catch(error){
        console.log("There is no quote. Sorry", error);
    }
}



// On load

getQuote();

//Add functionality to the buttons

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);