const User = {
    _email : "chai@email.com",
    _password: "abc",


    get email(){
      return this._email.toUpperCase()
    },

    set email(val){
     this._email = value
    }
}

const tea = Object.create(User)

console.log(tea.email);

