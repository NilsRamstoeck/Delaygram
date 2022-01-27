<?php

function handleFileUpload(){

   //Pfad zum speicherort des bildes ist './bild/(bild name)'
   $path = './bilder/' . $_FILES['bild']['name'];
   //Dateiendung des bilder
   $ext = pathinfo($path, PATHINFO_EXTENSION);

   //erstelle Ordner für das Bild
   mkdir($path);
   //Speichere Bild mit original Dateiendung
   file_put_contents($path . '/bild.' . $ext, file_get_contents($_FILES['bild']['tmp_name']));
   //Textdatei um Besschreibung zu speichern
   file_put_contents($path . '/title.txt', $_POST['title']);
   //Textdatei um likes zu speichern
   file_put_contents($path . '/likes.txt', 0);
}

//Wenn das abgesendete Formular das Uploadformular ist
if(isset($_POST['form']) && $_POST['form'] == 'upload'){
   //Handle den Dateiupload
   handleFileUpload();
}

if(isset($_POST['action'])){
   if($_POST['action'] == 'load-gallery'){
      //Alle ordner duchrsuchen und pfade zu den bildern
      $dirs = scandir('./bilder');
      //Ordner '.' und '..' entfernen und neu indizieren
      $dirs = array_values(array_diff($dirs, array('..', '.')));

      $pictures = array();

      //for each directory, build an array that contains path, likes and title
      foreach ($dirs as $i => $d) {
         $pictures[$i] = array(
            'name' => $d,
            'title' => file_get_contents('./bilder/' . $d . '/title.txt'),
            'likes' => file_get_contents('./bilder/' . $d . '/likes.txt'),
         );
      }

      //Liste als JSON zurückgeben
      echo json_encode($pictures);
   } else if($_POST['action'] == 'like'){
      //Pfad zu den likes
      $path = './bilder/' . $_POST['picture'] . '/likes.txt';
      //Likes als Integer laden
      $current_likes = intval(file_get_contents($path));
      //Likes um 1 hochzählen
      $current_likes++;
      //Likes wieder speichern
      file_put_contents($path, $current_likes);
   }
}
?>
