// Sé que no es funcional, pero no me ha dado tiempo para poder acabarlo. 
// Mi idea es comprobar cada elemento y que salgan los mensajes de error debajo de las cajas.
// Como puedes ver el del nombre funciona, solo me falta que desaparezca una vez vuelves a escribir en la caja.

let nom;
let email;
let asunto;
let mensaje;

let datos = [nom, email, asunto, mensaje];
let nomComp = false;
let emailComp = false;
let asuntoComp = false;

function enviarFormulario() {

    nom = document.getElementById("nom").value;
    comprobarNom(nom);

    email = document.getElementById("email").value;
    comprobarEmail(email);

    asunto = document.getElementById("asunto").value;
    comprobarAsunto(asunto);

    mensaje = document.getElementById("mensaje").value;
    mensajeComp = true;

    if (nomComp && emailComp && asuntoComp && mensajeComp) {
        datos.push(nom, email, asunto, mensaje);
        console.log(datos);
    }

}


function comprobarNom(nom) {

    if (nom >= 0 && nom <= 9) {
        console.log("Tienen que ser letras");
        document.getElementById("nomIncorrecto").innerText = "Tienen que ser letras";
        nomComp = false;
    } else if (nom == ""){
        document.getElementById("nomIncorrecto").innerText = "No puede estar vacío";
        nomComp = false;
    } else {
        console.log("Su nombre es : " + nom);
        nomComp = true;
    }

}

function comprobarEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email == regex) {
        console.log("email correcto");
        emailComp = true;
    } else {
        console.log("Su email es : " + email);
        document.getElementById("emailIncorrecto").innerText = "Tiene que ser formato email.";
        emailComp = false;
    }

}

function comprobarAsunto(asunto) {

    if (asunto == ""){
        document.getElementById("asuntoIncorrecto").innerText = "No puede estar vacío";
        asuntoComp = false;
    } else {
        console.log("El asunto es : " + asunto);
        asuntoComp = true;
    }


}
