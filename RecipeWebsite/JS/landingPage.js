window.onload = function () {

    // Este bucle sirve para crear 3 divs conteniendo una imagen con el nombre de la receta y el tiempo de preparación de forma aleatoria

    let comprobar = [];
    let randomIndex;

    let divContenidoDestacado = document.getElementById("div_contenido_destacados");

    divContenidoDestacado.style.display = "grid";
    divContenidoDestacado.style.gap = "20px";

    divContenidoDestacado.style.gridTemplateColumns = "1fr 1fr 1fr";


    for (let i = 0; i < 3; i++) {

        randomIndex = randomArrayNum();
        console.log(randomIndex);

        if (!comprobar.includes(randomIndex)) {

            divContenidoDestacado.appendChild(document.createElement("div")).setAttribute("id", "receta_destacada_" + i);
            divContenidoDestacado.style.gap = "20px";

            // Crear el contenedor para cada receta

            let divReceta = document.getElementById("receta_destacada_" + i);
            divReceta.style.textAlign = "center";
            divReceta.style.border = `1px solid ${colorRosaSuave}`;
            divReceta.style.borderRadius = "5px";

            // Crear y añadir la imagen
            let imagen = divReceta.appendChild(document.createElement("img"));

            imagen.setAttribute("id", "receta_destacada_img" + i);

            imagen.setAttribute("src", recetas[randomIndex][6]);
            imagen.style.width = "400px";
            imagen.style.height = "250px";

            // Crear y añadir texto
            let nombreReceta = divReceta.appendChild(document.createElement("h4"));
            nombreReceta.setAttribute("id", "nombreReceta" + i);

            nombreReceta.innerText = recetas[randomIndex][0];

            let tiempoReceta = divReceta.appendChild(document.createElement("h5"));
            tiempoReceta.setAttribute("id", "tiempoReceta" + i);

            tiempoReceta.innerText = recetas[randomIndex][1];

            // Crear y añadir descripción

            let descripcion = divReceta.appendChild(document.createElement("p"));
            descripcion.setAttribute("id", "descripcionReceta" + i);

            descripcion.innerText = recetas[randomIndex][5];

            comprobar.push(randomIndex);

        } else {
            randomIndex = randomArrayNum();
            i--;
        }

    }


    // parte artículo empresa

    let divArticulo = document.getElementById("div_articulo_empresa");

    divArticulo.style.display = "grid";
    divArticulo.style.gridTemplateColumns = "1fr 1fr";
    divArticulo.style.gap = "20px";
    divArticulo.style.border = "1px solid ${colorAzulSuave}";

    // Crear div izquiero y añadir imagen

    let divArticuloIzquierda = divArticulo.appendChild(document.createElement("div"));
    divArticuloIzquierda.setAttribute("id", "div_articulo_izquierda");

    let imgEmpresa = divArticuloIzquierda.appendChild(document.createElement("img"));
    imgEmpresa.setAttribute("id", "articulo_img_empresa");

    imgEmpresa.setAttribute("src", "../img/imgEmpresa/trabajando1.jpg");
    imgEmpresa.style.width = "750px";
    divArticuloIzquierda.style.display = "flex";
    divArticuloIzquierda.style.justifyContent = "flex-start";
    divArticuloIzquierda.style.alignItems = "center";

    // Crear div derecha y añadir info

    let divArticuloDerecha = divArticulo.appendChild(document.createElement("div"));
    divArticuloDerecha.setAttribute("id", "div_articulo_derecha");

    divArticuloDerecha.style.textAlign = "end";
    divArticuloDerecha.style.marginTop = "180px";

    let nomEmpresa = divArticuloDerecha.appendChild(document.createElement("h4"));
    nomEmpresa.innerText = "¡Bienvenidos a Catering 't Musje!";
    nomEmpresa.style.margin = "0px";

    let infoEmpresa = divArticuloDerecha.appendChild(document.createElement("p"));
    infoEmpresa.innerText = " En Catering 't Musje, transformamos tus eventos en experiencias inolvidables con nuestros servicios de catering personalizados. Ofrecemos una variedad de menús adaptados a tus necesidades y preferencias, desde eventos corporativos hasta celebraciones privadas. Nuestro equipo de chefs expertos utiliza ingredientes frescos y de alta calidad para crear platos deliciosos que encantarán a tus invitados. Deja que nos encarguemos de la comida, para que tú puedas disfrutar del evento. ¡Contáctanos hoy para planificar tu próximo evento con nosotros!";
    infoEmpresa.style.margin = "0px";


}


// La función sirve para dar un número random de la longitud del array

function randomArrayNum() {
    var rango = recetas.length;

    var numRandom = Math.floor(Math.random() * rango);

    return numRandom;
}