#Project related to dom

##project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

##Project one

Solution 1
```
  
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
```


##Project Two

Solution 2
```

const form = document.querySelector("form");
const results = document.querySelector("#results")

form.addEventListener( 'submit' , (e) => {
    e.preventDefault();

    const height =  parseInt(document.querySelector('#height').value)
    const weight =  parseInt(document.querySelector('#weight').value)

    if(weight === ' ' || height < 0 || isNaN(height) ){
        results.innerHTML = `please give a valid height: ${height}`
    }
    
    if(weight === ' ' || weight < 0 || isNaN(weight) ){
        results.innerHTML = `please give a valid weight: ${weight}`
    }

    let bmiCal =  (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>Your bmi is: ${bmiCal}</span>`; 



} )

```

##Project three

Solution 3
```
const clock = document.querySelector('#clock');


  
console.log("hi");

setInterval( () => {
    let date  = new Date();
   clock.innerHTML =  date.toLocaleTimeString();
}, 1000)



```