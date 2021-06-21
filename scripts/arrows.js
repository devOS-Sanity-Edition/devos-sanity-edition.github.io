// document.getElementsByClassName('navBar').addEventListener('scroll', function() {
//     if (isScrolledIntoView(document.getElementById('arrows'))) {
//         alert('begone')
//     }
// })



// function isScrolledIntoView(el) {
//     var rect = el.getBoundingClientRect();
//     var elemTop = rect.top;
//     var elemBottom = rect.bottom;



//     // Only completely visible elements return true:
//     // THis is important ^^



//     var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//     // Partially visible elements return true:
//     //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//     return isVisible;
// }