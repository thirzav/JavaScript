let frutas = [
    ["manzana", "0.5"],
    ["pera", "0.5"],
    ["fresa", "0.2"],
    ["frambuesa", "0.1"],
    ["melon", "3.0"]
]

var subtotal = 0;

function comprar() {

    for (i = 1; i <= 3; i++) {

        if (document.getElementById("select_cantidad" + i).value == 0) {
            console.log("No ha añadido ningún producto al carrito.");

        } else if (document.getElementById("select_cantidad" + i).value > 0) {

            var frutaCantidad = document.getElementById("select_cantidad" + i).value;
            var fruta = document.getElementById("selectMenu" + i).value;

            document.getElementById("ticket_producto" + (i)).innerText = fruta;
            document.getElementById("ticket_pu" + i).innerText = precio(fruta);
            document.getElementById("ticket_cantidad" + (i)).innerText = frutaCantidad;

            var subProductos =  suma(fruta, frutaCantidad);
            document.getElementById("ticket_subtotal" + (i)).innerText = subProductos;

            subtotal = subtotal + subProductos;

        }

    }
    
    document.getElementById("subtotal").innerText = subtotal;

}

function precio(fruta) {
    for (j = 0; j < frutas.length; j++) {
        if (fruta == frutas[j][0]) {

            return frutas[j][1];
        }
    }
}

function suma(fruta, frutaCantidad) {

    var sumaPU = 0;
    for (k = 0; k < frutas.length; k++) {
        if (fruta == frutas[k][0]) {

            let precioUnidad = frutas[k][1];

            precioUnidad = parseFloat(precioUnidad);


            frutaCantidad = parseFloat(frutaCantidad);

            sumaPU = (precioUnidad * frutaCantidad);


        }
    }
    return sumaPU;

}