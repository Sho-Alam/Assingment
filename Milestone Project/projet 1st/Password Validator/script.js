function checkPassword(){
    let password = document.getElementById("newPass").value;
    let cnfpassword = document.getElementById("confirmPass").value;
    console.log(password, cnfpassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfpassword){
            message.textContent = "password matched"
            message.style.backgroundColor = "#fff"
            message.style.color = "green"
            message.style.fontSize = "16px"
            message.style.padding = "5px"
            message.style.borderRadius = "20px"

        }
        else{
            message.textContent = "password don't matched"
            message.style.backgroundColor = "#fff"
            message.style.color = "red"
            message.style.fontSize = "16px"
            message.style.padding = "5px"
            message.style.borderRadius = "10px"
        }
    }else{
        alert("password can't be empty!");
        message.textContent = "";
    }
}