const emailField = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const response = document.getElementById('response');


submitBtn.addEventListener('click', function() {
    const email = emailField.value;
    if(isValid(email)) {
        console.log("Valid email")
        response.innerHTML = "Valid email"
    }else{
        console.log("Invalid email")
        response.innerHTML ="Invalid email"
    }
})








function isValid(email) {
    
    // Check if there is exactly one "@" and "."  
    //we need to check here first after that extension
    const emailWithoutAd = email.replaceAll('@', '');
    const emailWithoutDot = email.replaceAll('.', '');
    const size = email.length;

    if (size - emailWithoutAd.length !== 1 || 
        size - emailWithoutDot.length !== 1
        ){
        return false;
    }

    // 'username@websitename.extension'
    // Check if extension has 2 or 3 letters
    usernameAndWebsitenameExtension = email.split("@");//['username','websitename.extension']
    username = usernameAndWebsitenameExtension[0];
    WebsitenameExtension = usernameAndWebsitenameExtension[1];
    extension = WebsitenameExtension.split(".")[1]; // ['websitename','extension']
    
    if (extension.length < 2 || extension.length > 3){
        return false;
    } else {
        return true;
    }
}




// console.log(isValid("sofia@gmail.com"));
// console.log(isValid("sofia@@gmail.com"));
// console.log(isValid("sofia@gmail..com"));
// console.log(isValid("sofia@gmailcom"));
// console.log(isValid("sofia@gmail.com"));
// console.log(isValid("sofia@gmail.co"));
// console.log(isValid("sofia@gmail.c"));
// console.log(isValid("sofia@gmail.comm"));