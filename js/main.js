/* filter for mobile devices*/
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');


sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

/* show  three more cards */
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.cards-link--hidden');

btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function(cards) {
        cards.classList.remove('cards-link--hidden');
    })

} );

/* to show/ to hide widget content */

const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
    widget.addEventListener('click', function(e) {
       if(e.target.classList.contains('widget__title')){
       e.target.classList.toggle('widget__title--active');
       e.target.nextElementSibling.classList.toggle('widget__body--hidden');
       }
    })
})
