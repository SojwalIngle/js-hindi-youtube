class User {
    constructor(email , password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(em){
       this._email = em
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(val){
        this._password = val;
    }
}

const hitesh = new User("h@hitesh.ai" , "abc")
console.log(hitesh.password);
console.log(hitesh.email);