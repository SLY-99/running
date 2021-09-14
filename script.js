let elForm = document.getElementById("form");
let elInput = document.getElementById("input");
let elTittleYes = document.getElementById("yes")
let elTittleNo = document.getElementById("no")
let elCheckboxRain = document.getElementById("rain")
let elCheckboxGym = document.getElementById("gym")


elForm.addEventListener("keyup" , function(e){
    e.preventDefault();
    
    
    
    if(elInput.value >= 5 && elInput.value <= 30){
        elTittleYes.classList.add("yes");
    }else{
        elTittleYes.classList.remove("yes");
    }
    
    if (elCheckboxRain.checked && elInput.value < 30) {
        elTittleNo.classList.add("no");
    }else{
        elTittleNo.classList.remove("no");
    }
    
    if(elInput.value < 5 && elCheckboxGym.checked){
        elTittleNo.classList.add("no");
    }else{
        elTittleNo.classList.remove("no");
    }


    if(elInput.value >=5 && elInput.value <= 30 &&  elCheckboxRain.checked && elCheckboxGym.checked){
        elTittleYes.classList.add("yes");
    }else{
        elTittleYes.classList.remove("yes");
    }

})
