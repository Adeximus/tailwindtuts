const burger = document.querySelector('#burger');
const navBar = document.querySelector('#navBar');
burger.addEventListener('click', () => {
  if (navBar.classList.contains('hidden')) {
   navBar.classList.remove('hidden')
  }else{
    navBar.classList.add('hidden')
  }
});