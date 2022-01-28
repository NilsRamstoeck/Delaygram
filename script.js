//Eventlistener für html document, wird ausgeführt wenn alles HTML geladen ist
document.addEventListener('DOMContentLoaded', function(e) {
   const request = new XMLHttpRequest();
   //Methode: POST;Ort: delaygram.php
   request.open("POST", "./delaygram.php");

   //Header für url daten setzen
   request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

   //Handler der ausgeführt wird, nachdem die Anfrage erfolgreich war/fehlgeschlagen ist
   request.onload = function () {
      //Wenn erfolgreich, bilder aus liste laden
      if(this.status == 200){
         loadPictures(JSON.parse(this.response));
      }
   }

   request.send('action=load-gallery');
});


//Eventhandler für "onchange" der Bildauswahl. Wird aufgerufen wenn sich die
//ausgewählte Datei ändert
document.querySelector('input[type=file]').onchange = function(e){
   //Wähle span zum darstellen des Dateinamens aus und trage den Wert ein (warum das replace?)
   document.querySelector('#upload-form>span#datei-name').innerHTML = this.value.replace(/.*[\/\\]/, '')
};

//Andere methode Eventhandler zu registrieren
document.querySelector('#upload-form').addEventListener('submit', (e) => {
   //verhindert das die Seite automatisch neugeladen wird
   e.preventDefault();

   //Sammle daten vom Formular. Beide möglichkeiten funktionieren.
   //Wo ist der unterschied? Weshalb habe ich mich für e.target entschieden?
   // const formData = new FormData(document.querySelector('#upload-form'));
   const formData = new FormData(e.target);

   const request = new XMLHttpRequest();
   //Methode: POST;Ort: delaygram.php
   request.open("POST", "./delaygram.php");

   //Handler der ausgeführt wird, nachdem die Anfrage erfolgreich war/fehlgeschlagen ist
   request.onload = function () {
      //Wenn erfolgreich, seite neu laden
      if(this.status == 200){
         window.location.reload();
      }
   }

   //Formulardaten abschicken
   request.send(formData);
});


function loadPictures(pictures) {
   for(let i = 0; i < pictures.length; i++){
      //Bild endung extrahieren. split teilt den namen bei punk auf, pop gibt das letzte element zurück
      const ext = pictures[i]['name'].split('.').pop();
      const template = `
      <div class="bild-wrapper">
      <img src="./bilder/${pictures[i]['name']}/bild.${ext}" alt="" class="bild">
      <br>
      <span class="bild-beschriftung">"${pictures[i]['title']}"</span>
      <span class="likes-outer-wrapper">
      <span class="likes-inner-wrapper">
      <span class="herz" onclick="likePicture('${pictures[i]['name']}')">&#10084;</span>
      <span class="likes">${pictures[i]['likes']}</span>
      </span>
      </span>
      </div>`
      document.querySelector('.gallerie').innerHTML += template;
   }
}

function likePicture(picture) {
   const request = new XMLHttpRequest();
   //Methode: POST;Ort: delaygram.php
   request.open("POST", "./delaygram.php");

   //Header für url daten setzen
   request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

   //Handler der ausgeführt wird, nachdem die Anfrage erfolgreich war/fehlgeschlagen ist
   request.onload = function () {
      //Wenn erfolgreich, bilder aus liste laden
      if(this.status == 200){
         document.location.reload();
      }
   }

   request.send(`action=like&picture=${picture}`);
}
