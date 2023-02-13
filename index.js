 let searchBtn = document.querySelector('#search-btn');
 let searchBar = document.querySelector('.search-bar-container');
 let formbtn = document.querySelector('#login-btn');
 let loginform = document.querySelector('.loginform');
 let formclose = document.querySelector('#form-close');

 window.onscroll =() =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
 }

 searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
 });

 formbtn.addEventListener('click', () =>{
    loginform.classList.add('active');
 });

 formclose .addEventListener('click', () =>{
    loginform.classList.remove('active');
 });
