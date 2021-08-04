const emailField = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const response = document.getElementById('response');


submitBtn.addEventListener('click', function() {
    const email = emailField.value;
    if(validateEmail(email)) {
        console.log("Valid email")
        response.innerHTML = "Valid email"
    }else{
        console.log("Invalid email")
        response.innerHTML ="Invalid email"
    }
})


//Enter key
emailField.addEventListener('keyup', function(event) {
    if(event.code === 'Enter'){
        event.preventDefault();
        document.getElementById("submit").click();
    }

})



function isValid(email) {
    
    // Check if there is exactly one "@" and "."  
    //we need to check here first after that extension
    const emailWithoutAd = email.replaceAll('@', '');  //baska bir karakter yazildiginda @isareti bulamazsa  aradaki fark 0 oluyor. bu da @isartei yok demek.. False
    const emailWithoutDot = email.replaceAll('.', ''); // bizim istedigimiz aradaki farkin kesinlikle 1 olmasi..bu durumda true dondurecek
    const size = email.length;

    if (size - emailWithoutAd.length !== 1 || 
        size - emailWithoutDot.length !== 1 ||
        email.includes(" ") 

    
        ){
        return false;
    }

    // 'username@websitename.extension'
    // Check if extension has 2 or 3 letters
    usernameAndWebsitenameExtension = email.split("@");//['username','websitename.extension']
    username = usernameAndWebsitenameExtension[0];
    WebsitenameExtension = usernameAndWebsitenameExtension[1].split(".");  // ['websitename','extension']
    websitename = WebsitenameExtension[0];
    extension = WebsitenameExtension[1];
    
    if (extension.length < 2 || extension.length > 3 ||
        username.length === 0 || username.length>50 ||
        websitename.length === 0 || websitename.length>50){
        return false;
    } else {
        return true;
    }
    
}


//REGEX

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



// console.log(isValid("sofia@gmail.com"));
// console.log(isValid("sofia@@gmail.com"));
// console.log(isValid("sofia@gmail..com"));
// console.log(isValid("sofia@gmailcom"));
// console.log(isValid("sofia@gmail.com"));
// console.log(isValid("sofia@gmail.co"));
// console.log(isValid("sofia@gmail.c"));
// console.log(isValid("sofia@gmail.comm"));