//Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;


function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 
areaCuadrado();

console.groupEnd();

//Código del tríangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}


function areaTriangulo(base,altura){
    return (base* altura) / 2;
}

console.groupEnd();

//Código del círculo
console.group("Círculos");

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//HTML

function calcularPCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
} 

function calcularACuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}