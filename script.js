function calcTDEE() {
    var age = parseInt(document.getElementById("age").value, 10);
    var weight = parseInt(document.getElementById("weight").value, 10);
    var height = parseInt(document.getElementById("height").value, 10);

    weight = weight / 2.2;
    height = height * 2.54;

}