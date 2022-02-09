// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioDescuento;
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioDescuento
// });