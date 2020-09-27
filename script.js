function calcTDEE() {
    var age = parseInt(document.getElementById("age").value, 10);
    var weight = parseInt(document.getElementById("weight").value, 10);
    var height = parseInt(document.getElementById("height").value, 10);
    var exercise = parseInt(document.getElementById("exercise").value, 10);
    if (isNaN(age) || isNaN(weight) || isNaN(height) ) {
        document.getElementById("result").innerHTML = "Please fill out every form"; 
    } else {
        weight = weight / 2.2;
        height = height * 2.54;

        var maleBmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        var femaleBmr = 65 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        if (document.getElementById("male").checked == true) {
            bmr = maleBmr;
        } else {
            bmr = femaleBmr;
        }
        var tdee;
        switch (exercise) {
            case 1:
                tdee = bmr * 1.2;
                break;
            case 2:
                tdee = bmr * 1.375;
                break;
            case 3:
                tdee = bmr * 1.55;
                break;
            case 4:
                tdee = bmr * 1.725;
                break;
            case 5:
                tdee = bmr * 1.9;
                break;
        }
        document.getElementById("result").innerHTML = "Your TDEE is: " + tdee.toFixed(0) + " calories"; 
        var count = localStorage.getItem("count");
        if (count == null) {
            count = 0;
        } else {
            count++;
        }
        localStorage.setItem("count", count);
        document.getElementById("count").innerHTML = "Times you have calculated your TDEE: " + count; 
    }
    return false;  
}
