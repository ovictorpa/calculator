function insert(n){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + n;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var backspace =  document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = backspace.substring(0, backspace.length-1);
}

function operation(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) document.getElementById('resultado').innerHTML = eval(resultado);
    else document.getElementById('resultado').innerHTML = "Nada..."
            
}
