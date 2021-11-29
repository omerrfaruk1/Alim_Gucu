let container = document.querySelector(".container");
let greenDiv = document.getElementById("greenDiv");
var currentValue = -1;
let Interval;
let percent;

setInterval(increaseTheCurrentValue,2000)

function increaseTheCurrentValue(){
    currentValue++;
    if(currentValue >= asgariucret.length){
        currentValue = 0;
    }
    showInfos()
}
function showInfos(){
    var MinimumWageRetunTheDollar = asgariucret[currentValue].MinimumWage/asgariucret[currentValue].dollar;
    percent = ((MinimumWageRetunTheDollar / asgariucret[currentValue].MinimumWage) * 100).toFixed(2)
    container.innerHTML =  `
        <p>YIL: ${asgariucret[currentValue].year}</p>
        <p>ASGARİ ÜCRET: ${asgariucret[currentValue].MinimumWage}</p>   
        <p>DOLAR: ${asgariucret[currentValue].dollar}</p>
        <p>DOLAR KARŞILIĞI: ${MinimumWageRetunTheDollar.toFixed(2)}</p>
        <p class="p-bt">%${percent}</p>
        `
    styles()
}
function styles(){
    greenDiv.style.width = `${percent}%`
}

// function getValueOfMinimumWage() {
//     asgariucret.find(findValueOfMinimumWage)
// }

// function findValueOfMinimumWage(){
//     var dataYear = asgariucret[currentValue].year;
//     var dataMinimumWage = asgariucret[currentValue].MinimumWage;
//     var dataDollar = asgariucret[currentValue].dollar;
//     console.log(dataYear)
//     // var p = document.createElement("p")
//     // container.appendChild(p);
//     // p.innerHTML = dataYear + " " + dataMinimumWage + " " + dataDollar;
// }

// console.log(asgariucret.length)
