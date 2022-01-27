//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm²");
console.groupEnd();

//Código del tríangulo
console.group("Triangulos");
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del tríangulo miden: "
     + ladoTriangulo 
     + "cm, " 
     + ladoTriangulo2
     + "cm y "
     + baseTriangulo 
     + "cm"
);
console.log("Y la altura del tríangulo es de: " +alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del tríangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo mide: " + areaTriangulo + "cm²");
console.groupEnd();

//Código del círculo
console.group("Círculos");
const radio = 4;
console.log("El radio del circulo mide: " + radio + "cm");

const diametro = radio * 2;
console.log("El díametro del círculo mide: " + diametro + "cm");

const PI = Math.PI;

const perimetroCirculo = diametro * PI;
console.log("El perímetro del círculo mide: " + perimetroCirculo + "cm");

const areaCirculo = (radio * radio) * PI;
console.log("El área del círculo mide: " + areaCirculo + "cm²");
console.groupEnd();