console.log("page loading...")

function loading(){
    alert("Loading weather report...")
}



function hide(){
document.querySelector("footer").remove();
}

var number = document.querySelector(".number")

function color(){
    if(number < 20)
    
    number.color = "blue";
 else( number.color = "red");

 console.log(number);
 color(number);

}


var celcius = document.querySelectorAll(".number")
var Fahrenheit = celcius * 33.8;
function calculate(){
    
    var select = document.getElementById('language');
    var value = select.options[select.selectedIndex].value;

    if (selectValuevalue = 'c')
        changeToCelcius();
    
    else if (selectValue = 'f')
        changeToFarenheit();
     
    
}

