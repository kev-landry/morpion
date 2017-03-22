// ---------- Script Tirage au sort ---------
var count = Math.floor((Math.random() * 10) + 1);

if (count % 2 === 0) {
    var result = $(".debut").html("<span>Humain commence !</span>") //Humain
    result = 'O';
} else {
    var result = $(".debut").html("<span>Bot commence !</span>")
    result = 'X'; //IA
}

function tour() {

    if (count % 2 === 0) {
        result = 'O'; //Humain
    } else {
        result = 'X'; //IA
    }
    console.log("tour : " + result);
    count++;
    return result;
}

function jouer() {

    if (tour() == 'O') {
        //Humain joue
    } else {
        //IA joue
    }
}
//Tableau qui représente le jeu

var grille = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

$(".carre").click(function IA() {
    //Siri dis moi comment faire !
    if (true) {

    }
});

//Verif' les combinaisons gagnantes
function isGagner() {
    //condition victoire en ligne
    for (var x = 0; x < grille.length; x++) {
        if (grille[x][y] != "" && grille[x][0] == grille[x][1] && grille[x][1] == grille[x][2]) {
            alert('Gagné !');
        }
    }
    //condition victoire en colonne
    for (var y = 0; y < grille.length; y++) {
        if (grille[x][y] != "" && grille[0][y] == grille[1][y] && grille[1][y] == grille[2][y]) {
            alert('Gagné !');
        }
    }
    //condtion victoire en diagonale
    if (grille[0][0] == grille[1][1] && grille[1][1] == grille[2][2]) {
        alert('Gagné !');
    } else if (grille[0][2] == grille[1][1] && grille[1][1] == grille[2][2]) {
        alert('Gagné');
    }

}

// reset la grille
$('.reset').click(function reset() {
    location.reload('.carre');
});
