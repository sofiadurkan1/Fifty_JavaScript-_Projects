const search  = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('mouseover', e =>{
    search.classList.add('active');
    input.focus();

});

input.addEventListener("keyup",function(event){
    if(event.code === 'Enter' ){
        navigateToGoogle();


    }

});


btn.addEventListener("click",function(event){
    navigateToGoogle();
   
})




function navigateToGoogle(){
    if(input.value !== ''){

        window.location="https://www.google.com/"
        input.value = ""


    }

}