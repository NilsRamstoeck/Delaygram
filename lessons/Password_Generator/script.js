//Synchronisiere pwdlength mit input wert
document.querySelector('input').addEventListener('change', e => document.querySelector(
   `#${e.target.attributes['target'].value}`
).attributes[e.target.attributes['field'].value].value = e.target.value
);

//Erstelle Passwort mit länge pwdlength und zeige es in element mit id target an
document.querySelector('button').addEventListener('click', e => generatePassword(
   e.target.attributes['pwdlength'].value,
   e.target.attributes['target'].value,
));


//Gibt ein zufälliges passwort zurück. Kan dieses optional auch in einem element anzeigen
function generatePassword(length = 12, target = null) {

   var charset = 'abcdefghijklmnopqrstuvwxyz';
   charset += 'ABCDEFGHJKLMNPQRSTUVWXYZ';
   charset += '0123456789';
   var n = charset.length;
   var passwd = '';
   for (i=1; i <= length; i++) {
      var c = Math.floor(Math.random() * n);
      passwd += charset.charAt(c)
   }

   if(target != null){
      try{
         document.querySelector(`#${target}`).innerHTML = passwd;
      } catch(e){
         console.log('target not found', target, e);
      }
   }

   return passwd;
}
