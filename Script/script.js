var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password-check');
var terms = document.getElementById('check');
var gender = document.getElementById('gender');

function showError(error,errorElement){
    let errorDiv = document.getElementById(errorElement);
    errorDiv.innerHTML = error;
    return false;
}
function validateInputs(){
    usernameValidate = username.value.trim();
    emailValidate = email.value.trim();
    passwordValidate = password.value.trim();
    password2Validate = password2.value.trim();
    genderValidate = gender.value.trim();
    var invalid = "Gender";
    if(usernameValidate == ""){
        showError('Username cant be blank','username-error');
        return false;
    } 
    if(emailValidate == ""){
        showError('Email cant be blank','email-error');
        return false;
    }else if(emailValidate.indexOf("@") == -1){
        showError('Email must contain "@"','email-error');
        return false;
    }else if(emailValidate.endsWith(".com") == false){
        showError('Email must ends with .com','email-error');
        return false;
    } 
    if(genderValidate == invalid){
        showError('You must choose your gender','gender-error');
        return false;
    }
    if(passwordValidate == ""){
        showError('Password cant be blank','password-error');
        return false;
    }else if(passwordValidate.toLowerCase() == "password"){
        showError('Password cant be password','password-error');
        return false;
    }else if(passwordValidate == "12345678"){
        showError('Password cant be 12345678','password-error');
        return false;
    }else if(passwordValidate == emailValidate){
        showError('Password cant be email','password-error');
        return false;
    }else if(passwordValidate == usernameValidate){
        showError('Password cant be username','password-error');
        return false;
    }
    else if(passwordValidate.length < 8){
        showError('Password must be at least 8 characters','password-error');
        return false;
    }else if(passwordValidate.length >= 20){
        showError('Password must be less than 20 characters','password-error');
        return false;
    }
    if(password2Validate == ""){
        showError('Password cant be blank','password2-error');
        return false;
    }else if(passwordValidate != password2Validate){
        showError('Password doesnt match','password2-error');
        return false;
    }
    if(!terms.checked){
        showError('You must agree to the terms','terms-error');
        return false;
    }
}