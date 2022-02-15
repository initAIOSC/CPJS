function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }, 0);

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200, 
    400,
    10000,
]

const   mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];

    const promedioElementos = calcularMediaAritmetica(elemento1,elemento2);

    mediana = promedioElementos;
} else {
    mediana = lista1[mitadLista1];
}