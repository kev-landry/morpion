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
var grille = new Object();
grille["carre0"] = "";grille["carre1"] = "";grille["carre2"] = "";
grille["carre3"] = "";grille["carre4"] = "";grille["carre5"] = "";
grille["carre6"] = "";grille["carre7"] = "";grille["carre8"] = "";

function afficher() {

    if (tour() == 'O') {
        $(this).html("O");
        var carreId = $(this).attr('id'); //ON recupere l'id où le click à été effectué !
        for(var key in grille){
          console.log("grille de carre0 for = " + key);
          console.log("carre id = " + carreId);
          if(key == carreId){
            grille.carre0 == 'O';
            console.log("grille de carre0 if = " + grille[key]);
          }
        }
    } else {
        //Si IA commence elle va jouer X dans un coin
        $(this).html("X");
    }
                console.log("grille de carre0 fin fonction = " + grille[key]);
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
