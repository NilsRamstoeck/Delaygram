//Diese Funktion wird direkt vom HTML aus aufgerufen
function btn2Pressed(target) {
   target.innerHTML = 'Wurde gedrückt!';
};

//So kann man das 'onclick' attribut über Javascript setzen.
document.querySelector('button[name=btn3]').onclick = function () {
   this.innerHTML = 'Das geht auch!';
};

//Man kann auch einen (oder mehr) Eventlistener registrieren.
document.querySelector('button[name=btn4]').addEventListener('click', function(e) {
   // 'e' ist das Event das getriggert wurde. Die Eigenschaft 'target' enthält
   // den Ursprung des Events, also unseren Knopf
   e.target.innerHTML = 'Ich komm vom Event!';
});
