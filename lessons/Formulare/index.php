<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="./style.css">
   <title>Formulare</title>
</head>
<body>
   <h1>Formulare in HTML</h1>

   <?php
   //PHP code kann überall angefangen werden

   //Diese Datei wird nicht zu dem Nutzer gesendet, sie wird nur benutzt um das
   //HTML für die Webseite zu generieren!


   //Wir wollen das Formular nur anzeigen, wenn noch keinen Formulardaten
   //vorhanden sind
   if (!isset($_POST['form'])) {
      //Das HTML in dem if block wird nur ausgegeben, wenn die Bedingung wahr ist!
      ?>
      <form action="index.php" method="post">

         <label for="name">Name:</label>
         <input type="text" name="name" value="">
         <br>
         <label for="vorname">Vorname:</label>
         <input type="text" name="vorname" value="" required>
         <br>
         <input type="submit" name="submitbtn" value="Absenden">
         <input type="text" name="form" value="nameform" hidden>
      </form>
      <?php
      //andernfalls, wenn bereits Formulardaten vorhanden sind können wir diese
      //ausgeben
   } else if($_POST['form'] == 'nameform'){
      //mit 'echo' kann text in das zu erstellende HTML Dokument geschrieben werden
      ?>
      <div class="formdata">
         <span>Name: <?php echo $_POST['name'];?></span>
         <br>
         <span>Vorname: <?php echo $_POST['vorname'];?></span>
      </div>
      <?php
   }
   ?>
</body>
<script src="./script.js" charset="utf-8"></script>
</html>
