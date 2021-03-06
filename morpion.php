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


  </head>
  <body>

    <h1>Morpion</h1>

    <div class="row-fluid">
      <div class="col-lg-12">
          <p class="debut"></p>
        <div class="center-block grille">
          <div class="ligne">
            <div class = "carre" id="carre0">
            </div>
            <div class = "carre" id="carre1">
            </div>
            <div class = "carre" id="carre2">
            </div>
          </div>
          <div class="ligne">
            <div class = "carre" id="carre3">
            </div>
            <div class = "carre" id="carre4">
            </div>
            <div class = "carre" id="carre5">
            </div>
          </div>
          <div class="ligne">
            <div class = "carre" id="carre6">
            </div>
            <div class = "carre" id="carre7">
            </div>
            <div class = "carre" id="carre8">
            </div>
          </div>
        </div>
        <p>Commencez !</p>
        <p><button class="reset">RESET</button></p>
      </div>
    </div>



    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <script type="text/javascript" src="test.js"></script>
  </body>
</html>
