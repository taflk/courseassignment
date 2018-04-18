// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
    .then((res) => {
    createCards(res);
  })
.catch(err => console.log(err))



//Function that takes the json object as an argument.
function createCards(result, searchString) {
    console.log(result)
    var i;
    //Lager en for loop som går gjennom listen i JSON objektet.
    for (i = 0; i < result.cards.length; i++) {
        //Går gjennom html documentet og finner elemented med id'en cards.
        var card = document.getElementById('cards');
        
        var newCol = document.createElement('div');
        newCol.setAttribute('class', 'col-sm-4');
        card.appendChild(newCol);
        
        var cardContainer = document.createElement('div');
        cardContainer.setAttribute('class', 'card-container');
        newCol.appendChild(cardContainer);
        
        var title = document.createElement('h4');
        title.innerHTML = result.cards[i].name;
        cardContainer.appendChild(title)
        
        var cardImage = document.createElement('img');
        cardImage.src = result.cards[i].imageUrl;
        cardImage.style.width = '100%';
        cardContainer.appendChild(cardImage);
        
        var viewMoreBtn = document.createElement('a');
        viewMoreBtn.href = 'card-specific.html?id=' + result.cards[i].id;
        viewMoreBtn.setAttribute('class', 'btn btn-success');
        viewMoreBtn.innerHTML = 'View More';
        cardContainer.appendChild(viewMoreBtn);
        
        
        
    } 
}


function searchCards(res, searchString) {
    var searchedCards = res.cards.filter(card => {
    return card.name.toLocaleLowerCase()
        .indexOf(searchString.toLowerCase()) !== -1
    });
   
    if (searchedCards.length == 0) {
        var noResults = document.createElement('p');

    document.getElementById('cards').appendChild(noResults);
    noResults.innerHTML = " No results found";
    }
    return searchedCards;
} 
 
document.getElementById("searchButton").addEventListener("click", search);

function search(event) {
    event.preventDefault();
    var cardContainer = document.getElementById('cards');
    cardContainer.innerHTML = '';
    var searchString = document.getElementById('search').value;
    console.log(searchString)
    fetch("https://api.magicthegathering.io/v1/cards")
        .then(result => result.json())
        .then (result => {
        var filteredCards = searchCards(result, searchString);
        result.cards = filteredCards
     
        console.log(filteredCards)
        createCards(result);
    
    })
    .catch(err => console.log(err))
}
