function randomStart() {

    var rand = Math.floor((Math.random() * 10) + 1);
    if (rand % 2 === 0) {
        var result = $(".debut").html("<span>A toi de commencer !</span>")
        result = 'O';
    } else {
        var result = $(".debut").html("<span>L'IA commence</span>");
        result = 'X';
    }
    console.log(result);

    return result;
}

function tour(){
  
}
// A chaque click dans un carre :
$(".carre").click(function jouer() {
    if (tour() == 'O') {
        $(this).html("O");
    } else {
        var grille = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        //on définit les meilleurs chances de gagner
        console.log('initialisation');
        //Nos compteurs
        for (var i = 0; i < grille.length; i++) {
            console.log('première boucle');
            for (var j = 0; j < grille.length; j++) {
                var coin1 = grille[0][0];
                var coin2 = grille[0][2];
                var coin3 = grille[2][0];
                var coin4 = grille[2][2];
                var centre = grille[1][1];
                console.log('seconde boucle');
                if (coin1 == false) {
                    $(this).html("X");
                } else if (coin2 == false) {
                    $(this).html("X");
                }
            }
        }
    }
});

/*  alert('function croix');
  $(".carre").css("backgroundColor","red");*/

// IA : first prendre les coins sinon centre
/*
function check() {

    var i = 0;
    var j = 0;
    var tab = [];
    while (tab[i]) {
        tab[i].addEventlistener("click", );
        if (tab[i] == 'X' OR tab[i] == 'O') {

        }
    }
}

 document.getElementsByClassName('carre') = x;

var carre = document.getElementsByClassName('carre');
element.addEventlistener('croix', function(){
  carre.innerHTML = "O";
})

alert('hello');

function croix() {
    document.getElementsByClassName('carre').style.backgroundColor = "red";
}

[[x,o,x],[x,o,o],[o,x,x]]
tab[1][2]  ligne 2 colonne 3

function grille() {

}

function reset() {

}
*/
