
let button = document.querySelectorAll(".button");
let body = document.querySelector("body");


button.forEach( (btn) => {
    
    btn.addEventListener( 'click' , function(e) {
        if(btn.id == 'grey' ){
            body.style.backgroundColor = e.target.id;
        }
        if(btn.id == 'white' ){
            body.style.backgroundColor = e.target.id;
        }
        if(btn.id == 'blue' ){
            body.style.backgroundColor = e.target.id;
        }
        if(btn.id == 'yellow' ){
            body.style.backgroundColor = e.target.id;
        }

        if(btn.id == 'purple' ){
            body.style.backgroundColor = e.target.id;
        }
        
    })
})