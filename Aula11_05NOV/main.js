
let qtde = 0

function fazAlgo() {
    qtde++
    console.log("qtde",qtde);
}

let elem = document.getElementById("contador")

setInterval(() => {
    qtde++
    elem.innerText = qtde
},1000)

//setTimeout(fazAlgo,3000)
//setTimeout(fazAlgo,4000)
//setTimeout(fazAlgo,5000)
console.log("terminei");
