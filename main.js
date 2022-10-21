let btn = document.querySelector('button');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '“Be yourself; everyone else is already taken.”',
    person:'Oscar Wilde '
},{
    quote: '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.” ',
    person: 'Albert Einstein'
},{
    quote: '“So many books, so little time.” ',
    person: ' Frank Zappa '
},{
    quote: 'The fool doth think he is wise, but the wise man knows himself to be a fool.” ',
    person: ' William Shakespeare '
},{
    quote:'“If you tell the truth, you dont have to remember anything.” ',
    person:'Mark Twain'
}
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})

window.onload = function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
}