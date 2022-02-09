document.querySelector('.hamburger').addEventListener('click', (e) => {
   const el = document.querySelector('.navbar');
   if(!el.classList.contains('navbar-active')){
      el.classList.add('navbar-active');
   } else {
      el.classList.remove('navbar-active');
   }
})
