<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Morpion</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <link rel="stylesheet" type="text/css" href="morpion.css">
    <script type="text/javascript" src="morpion.js"></script>

  </head>
  <body>
    <script>
      //alert('hello world');
    </script>
    <h1>Morpion</h1>

    <div class="row">
      <div class="col-lg-12">
        <div class="center-block jeu">
          <div class="ligne">
            <div class = "carre">
              <button onclick="croix()">test</button>
            </div>
            <div class = "carre">
              <button></button>
            </div>
            <div class = "carre">
              <button></button>
            </div>
          </div>
          <div class="ligne">
            <div class = "carre">
              <button></button>
            </div>
            <div class = "carre">
              <button></button>
            </div>
            <div class = "carre">
              <button></button>
            </div>
          </div>
          <div class="ligne">
            <div class = "carre">
              <button></button>
            </div>
            <div class = "carre">
              <button></button>
              <p>x</p>
            </div>
            <div class = "carre">
              <button></button>
            </div>
          </div>
        </div>
                  <p>Joueur Humain commencez !</p>
      </div>
    </div>





    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
