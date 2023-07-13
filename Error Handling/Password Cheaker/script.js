
class User{
    constructor(username, password){
        this.username = username
        this._password = password
    }

    get password(){
        return this._password.replace(/./g, "*")
    }

    set password(newPassword){
        if(newPassword.length >= 8 && /[0-9]/.test(newPassword)&& /[A-Z]/.test(newPassword)){
            this._password = newPassword
        }else{
            console.log("Error; Password must be atleast 8 charactors long and contaning number and uppercase letter");
        }
    }
}

const user = new User("Atir","Password123")
console.log(user.password);

user.password = "Pass"  
user.password = "Password"
user.password = "password123"