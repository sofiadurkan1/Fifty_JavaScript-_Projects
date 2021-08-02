const display = document.querySelector(".input")
const button = document.querySelector(".btn")
const copyBtn = document.querySelector(".far")
const copyActive = document.querySelector(".fas")
const copied =document.querySelector("span")


function generator() {
    let password = "";
    let character = "!@$%^&*-_+=:|~?/.;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (var i = 0; i < 8; i++)
      password += character.charAt(Math.floor(Math.random() * character.length));
    return password;
}
button.addEventListener("click", () =>{
display.value = generator();

copyBtn.style.display ='inline';
  
  copyActive.style.display ='none';

  copied.style.display = 'none';



})
//clipboard copy
function copyPassword() {
  display.select();
  document.execCommand("copy");  
}

copyBtn.addEventListener("click", () =>{
  copyBtn.style.display ='none';
  
  copyActive.style.display ='inline';
  copied.style.display = 'inline';

  copyPassword();
})