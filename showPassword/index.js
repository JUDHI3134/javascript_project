let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.addEventListener('click',()=>{
    if(eyeicon.type == "password"){
        password.type = "text";
    }
})