// Коли сторінка прокручується, показуємо або приховуємо кнопку
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// При кліку на кнопку, прокручуємо наверх
function scrollToTop() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE та Opera
}

//перехід на іншу сторінку
function navigateToPage(a) {
  window.location.href = href=a;
}

function changeFont() {
    var fontSelector = document.getElementById("font");
    var selectedFont = fontSelector.options[fontSelector.selectedIndex].value;
    document.getElementById("content").style.fontFamily = selectedFont;
}

function changeFontSize() {
    var fontSizeSelector = document.getElementById("fontSize");
    var selectedFontSize = fontSizeSelector.options[fontSizeSelector.selectedIndex].value;
    document.getElementById("content").style.fontSize = selectedFontSize;
}

function changeFontKegel() {
    var fontKegelSelector = document.getElementById("fontKegel");
    var selectedFontKegel = fontKegelSelector.options[fontKegelSelector.selectedIndex].value;
    document.getElementById("content").style.fontSize = selectedFontKegel;
}