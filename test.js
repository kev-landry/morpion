
var tour = 0;
$(".carre").click(function jouer() {


    if (tour % 2 === 0) {
        var result = $(".debut").html("<span>A toi de commencer !</span>")
        result = 'O';
        tour++;
    } else {
        var result = $(".debut").html("<span>L'IA commence</span>");
        result = 'X';
        tour++;
    }
    console.log("altern= " + tour);

    if (result == 'O') {
        $(this).html("O");
    }else{

    }
});
