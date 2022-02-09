function hideToggle(id){
   const div = document.querySelector(id);

   if(!div.classList.contains('hidden')){
      div.classList.add('hidden');
   } else {
      div.classList.remove('hidden');
   }

}
