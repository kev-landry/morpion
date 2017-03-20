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
//Tableau représentant notre grille de jeu
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
        $(this).html('O'); //On place notre O dans la case voulu
        //ON recupere l'id où le click à été effectué ?
        

        if (grille[0][0] == "") {
            setTimeout(function() { //L'IA attend 1sec avant de jouer
                $("#carre0").html("X");
            }, 1000);
            grille[0][0] = "X";
            console.log("condition coin1 ");
        } else if (grille[0][2] == "") {
            setTimeout(function() {
                $("#carre2").html("X");
            }, 1000);
            grille[0][2] = "X";
            console.log("condition coin2 ");
        } else if (grille[2][0] == "") {
            setTimeout(function() {
                $("#carre6").html("X");
            }, 1000);
            grille[2][0] = "X";
        } else if (grille[2][2] == "") {
            setTimeout(function() {
                $("#carre8").html("X");
            }, 1000);
            grille[2][2] = "X";
        } else if (grille[1][1] == "") {
            setTimeout(function() {
                $("#carre4").html("X");
            }, 1000);
            grille[1][1] = "X";
        }
    }
    console.log(grille);
});

function vanqueur() {


}
