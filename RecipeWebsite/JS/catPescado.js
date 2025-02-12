window.onload = function () {

    // Alinear el h1

    let titulo = document.getElementById("pescado");
    titulo.style.textAlign = "center";

    // Este bucle sirve para crear divs conteniendo una imagen con el nombre de la receta y el tiempo de preparación de una categoria

    let categoria = document.getElementById("pescado").innerText;

    categoria = categoria.toLowerCase();

    console.log(categoria);

    let contenidoRecetas = document.getElementById("div_contenido_recetas");

    // Estilo contenedor principal

    contenidoRecetas.style.display = "grid";
    contenidoRecetas.style.gap = "20px";
    contenidoRecetas.style.gridTemplateColumns = "1fr 1fr 1fr";
    // contenidoRecetas.style.gridTemplateRows = "1fr 1fr";

    // Bucle para crear las fichas de las recetas

    for (let i = 0; i < recetas.length; i++) {
        if (!recetas[i][7].includes(categoria)) {
            console.log("no es " + categoria);
        } else {
            console.log(recetas[i][7]);
            contenidoRecetas.appendChild(document.createElement("div")).setAttribute("id", "div_ficha_receta" + i);
            contenidoRecetas.style.gap = "20px";

            // Crear el contenedor de cada receta

            let divReceta = document.getElementById("div_ficha_receta" + i);
            divReceta.style.textAlign = "center";
            divReceta.style.border = `1px solid ${colorRosaSuave}`;
            divReceta.style.borderRadius = "5px";

            // Crear y añadir la imagen
            let imagen = divReceta.appendChild(document.createElement("img"));

            imagen.setAttribute("id", "receta_destacada_img" + i);

            imagen.setAttribute("src", recetas[i][6]);
            imagen.style.width = "400px";
            imagen.style.height = "250px";

            // Crear y añadir texto
            let nombreReceta = divReceta.appendChild(document.createElement("h4"));
            nombreReceta.setAttribute("id", "nombreReceta" + i);

            nombreReceta.innerText = recetas[i][0];

            let tiempoReceta = divReceta.appendChild(document.createElement("h5"));
            tiempoReceta.setAttribute("id", "tiempoReceta" + i);

            tiempoReceta.innerText = recetas[i][1];

            // Crear y añadir descripción

            let descripcion = divReceta.appendChild(document.createElement("p"));
            descripcion.setAttribute("id", "descripcionReceta" + i);

            descripcion.innerText = recetas[i][5];



        }

    }




}