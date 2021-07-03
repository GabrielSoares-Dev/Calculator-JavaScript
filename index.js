
function inserir(num) {
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}

function limpar() {
    document.getElementById('display').innerHTML = '';
}

function back() {

    var display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length - 1)
}

function calculo() {
    var display = document.getElementById('display').innerHTML;
    if (display) {
        document.getElementById('display').innerHTML = eval(display);
    } else
    {
        document.getElementById('display').textContent = "Nada à calcular...";
    }
}