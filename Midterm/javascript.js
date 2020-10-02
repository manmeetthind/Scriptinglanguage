function CalculateVolume() {
    var radius =
    parseInt(document.getElementById('txtRadius').value); //String to Integer

    document.getElementById("Answer1").innerHTML =("The volume is "  + (4/3 * 3.14 * radius * radius * radius));

};


function ageRange() {
        var age1 =
        document.getElementById('age').value; 

        if (age1 > 1 && age1 < 19)
        document.getElementById("Answer2").innerHTML = ("You are not a major yet. ");
        else if (age1 > 20 && age1 < 45)
        document.getElementById("Answer2").innerHTML = ("You are major, but not senior yet.");
        else if (age1 > 46 && age1 < 90)
        document.getElementById("Answer2").innerHTML = ("You are senior, but not yet retired.")

    return false;
    
        };

function whileLoop(){
    var number1 = 0;
    var text = "";
    while (number1 < 25) {
     text = text + ("<br>Bonjour");
      number1++;
      
    }
    document.getElementById("Answer3").innerHTML = text;
    
}