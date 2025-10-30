
//console.log("oi gente scfsfsf");

function cifrarAtbash(texto) {
    let maiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let minuscula = "abcdefghijklmnopqrstuvwxyz"
    let saida = ""
    for (let i = 0; i < texto.length; i++) {
        let letterIn = texto[i]
        //console.log("letterIn",letterIn);
        let letterOut = " "
        if (letterIn != " ") {
            let pos = maiusculo.search(letterIn)
            if(pos != -1) {
                letterOut = maiusculo[25 - pos]
            } else {
                pos = minuscula.search(letterIn)
                letterOut = minuscula[25 - pos]
            }
        }
        //console.log("letterOut",letterOut);
        saida = saida + letterOut
    }
    //console.log("saida",saida);
    return saida
}

let cifrado = cifrarAtbash("ALFACE cenoura")
console.log("cifrado", cifrado);
let decifrado = cifrarAtbash(cifrado)
console.log("decifrado", decifrado);

function cifrarAtbash2(texto) {
    let saida = ""
    for (let i = 0; i < texto.length; i++) {
        let letterIn = texto[i]
        let letterOut = " "
        if (letterIn != " ") {
            if(letterIn.charCodeAt(0) <= 90) {
                let codigo = 90 - (letterIn.charCodeAt(0)-65) 
                letterOut = String.fromCharCode(codigo)
            } else {
                let codigo = 122 - (letterIn.charCodeAt(0)-97) 
                letterOut = String.fromCharCode(codigo)
            }
            //console.log("codigo",codigo);
        }
        //console.log("letterOut",letterOut);
        saida = saida + letterOut
    }
    //console.log("saida",saida);
    return saida
}

let cifrado2 = cifrarAtbash2("ALFACE alface")
console.log("cifrado2", cifrado2);
let decifrado2 = cifrarAtbash2(cifrado2)
console.log("decifrado", decifrado2);


function gerarChavesRSA_Didaticas(p, q) {
    if (p <= 1 || q <= 1) return null; 
    
    const N = p * q;
    const phi_N = (p - 1) * (q - 1);
    
    let E = 3;
    while (E < phi_N) {
        // Encontrar o primeiro E que é coprimo de phi_N
        if ((phi_N % E !== 0) && ((p - 1) % E !== 0) && ((q - 1) % E !== 0)) {
             // Otimização: A verificação (p-1)%E e (q-1)%E não é rigorosamente a do RSA, 
             // mas é didática e evita fatores óbvios para primos pequenos.
            break;
        }
        E++;
    }

    let D = 1;
    while (D < phi_N) {
        // Encontrar D tal que (D * E) % phi_N === 1
        if ((D * E) % phi_N === 1) {
            break;
        }
        D++;
    }
    
    return {
        publica: { E, N }, // Use E e N para CIFRAR
        privada: { D, N }  // Use D e N para DECIFRAR
    };
}

let chaves = gerarChavesRSA_Didaticas(13,17) 
console.log(chaves);
