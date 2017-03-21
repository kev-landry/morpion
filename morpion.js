
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
    console.log("tour : "+ result);
    count++;
    return result;
}

// La grille de jeu en Tableau
var grille = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function afficher() {

    if (tour() == 'O') {
        $(this).html("O");
        var carreId = $(this).attr('id'); //ON recupere l'id où le click à été effectué !
        for(var key in grille){ //parcours du tab asso
          console.log("grille de carre0 for = " + key);
          console.log("carre id = " + carreId);
          if(key == $(this).attr('id')){
            console.log("if key = " + key);
            grille.key = "O"; //grille.key ne veut pas prendre la valeur "O" !
            console.log("grille de carre0 if = " + grille["carre0"]);
            console.log("tableau grille " + grille);
          }
        }
    } else {
        //Si IA commence elle va jouer X dans un coin
        $(this).html("X");
    }
                console.log("grille de carre0 fin fonction = " + grille["carre0"]);
}

// La grille de jeu en Tableau


/*{"carre":"X",carre:"O",carre:"",
              carre:"X",carre:"",carre:"",
              carre:"",carre:"",carre:""};*/

var clickSalope = $(".carre").click(afficher);
clickSalope;

function IA() {

    for(var key in grille){
      if(grille[key] == ""){

      }
    }

    if (grille["carre0"] = "" || grille["carre2"] || grille["carre6"] || grille["carre8"]) {

    }
}
//Détermine la gagne
function isGagner(){

}
//Fonction reset le jeu
$('.reset').click(function reset() {

    $(".carre").load(location.href + " .carre>*", "");
});



/*if(grille["carre0"] = "" || grille["carre2"] || grille["carre6"] || grille["carre8"]){
}*/
/*
var grille = {carre0 : "", carre1 : "", carre2 : "",
              carre3 : "", carre4 : "", carre5 : "",
              carre6 : "", carre7 : "", carre8 : ""
            };
*/
