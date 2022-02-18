// get the values from the page
//starts or controller function
function getValues(){
    //get values form the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //if decimals are entered the value is truncated to the integer value
    // ALWAYS VALIDATE INPUT parse into integers validation
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    //second step of validation
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
            //call generateNumbers
        let numbers = generateNumbers(startValue,endValue);
         //call displayNumbers
        displayNumbers(numbers);
    }
    else{
        alert("You must enter integers")
    }


}

//generate numbers from start value to end value
//logic function(s)
function generateNumbers(startValue, endValue){
    let numbers = [];
    //we want all numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
        //this will execute in a loop until index = endValue
        numbers.push(index)
    }

    return numbers;

}

//display the numbers and mark the even numbers bold
//display or view function
function displayNumbers(numbers){
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];
        //temperal literal
        if(number % 2 == 0){
            className = "even";

        }
        else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}