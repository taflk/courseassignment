// refer to question 3 before development starts for scope document


//Change words
window.onload = changeWords();

function changeWords() {
    var textToChange = document.getElementById('aboutText').innerHTML;
    var switchWords = textToChange.replace(/magic/ig, 'Something');
    document.getElementById('aboutText').innerHTML = switchWords;
}

//Toggle display. The function also changes the arrow-icon.
document.getElementById('moreInfoTrigger')
    .addEventListener('click', function(){
        var showHideInfoContent = document.getElementById('moreInfoContent');
        var changeIcon = document.getElementById('moreInfoTrigger').getElementsByTagName('i')[0];
        if (showHideInfoContent.style.display == "none" && changeIcon.classList.contains('fa-chevron-down')) {
            showHideInfoContent.style.display = "block";
            changeIcon.classList.remove('fa-chevron-down');
            changeIcon.classList.add('fa-chevron-up');
        } else {
            showHideInfoContent.style.display = "none";
            changeIcon.classList.remove('fa-chevron-up');
            changeIcon.classList.add('fa-chevron-down');
        }   
    })