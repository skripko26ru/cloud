import './js/scroll-page.js';
import './js/burger.js';
import './js/appearance.js';
import './assets/scss/main.scss';
import Router from './js/Router.js';

const router = new Router({
  mode: 'hash',
  root: '/'
});

// function goToPage() {
//   let url = document.getElementById('id_Элемента'); 
//   document.location.href = url.value;
// }

router
  .add(/company/, () => {
    alert('welcome in company page');    
    // let url = document.querySelector('#about'); 
    // console.log('WWW', url);   
  })
  .add(/project/, () => {
    alert('welcome in project page');
  })
  .add(/service/, () => {
    alert('welcome in service page');

  })
  .add(/contacts/, () => {
    alert('welcome in contacts page');
  })
  .add('', () => {
    console.log('welcome in catch all controller');
  });



