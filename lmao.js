var count = 0;

function tour() {

    if (count % 2 === 0) {
        var result = $(".debut").html("<span>A toi de commencer !</span>")
        result = 'O';
        count = count + 2;
    } else {
        var result = $(".debut").html("<span>L'IA commence</span>");
        result = 'X';
        count = count + 2;
    }

    console.log("tour result = " + result);
    return result;
}
//Tableau 2d représentant notre grille de jeu
var grille = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

//Les cases optimales
/*var coin1 = grille[0][0];
var coin2 = grille[0][2];
var coin3 = grille[2][0];
var coin4 = grille[2][2];
var centre = grille[1][1];
*/
$(".carre").click(function jouer() { // X = IA, O = Humain

    if (tour() == 'O') {

        //D'abord l'humain joue
        $(this).html('O'); //On place notre O dans la case voulu
        var carreId = console.log($(this).attr('id')); //ON recupere l'id où le click à été effectué !

        //Puis l'IA joue
        if ($(this) == carreId) {
            grille[][]= 'O';
        }

        if (grille[0][0] == "") {
            setTimeout(function() { //L'IA attend 800 ms avant de jouer
                $("#carre0").html("X");
            }, 800);
            grille[0][0] = "X";
            console.log("condition coin1 ");
        } else if (grille[0][2] == "") {
            setTimeout(function() {
                $("#carre2").html("X");
            }, 800);
            grille[0][2] = "X";
            console.log("condition coin2 ");
        } else if (grille[2][0] == "") {
            setTimeout(function() {
                $("#carre6").html("X");
            }, 800);
            grille[2][0] = "X";
        } else if (grille[2][2] == "") {
            setTimeout(function() {
                $("#carre8").html("X");
            }, 800);
            grille[2][2] = "X";
        } else if (grille[1][1] == "") {
            setTimeout(function() {
                $("#carre4").html("X");
            }, 800);
            grille[1][1] = "X";
        }
    }

    console.log(grille);
});

$('.reset').click(function reset() {

    location.reload('.carre');
});

$('tr').click(function affiche() {
    $(this).html('X');
});
