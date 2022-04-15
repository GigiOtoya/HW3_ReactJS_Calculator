var value1, value2, Result, ResultA, ResultB, ResultMem, counter, rcode;

// In order to work with multi-digits number, value1 and value2 are defined in arrays
value1 = [];
value2 = [];
Result = 0;
ResultA = 0;
ResultB = 0;
ResultMem = 1;
rcode = 0;
counter = 0;

let textbox = document.getElementById("tb");

function displayValue(number){
    // Case when firt input in 
    if (counter % 2 == 0) {
    // append number.toString to vale1 array
    value1.push(number.toString());
    // concat input numbers to string
    let strNumber1 = value1.join("");
    return strNumber1;

    // Case when Second input in
    } else {
    // append number.toString to vale2 array
    value2.push(number.toString());
    // concat input numbers to string
    let strNumber2 = value2.join("");
    return strNumber2;
    }
}

function deleteNumber(){
    // Case when the first input value
    if (counter % 2 == 0) {
    value1.splice(-1, 1);
    let strNumber1 = value1.join("");
      if (strNumber1.length == 0 ) {
          return 0;
      } else {
          return strNumber1;
      }
    // Case when the second input value
    } else {
    value2.splice(-1, 1);
    let strNumber2 = value2.join("");
      if (strNumber2.length == 0) {
          return 0;
      } else {
          return strNumber2;
      }
    }
}

function AddNumbers(number1, number2){
    // Case when the first input value
    if (counter % 2 == 0) {
    ResultA = ResultA + Number(number1);
    // Case when the second input value
    } else { 
    ResultB = ResultB + Number(number2);
    }
    // Result = Result + inputValue
    Result = ResultA + ResultB;
    ResultMem = Result;

    textbox.value = Result;
    rcode = 1;
    counter++;
    
}

function SubNumbers(number1, number2) {
    // Case when the first input value
    if (counter % 2 == 0) {
    ResultA = ResultA + Number(number1);
    // Case when the second input value
    } else {
    ResultB = ResultB + (Number(number2) * -1);
    }
    // Result = Result - inputValue
    Result = ResultA + ResultB;
    ResultMem = Result;

    textbox.value = Result;
    rcode = 2;
    counter++;

}

function MultNumbers(number1, number2) {
    // Case when input value is empty i.e) input1 x input2 = result x input3
    let tempInput1 = Number(number1);
    if(number1.length == 0){
    tempInput1 = 1;
    }
    // Case when the first input value
    if (counter % 2 == 0) {
    ResultB = 1;
    ResultA = ResultMem // 1
    ResultA = ResultA * tempInput1;
    // Case when the second input value
    } else {
    ResultB = 1;
    ResultB = ResultB * Number(number2);
    }
    // Result = Result * inputValue
    Result = ResultA * ResultB;
    ResultMem = Result;

    textbox.value = Result;
    rcode = 3;
    counter++;
}

function DivNumbers(number1, number2) {
    // Case when input value is empty i.e) input1 x input2 = result x input3
    let tempInput1 = Number(number1);
    if (number1.length == 0) {
    tempInput1 = 1;
    }
    // Case when the first input value
    if (counter % 2 == 0) {
    ResultB = 1;
    ResultA = ResultMem // 1
    ResultA = ResultA * tempInput1;
    // Case when the second input value
    } else {
    ResultB = 1;
    ResultB = ResultB * Number(number2);
    console.log("Numer(number2): " + Number(number2));
    }
    // Result = Result / inputValue
    Result = ResultA / ResultB;
    ResultMem = Result;
    
    textbox.value = Result;
    rcode = 4;
    counter++;

}

function inputValue(bcode){
    // concat input numbers to string 
    let strNumber1 = value1.join("");
    let strNumber2 = value2.join("");

    switch (bcode) {
    case 1:
        textbox.value = displayValue(1);
        break;
    case 2:
        textbox.value = displayValue(2);
        break;
    case 3:
        textbox.value = displayValue(3);
        break;
    case 4:
        textbox.value = displayValue(4);
        break;
    case 5:
        textbox.value = displayValue(5);
        break;
    case 6:
        textbox.value = displayValue(6);
        break;
    case 7:
        textbox.value = displayValue(7);
        break;
    case 8:
        textbox.value = displayValue(8);
        break;
    case 9:
        textbox.value = displayValue(9);
        break;
    case 0:
        textbox.value = displayValue(0);
        break;
    case 55:
        // Plus
        textbox.value = Result;
        AddNumbers(strNumber1, strNumber2);
        // reset input array
        value1 = [];
        value2 = [];

        break;
    case 66:
        // Minus
        textbox.value = Result;
        SubNumbers(strNumber1, strNumber2);
        // reset input array
        value1 = [];
        value2 = [];

        break;
    case 77:
        // Multiply
        textbox.value = Result;
        MultNumbers(strNumber1, strNumber2);
        // reset input array
        value1 = [];
        value2 = [];

        break;
    case 88:
        // Divide
        textbox.value = Result;
        DivNumbers(strNumber1, strNumber2);
        // reset input number
        value1 = [];
        value2 = [];

        break;
    case 99:
        // dot
        textbox.value = 99;
        break;
    case 11:
        // delete
        textbox.value = deleteNumber();
        break;
    case 22:
        // Display Result
        displayResult(rcode)
        // reset input number
        value1 = [];
        value2 = [];

        break;
    case 33:
        // AC
        // Reset result/variables to 0
        value1 = [];
        value2 = [];
        Result = 0;
        ResultA = 0;
        ResultB = 0;
        ResultMem = 1;
        counter = 0;
        rcode = 0;
        ops = "";
        textbox.value = 0;
        break;
    }
}

function displayResult(rcode){
    // Second Input Value
    let strNumber2 = value2.join("");

    switch (rcode) {
    case 1:
        AddNumbers(Result, strNumber2);
        ResultA = 0;
        ResultB = 0;
        ResultA = ResultMem;
        break;

    case 2:
        SubNumbers(Result, strNumber2);
        ResultA = 0;
        ResultB = 0;
        ResultA = ResultMem;
        break;

    case 3:
        MultNumbers(Result, strNumber2);
        ResultA = 0;
        ResultB = 0;
        ResultA = ResultMem;

        break;
    case 4:
        DivNumbers(Result, strNumber2);
        ResultA = 0;
        ResultB = 0;
        ResultA = ResultMem;

        break;
    }
}
