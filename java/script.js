
const signUp = document.getElementById("infoButton");  

signUp.onclick = function(){
  alert("Hello! I am an alert box!!");
  location.href='mailto:xyz@abc.com?subject=Me&body=Hello!' 
}


const menuBtn = document.querySelector('.menu-btn-container');
const menuList = document.querySelector('.menu-list');
const hype = document.querySelector('.hype');

let menuOpen = false;



menuBtn.addEventListener('click', ()=>{
 
  menuBtn.classList.toggle('open');
  menuList.classList.toggle('open');
 
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen=true;  
    
  } else{
    menuBtn.classList.remove('open');    
    menuOpen=false;
  }; 
});

window.addEventListener('load', () => {
      let scrollElement = document.querySelector('.scroll1');
      scrollElement.scrollLeft =  (scrollElement.scrollWidth - 
      scrollElement.clientWidth ) / 2;
    });

    window.addEventListener('load', () => {
      let scrollElement = document.querySelector('.scroll2');
      scrollElement.scrollLeft =  (scrollElement.scrollWidth - 
      scrollElement.clientWidth ) / 2;
    });

    window.addEventListener('load', () => {
      let scrollElement = document.querySelector('.scroll3');
      scrollElement.scrollLeft =  (scrollElement.scrollWidth - 
      scrollElement.clientWidth ) / 2;
    });
