/* filter for mobile devices*/
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

//Click to button to show/ to hide filter at mobile devices. Change of icon
sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

/* Click to button and show three hidden cards */
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.cards-link--hidden');

btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function(cards) {
        cards.classList.remove('cards-link--hidden');
    });

} );


/* Find all widget at the page. Listen to click inside widget. If click at title than to show/ to hide widget content */
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
    widget.addEventListener('click', function(e) {
       if(e.target.classList.contains('widget__title')){
       e.target.classList.toggle('widget__title--active');
       e.target.nextElementSibling.classList.toggle('widget__body--hidden');
       }
    });
});

/* location button "Любая"*/
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

//Choose  button "Любая" - reset other parameters
checkBoxAny.addEventListener('change', function(){
    if(checkBoxAny.checked){
        topLocationCheckboxes.forEach(function(item){
            item.checked = false;
        });
        checkBoxAny.checked = true;
    } 
});

// Reset button "Любая" after choosing another parameter


topLocationCheckboxes.forEach(function(item) {
    item.addEventListener('change', function() {
        if(item.checked = true){
         checkBoxAny.checked = false;}
    });
});



/* Show three more additional options with checkboxes at filter */ 

const showMoreOptions = document.querySelector('.widget__btn-show__hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault();
    //if blocks  have benn hidden than we show
    
if (showMoreOptions.dataset.options == 'hidden') {
    hiddenCheckBoxes.forEach(function (item) {
        item.style.display = 'block';
    });
    showMoreOptions.dataset.options = 'visible';
    showMoreOptions.innerText = 'Свернуть доп опции';
}

    //if blocks were visable than to hide
    else if (showMoreOptions.dataset.options == 'visible') {
    hiddenCheckBoxes.forEach(function (item) {
        item.style.display = 'none';
    });
    showMoreOptions.dataset.options = 'hidden';
    showMoreOptions.innerText = 'Показать ещё';
}
};