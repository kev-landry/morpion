
//const rand = Math.floor((Math.random() * 10) + 1);

//On décide qui débute

var start = false;

$('.start').click(function quidebute() {

  var start = true;

    if (start) {
      var rand = Math.floor((Math.random() * 10) + 1);
      start = false;
    }
    rand++;
    console.log("rand = " +rand);
    if (rand%2 === 0) {
        var result = $(".debut").html("<span>A toi de commencer !</span>")
        result = 'O';
    } else {
        var result = $(".debut").html("<span>L'IA commence</span>");
        result = 'X';
    }
    console.log("randomStart = " + result);
    return result;
});
// à partir de ce return on va alterner les tours
// sauf que le random() va se répéter à chaque fois ! comment faire ?
// A chaque click dans un carre :

$('.carre').click(function jouer() {

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

    if (quidebute() == 'O') {
        $(this).html("O");
        for (var i = 0; i < grille.length; i++) {

            for (var j = 0; j < grille.length; j++) {

                if (coin1 == "" || coin1 == 'O') {
                    $(this).html("X");
                } else if (coin2 == false) {
                    $(this).html("X");
                } else if (coin3 == false) {
                    $(this).html("X");
                } else if (coin4 == false) {
                    $(this).html("X");
                }
            }
        }
    } else {
        $(this).html("X");
    }
});
