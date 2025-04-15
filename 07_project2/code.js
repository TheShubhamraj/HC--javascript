const form = document.querySelector('form')


form.addEventListener('submit',function(e){
    e.preventDefault();

    // preventing the browser from doing usual work or submitting 
    
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results =document.querySelector('#results')


    if(height =='' || height < 0|| weight =='' || weight <= 0 || isNaN(height)){
        results.innerHTML  = "Please give a valid weight or height";
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;


    if (bmi < 18.6) {
        results.innerHTML = `you are undernourished`
    }

else if ( bmi <= 24.9|| bmi >= 18.6) {
        results.innerHTML = `you are fit congrats`
    }
    else {
        results.innerHTML = `do some work on your body overweight`
    }
    }
})



// project 2 done successfully 
