function createElement(element) {
    return document.createElement(element);
}
  
function append(element) {
    return document.body.append(element);
}
  
function appendChild(element, child) {
    return element.appendChild(child);
}
  
function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
}


//calculator body

let container = createElement('div')
setAttribute(container,'class','container container-sm" container-md container-lg container-xl')

let calculator= createElement('div')
setAttribute(calculator,'class','calculator')
appendChild(container,calculator)

let result =createElement('div')
setAttribute(result,'class','output')
result.innerHTML='<span class="badge" id="result-box">0</span>'
appendChild(calculator,result)



let dis_output =createElement('div')
setAttribute(dis_output,'class','output')
dis_output.innerHTML = '<input type="text" name="" class="form-control width input-text" id="input-box">';
appendChild(calculator,dis_output)

let keyboard =createElement('div')
setAttribute(keyboard,'class','keyboard')
appendChild(calculator,keyboard)

let row1 = createElement('div')
row1.innerHTML=`<button class="operator" id="clear">C</button> 
<button class="operator" id="btn-mplus">M+</button> 
<button class="operator" id="btn-mminus">M-</button> 
<button class="operator" id="/">&#247;</button>`
appendChild(keyboard,row1)
9945806466

let row2 = createElement('div')
row2.innerHTML=`<button class="number" id="button7">7</button> 
<button class="number" id="button8">8</button> 
<button class="number" id="button9">9</button> 
<button class="operator" id="*">&times;</button>`
appendChild(keyboard,row2)

let row3 = createElement('div')
row3.innerHTML=`<button class="number" id="button4">4</button>
<button class="number" id="button5">5</button>
<button class="number" id="button6">6</button>
<button class="operator" id="-">-</button>`
appendChild(keyboard,row3)

let row4 = createElement('div')
row4.innerHTML=`<button class="number" id="button1">1</button> 
<button class="number" id="button2">2</button> 
<button class="number" id="button3">3</button> 
<button class="operator" id="+">+</button>`
appendChild(keyboard,row4)

let row5 = createElement('div')
row5.innerHTML=`<button class="operator" id="button_deci">.</button> 
<button class="number" id="button0">0</button> 
<button class="operator" id="%">%</button> 
<button class="operator btn" id="button_eq">=</button>`
appendChild(keyboard,row5)

append(container)



let inputValue = document.getElementById("input-box");
let displayVal = '';
let outputResulth = document.getElementById('result-box');

document.querySelector("#clear").addEventListener("click", function () {
    reset();
});

function reset(){
    displayVal = '';
    inputValue.value = '';
    outputResulth.innerText = 0;
}

inputValue.addEventListener('keypress', function(event){
    console.log(event.keyCode);
    if(event.keyCode <47  || event.keyCode >58){
        alert('Only numbers are allowed');
        event.preventDefault();
        console.log(keyboardEevent);
        return false;
    }
});


function convertResult(val){

    if(val.charCodeAt(0) >47 && val.charCodeAt(0) <57){
        displayVal = val;
        result = parseFloat(val);
    }
}

document.querySelector('#button1').addEventListener("click", function () {
    inputValue.value += "1";
    convertResult(inputValue.value);
});

document.querySelector("#button2").addEventListener("click", function () {
    inputValue.value += "2";
    convertResult(inputValue.value);
});
document.querySelector("#button3").addEventListener("click", function () {
    inputValue.value += "3";
    convertResult(inputValue.value);
});

document.querySelector("#button4").addEventListener("click", function () {
    inputValue.value += "4";
    convertResult(inputValue.value);
});

document.querySelector("#button5").addEventListener("click", function () {
    inputValue.value += "5";
    convertResult(inputValue.value);
});

document.querySelector("#button6").addEventListener("click", function () {
    inputValue.value += "6";
    convertResult(inputValue.value);
});

document.querySelector("#button7").addEventListener("click", function () {
    inputValue.value += "7";
    convertResult(inputValue.value);
});

document.querySelector("#button8").addEventListener("click", function () {
    inputValue.value += "8";
    convertResult(inputValue.value);
});

document.querySelector("#button9").addEventListener("click", function () {
    inputValue.value += "9";
    convertResult(inputValue.value);
});

document.querySelector("#button0").addEventListener("click", function () {
    inputValue.value += "0";
    convertResult(inputValue.value);
});

document.querySelector("#button_deci").addEventListener("click", function () {
    inputValue.value += ".";
    convertResult(inputValue.value);
});

let operationbutton = document.querySelectorAll(".operator");

    operationbutton.forEach(function(ele){
        ele.addEventListener("click", function () {
            switch(ele.id) {
                case '+':
                    inputValue.value += ' + ';
                break;
                case '-':
                    inputValue.value += ' - ';
                break;
                case '/':
                    inputValue.value += ' / ';
                break;
                case '*':
                    inputValue.value += ' * ';
                break;
                case '%':
                    inputValue.value += ' % ';
                break;
            }
        });
    });

document.querySelector("#button_eq").addEventListener("click", function () {
    let operationArray = inputValue.value.split(' ');
    console.log(operationArray);
    let sum = parseFloat(operationArray[0]);
    console.log(sum);
    
    for(let i=1; i<operationArray.length; i++){
        
        switch(operationArray[i-1]) {
            case '+':
                sum = sum + parseFloat(operationArray[i]);
                console.log(operationArray[i])
              break;
            case '-':
                sum = sum - parseFloat(operationArray[i]);
              break;
            case '/':
                sum = sum / parseFloat(operationArray[i]);
              break;
            case '*':
                sum = sum * parseFloat(operationArray[i]);
              break;
            case '%':
                sum = (sum /100) * parseFloat(operationArray[i]);
                break;
            default:

          }
        

    }
    console.log(sum);
    outputResulth.innerText = sum;
    inputValue.value = '';
    Localstorage(sum);
});

function Localstorage(val){
    sessionStorage.setItem('sum', val);
}

document.querySelector("#btn-mplus").addEventListener("click", function () {
    inputValue.value += `${sessionStorage.getItem('sum')} + `;
});


document.querySelector("#btn-mminus").addEventListener("click", function () {
    inputValue.value += `${sessionStorage.getItem('sum')} - `;
});

























