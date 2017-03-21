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

// La grille de jeu en Tableau
var grille = {
    carre0: "",
    carre1: "",
    carre2: "",
    carre3: "",
    carre4: "",
    carre5: "",
    carre6: "",
    carre7: "",
    carre8: ""
};



function afficher() {

    if (tour() == 'O') {
        click;
        var carreId = $(this).attr('id'); //ON recupere l'id où le click à été effectué !
        for (var key in grille) { //parcours du tab asso

            if (key == carreId) {
                grille[key] = "O"; //grille[key] prend la valeur "O" !
            }
        }
    } else {
        //Si IA commence elle va jouer X dans un coin
        if (grille["carre0"] = "" || grille["carre2"] || grille["carre6"] || grille["carre8"]) {
            $("#carre2").html("X")
            var carreId = $(this).attr('id');
            for (var key in grille) { //parcours du tab asso
                if (key == carreId) {
                    grille[key] = "X"; //grille[key] prend la valeur "X" !
                }
            }
        }
    }
    console.log("grille de carre0 fin fonction = " + grille["carre0"] + grille["carre5"]);
}

// La grille de jeu en Tableau

var click = $(".carre").click(function() {
    $(this).html("O");
});
/*{"carre":"X",carre:"O",carre:"",
              carre:"X",carre:"",carre:"",
              carre:"",carre:"",carre:""};*/



function IA() {

    for (var key in grille) {
        if (grille[key] == "") {

        }
    }

    if (grille["carre0"] = "" || grille["carre2"] || grille["carre6"] || grille["carre8"]) {

    }
}
//Détermine la gagne
function isGagner() {

}
//Fonction reset le jeu need un reset DOM
$('.reset').click(function reset() {

    $(".carre").load(location.href + " .carre>*", "");
});

/*if(grille["carre0"] = "" || grille["carre2"] || grille["carre6"] || grille["carre8"]){
}*/
