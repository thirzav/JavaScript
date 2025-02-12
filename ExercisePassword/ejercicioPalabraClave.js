// DO WHILE porque siempre lo preguntará una vez.
// los números dan falsos positivos en toUpperCase y toLowerCase, por eso comprobamos si isNaN

let mayus = 0;
let nums = 0;
let minus = 0;
// let long = 0;
let str2 = "";
let str = "";

do {
    mayus = 0;
    nums = 0;
    minus = 0;
    str2 = "";

    str = prompt("Introduce una palabra clave entre 8 y12 carácteres : ");

    if(str.length < 8 || str.length > 12) {
        str2 = str2 + "Palabra no apropiada, tiene que tener 8 y 12 carácteres.";
        alert(str2);
    } else {
        // long = 1;

        for(let i = 0; i < str.length; i++) {
            if ( 
                str.charAt(i) == str.charAt(i).toUpperCase() && 
                isNaN(str.charAt(i))
            ) {
                mayus = 1;
            }
        }

        for(let i = 0; i < str.length; i++) {
            if(
                str.charAt(i) == str.charAt(i).toLowerCase() &&
                isNaN(str.charAt(i))
            ) {
                minus = 1;
            }
        }

        for(let i = 0; i < str.length; i++) {
            // mejor usar 0-9, sino los carácteres dan falso positivo
            // !isNaN es lo mismo que decir isNaN == false
            if (!isNaN(str.charAt(i))) {
                nums = 1;
            }
        }

        if (mayus == 0) {
            str2 = str2 + "No incluye ninguna letra mayúscula. ";
        }

        if (minus == 0){
            str2 = str2 + "No incluye ninguna letra minúscula. ";
        }

        if (nums == 0){
            str2 = str2 + "No incluye ningún número. ";
        }

        if ( str2 != "") {
            alert(str2 + "Vuelve a intentarlo. ");
        } else {
            alert("Validación correcta");
        }


    }
} while (mayus == 0 || minus == 0 || nums == 0);

// se puede usar UTF-8 para hacer este tipo de comprobaciones, así comparar es más fácil