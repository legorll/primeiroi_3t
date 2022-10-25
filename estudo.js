function moeda(atual){
       return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function total(){
    let val = document.getElementById("valor").value;
    let ju = document.getElementById("juros").value;
    
    let t = document.getElementById("meses").value;
    let resultado = 0;
    for(let m = 1; m <= t; m++){
        resultado = (val * ((ju/100)+1));
        val = resultado;
        document.write("Mês " + m + " valor de " + moeda(val) + "<br>");
    }
    document.write("O total é de: " + moeda(resultado));
}
