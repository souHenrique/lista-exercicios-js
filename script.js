const botaoQ1 = document.getElementById("botaoQ1");
const botaoQ2 = document.getElementById("botaoQ2");
const botaoQ3 = document.getElementById("botaoQ3");
const botaoQ4 = document.getElementById("botaoQ4");

botaoQ1.onclick = function(){
    const q1Valor1 = document.getElementById("q1Valor1").value;
    const q1Valor2 = document.getElementById("q1Valor2").value;
    const q1Valor3 = document.getElementById("q1Valor3").value;
    const q1Valor4 = document.getElementById("q1Valor4").value;
    const q1Valor5 = document.getElementById("q1Valor5").value;

    MAIOR_MENOR(q1Valor1, q1Valor2, q1Valor3, q1Valor4, q1Valor5);
};
function MAIOR_MENOR(a, b, c, d, e){
    let arrayNum = [a, b, c, d, e];
    let maior = arrayNum[0];
    let menor = arrayNum[0];
    for (let i = 0; i < arrayNum.length; i++) {
        if(Number(arrayNum[i]) > Number(maior)){
            maior = Number(arrayNum[i]);
        }
        if(Number(arrayNum[i]) < Number(menor)){
            menor = Number(arrayNum[i]);
        }
    };
    document.getElementById("resultadoMaiorQ1").textContent = `O maior número é: ${maior}`;
    document.getElementById("resultadoMenorQ1").textContent = `O menor número é: ${menor}`;
}

botaoQ2.onclick = function(){
    const q2Valor = document.getElementById("q2Valor").value;

    VOGAL(q2Valor);
}
function VOGAL(c){
    let arrayVogais = ["a", "e", "i", "o", "u"];
    if (arrayVogais.includes(c.toLowerCase())){
        document.getElementById("resultadoQ2").textContent = `O valor '${c}' é uma vogal.`
    }
    else{
        document.getElementById("resultadoQ2").textContent = `O valor '${c}' NÃO é uma vogal.`
    }
}

botaoQ3.onclick = function(){
    const q3Valor1 = document.getElementById("q3Valor1").value;
    const q3Valor2 = document.getElementById("q3Valor2").value;

    LIMITES(q3Valor1, q3Valor2);
}
function LIMITES(li, ls){
    let somaPares = 0;
    let arrayPares = [];
    for (let i = Number(li); i <= Number(ls); i++){
        if (i % 2 == 0){
            arrayPares.push(Number(i));
            somaPares += Number(i);
        }
    }
    document.getElementById("resultadoNumerosQ3").textContent = `${arrayPares}`;
    document.getElementById("resultadoSomaQ3").textContent = `A soma dos valores é ${somaPares}`;
}

botaoQ4.onclick = function(){
    const q4Valor1 = Number(document.getElementById("q4Valor1").value);
    const q4Valor2 = Number(document.getElementById("q4Valor2").value);
    const q4Valor3 = Number(document.getElementById("q4Valor3").value);

    ORDEM(q4Valor1, q4Valor2, q4Valor3);
}
function ORDEM(a, b, c){
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)){
        document.getElementById("resultadoQ4").textContent = "Por favor, digite apenas números inteiros.";
    }
    else{
        let arrayOrdenado = [a, b, c];
        arrayOrdenado.sort(function(a, b){
            return a - b;
        });
        document.getElementById("resultadoQ4").textContent = `${arrayOrdenado}`;
    }
}