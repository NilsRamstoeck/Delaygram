<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="./style.css">
   <title>File Host</title>
</head>
<body>
   <h1>File Host</h1>

   <?php
   if(isset($_FILES['file'])){
      //generate unique ID
      $id = '';
      do{
         $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
         for($i = 0; $i < 8; $i++){
            $id .= $alphabet[rand(0, strlen($alphabet)-1)];
         }
      }while(is_dir($id));

      //path to save file to
      $path = 'files/' . $id . '/';
      mkdir($path);
      file_put_contents($path . $_FILES['file']['name'], file_get_contents($_FILES['file']['tmp_name']));

      //get storage location URL
      $URLPath = substr($_SERVER['REQUEST_URI'], 0, strrpos($_SERVER['REQUEST_URI'], '/') + 1) . $path;
      $actual_link = "http://$_SERVER[HTTP_HOST]$URLPath/" . $_FILES['file']['name'];

      ?>
      <a href="<?php echo $actual_link; ?>">Download</a>
      <?php

   } else {
      ?>
      <form action="index.php" method="post" enctype=multipart/form-data >
         <input type="file" name="file" value="">
         <input type="submit" name="submit" value="Hochladen">
      </form>
      <?php
   }
   ?>

</body>
<script src="./script.js" charset="utf-8"></script>
</html>
