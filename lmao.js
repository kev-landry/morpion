var count = 0;

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

$(".carre").click(function jouer() {



    var grille = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    var coin1 = grille[0][0];
    var coin2 = grille[0][2];
    var coin3 = grille[2][0];
    var coin4 = grille[2][2];
    var centre = grille[1][1];

    if (tour() == 'O') {
      $(this).html('O');
    }else {
      $(this).html("X");
    }
});
