document.querySelectorAll('p[source]').forEach(p => loadText(p));
// document.querySelectorAll('p[source]').forEach(p => asyncLoadText(p));

//Lädt einen text mit fetch und trägt diesen in ein element ein
function loadText(target = null) {
   const source = target.attributes['source'].value;
   fetch(source)
   .then(res => res.text())
   .then(text => target.innerHTML = text);
}

//Lädt einen text mit fetch und trägt diesen in ein element ein
function loadTextAlt(target = null) {
   const source = target.attributes['source'].value;
   fetch(source)
   .then(function (res) {
      return res.text();
   })
   .then(function (text) {
      target.innerHTML = text;
   });
}

//Gleiche function mit async await
async function asyncLoadText(target = null) {
   const source = target.attributes['source'].value;
   const response = await fetch(source);
   const text = await response.text();
   target.innerHTML = text;
}
