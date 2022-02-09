// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioDescuento;
}

function priceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioDescuento = calcularPrecioDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioDescuento;
}
