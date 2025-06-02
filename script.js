const botaoQ1 = document.getElementById("botaoQ1");
botaoQ1.onclick =  function(){
    const q1Valor1 = document.getElementById("q1Valor1").value;
    const q1Valor2 = document.getElementById("q1Valor2").value;
    const q1Valor3 = document.getElementById("q1Valor3").value;
    const q1Valor4 = document.getElementById("q1Valor4").value;
    const q1Valor5 = document.getElementById("q1Valor5").value;
    
    let arrayNum = [];
    arrayNum.push(q1Valor1);
    arrayNum.push(q1Valor2);
    arrayNum.push(q1Valor3);
    arrayNum.push(q1Valor4);
    arrayNum.push(q1Valor5);
    let maior = arrayNum[0];
    let menor = arrayNum[0];

    function MAIOR_MENOR(){
        for (let i = 0; i < arrayNum.length; i++) {
            console.log(arrayNum[i]);
            console.log(maior);
            console.log(menor);
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
    MAIOR_MENOR();
};