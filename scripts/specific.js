// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");


fetch('https://api.magicthegathering.io/v1/cards/' + id)
    .then(result => result.json())
    .then((res) => {
    cardSpecific(res);
  })
.catch(err => console.log(err))


function cardSpecific(result) {
    console.log(result)
    
    var cardImage = document.getElementById('cardImage');
    
    var specificImage = document.createElement('img');
    specificImage.src = result.card.imageUrl;
    specificImage.style.width = '100%';
    cardImage.appendChild(specificImage);
    
    var cardDetail = document.getElementById('cardDetails');
    
    var title = document.createElement('h2');
    title.innerHTML = result.card.name;
    cardDetail.appendChild(title);
    
    var about = document.createElement('div');
    about.innerHTML = '<b>About:</b> ' + result.card.text;
    cardDetail.appendChild(about);
    
    var rarity = document.createElement('div');
    rarity.innerHTML = '<b>Rarity:</b> ' + result.card.rarity;
    cardDetail.appendChild(rarity)
    
    var color = document.createElement('div');
    color.innerHTML = '<b>Color:</b> ' + result.card.colors;
    cardDetail.appendChild(color);

}

//8. Test to see if there is no query string if there isnt display a suitable message. Wooooot?