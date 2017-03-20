var count = 0;
const grille = document.querySelectorAll('carre');
function tour() {

    if (count % 2 === 0) {
        var result = $(".debut").html("<span>A toi de commencer !</span>")
        result = 'O';
        count++;
    } else {
        var result = $(".debut").html("<span>L'IA commence</span>");
        result = 'X';
        count++;
    }
    return result;
}

function jouer() {

    if (tour() == 'O') {
      $(this).html('O');
    }else {
      $(this).html("X");
    }
}
grille.forEach(el => el.click(jouer));
