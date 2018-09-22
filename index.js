function convertTemp(degree) {  
    if (degree == "C") {   
         F = document.getElementById("c").value * 9 / 5 + 32; 
            document.getElementById("f").value = Math.round(F);
    }
}
