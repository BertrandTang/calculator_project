function calculate () {

    var expression = document.calculator.display.value.trim(); 

    if (expression === "") {
        document.calculator.display.value = "Y a rien :(";
        return; 
    }

    if (expression === "CACA") {
        document.calculator.display.value = "💩💩💩";
        return;
    }
        document.calculator.display.value = eval(document.calculator.display.value);
}