const colorRosaSuave = "#a67d84"; // Rosa suave
const colorAzulSuave = "#ADD8E6"; // Azul suave

const recetas = [
    // Categoría: pasta
    [
        "Spaghetti Carbonara",
        "30 minutos",
        [
            "Spaghetti",
            "Tocino",
            "Huevos",
            "Queso parmesano",
            "Pimienta negra"
        ],
        "2",
        "Un plato italiano clásico, cremoso y con un toque de pimienta.",
        "Cocina el spaghetti en agua con sal. Fríe el tocino hasta que esté crujiente. Bate los huevos y mézclalos con queso parmesano. Añade el spaghetti caliente al tocino, retira del fuego y mezcla con los huevos. Sirve con pimienta negra recién molida.",
        "../img/imgRecetas/pasta/pastaCarbonara.jpg",
        "pasta"
    ],
    [
        "Penne Arrabbiata",
        "25 minutos",
        [
            "Penne",
            "Tomates",
            "Ajo",
            "Guindilla",
            "Perejil",
            "Aceite de oliva"
        ],
        "4",
        "Una pasta picante con salsa de tomate y guindilla.",
        "Cocina el penne. En una sartén, sofríe ajo y guindilla en aceite de oliva. Añade los tomates y cocina hasta que se reduzca. Mezcla con el penne y espolvorea con perejil.",
        "../img/imgRecetas/pasta/penneArrabbiata.jpg",
        "pasta"
    ],
    [
        "Fettuccine Alfredo",
        "20 minutos",
        [
            "Fettuccine",
            "Mantequilla",
            "Crema de leche",
            "Queso parmesano",
            "Nuez moscada"
        ],
        "4",
        "Pasta cremosa con una salsa rica y suave.",
        "Cocina el fettuccine. En una sartén, derrite la mantequilla, añade la crema y queso parmesano. Cocina hasta que espese. Mezcla con el fettuccine y espolvorea con nuez moscada.",
        "../img/imgRecetas/pasta/fettuccineAlfredo.jpg",
        "pasta"
    ],
    [
        "Lasaña",
        "1 hora 15 minutos",
        [
            "Láminas de lasaña",
            "Carne molida",
            "Salsa de tomate",
            "Queso ricotta",
            "Queso mozzarella",
            "Queso parmesano"
        ],
        "6",
        "Lasaña casera con capas de carne y quesos.",
        "Cocina la carne y mézclala con salsa de tomate. En una fuente para horno, coloca capas de lasaña, carne, ricotta, mozzarella y parmesano. Hornea a 180°C durante 45 minutos.",
        "../img/imgRecetas/pasta/lasana.webp",
        "pasta"
    ],
    [
        "Macarrones con Queso",
        "30 minutos",
        [
            "Macarrones",
            "Queso cheddar",
            "Leche",
            "Mantequilla",
            "Harina"
        ],
        "4",
        "Macarrones cremosos con una salsa de queso cheddar.",
        "Cocina los macarrones. En una sartén, derrite la mantequilla, añade harina y cocina. Agrega leche y queso cheddar hasta obtener una salsa suave. Mezcla con los macarrones.",
        "../img/imgRecetas/pasta/macarronesQueso.jpg",
        "pasta"
    ],
    [
        "Raviolis de Espinacas y Ricotta",
        "40 minutos",
        [
            "Raviolis",
            "Espinacas",
            "Queso ricotta",
            "Salsa de tomate",
            "Parmesano"
        ],
        "4",
        "Raviolis rellenos de espinacas y ricotta con salsa de tomate.",
        "Cocina los raviolis. En una sartén, calienta la salsa de tomate. Sirve los raviolis con la salsa y espolvorea con parmesano.",
        "../img/imgRecetas/pasta/raviolisEspinacas.webp",
        "pasta"
    ],

    // Categoría: pizza
    [
        "Pizza Margherita",
        "1 hora",
        [
            "Masa para pizza",
            "Tomates",
            "Mozzarella",
            "Albahaca",
            "Aceite de oliva"
        ],
        "4",
        "Una pizza sencilla pero deliciosa, con salsa de tomate fresca y mozzarella.",
        "Extiende la masa para pizza, añade salsa de tomate, mozzarella y albahaca. Hornea a 220°C durante 15-20 minutos. Añade un chorrito de aceite de oliva al final.",
        "../img/imgRecetas/pizza/pizzaMargarita.jpg",
        "pizza"
    ],
    [
        "Pizza Pepperoni",
        "1 hora",
        [
            "Masa para pizza",
            "Salsa de tomate",
            "Mozzarella",
            "Pepperoni"
        ],
        "4",
        "Pizza con salsa de tomate, mozzarella y rodajas de pepperoni.",
        "Extiende la masa, añade salsa de tomate, mozzarella y pepperoni. Hornea a 220°C durante 15-20 minutos.",
        "../img/imgRecetas/pizza/pizzaPepperoni.jpg",
        "pizza"
    ],
    [
        "Pizza Cuatro Quesos",
        "1 hora",
        [
            "Masa para pizza",
            "Salsa de tomate",
            "Mozzarella",
            "Queso azul",
            "Queso ricotta",
            "Queso parmesano"
        ],
        "4",
        "Una pizza con una mezcla de cuatro tipos de queso.",
        "Extiende la masa, añade salsa de tomate y mezcla de quesos. Hornea a 220°C durante 15-20 minutos.",
        "../img/imgRecetas/pizza/pizzaCuatroQuesos.jpg",
        "pizza"
    ],
    [
        "Pizza Hawaiana",
        "1 hora",
        [
            "Masa para pizza",
            "Salsa de tomate",
            "Mozzarella",
            "Jamón",
            "Piña"
        ],
        "4",
        "Pizza con una combinación de jamón y piña.",
        "Extiende la masa, añade salsa de tomate, mozzarella, jamón y piña. Hornea a 220°C durante 15-20 minutos.",
        "../img/imgRecetas/pizza/pizzaHawaiana.jpg",
        "pizza"
    ],
    [
        "Pizza Vegetariana",
        "1 hora",
        [
            "Masa para pizza",
            "Salsa de tomate",
            "Mozzarella",
            "Pimientos",
            "Champiñones",
            "Cebolla",
            "Aceitunas"
        ],
        "4",
        "Pizza con una variedad de vegetales frescos.",
        "Extiende la masa, añade salsa de tomate, mozzarella y vegetales. Hornea a 220°C durante 15-20 minutos.",
        "../img/imgRecetas/pizza/pizzaVegetariana.jpg",
        "pizza"
    ],
    [
        "Pizza BBQ",
        "1 hora",
        [
            "Masa para pizza",
            "Salsa barbacoa",
            "Mozzarella",
            "Pollo a la parrilla",
            "Cebolla roja"
        ],
        "4",
        "Pizza con salsa barbacoa, pollo y cebolla roja.",
        "Extiende la masa, añade salsa barbacoa, mozzarella, pollo y cebolla. Hornea a 220°C durante 15-20 minutos.",
        "../img/imgRecetas/pizza/pizzaBBQ.jpg",
        "pizza"
    ],

    // Categoría: carne
    [
        "Enchiladas Verdes",
        "40 minutos",
        [
            "Tortillas de maíz",
            "Pechuga de pollo",
            "Salsa verde",
            "Queso rallado",
            "Crema"
        ],
        "4",
        "Enchiladas rellenas de pollo y bañadas en salsa verde.",
        "Rellena las tortillas con pechuga de pollo desmenuzada. Coloca las enchiladas en una fuente para hornear, cúbrelas con salsa verde y queso rallado. Hornea a 180°C durante 20 minutos. Sirve con crema.",
        "../img/imgRecetas/carne/enchiladasVerdes.jpg",
        "carne"
    ],
    [
        "Burgers Caseras",
        "30 minutos",
        [
            "Carne de res molida",
            "Pan de hamburguesa",
            "Queso",
            "Lechuga",
            "Tomate",
            "Cebolla"
        ],
        "4",
        "Hamburguesas jugosas hechas en casa con todos los complementos.",
        "Forma las hamburguesas con la carne molida y cocínelas a la parrilla o sartén. Coloca en los panes con queso, lechuga, tomate y cebolla. Sirve caliente.",
        "../img/imgRecetas/carne/burgersCaseras.jpg",
        "carne"
    ],
    [
        "Fajitas de Pollo",
        "30 minutos",
        [
            "Pechuga de pollo",
            "Pimientos",
            "Cebolla",
            "Tortillas",
            "Especias para fajitas"
        ],
        "4",
        "Fajitas de pollo sazonadas con especias y servidas con tortillas.",
        "Corta el pollo y los pimientos en tiras. Cocina con cebolla y especias para fajitas hasta que estén dorados. Sirve en tortillas calientes.",
        "../img/imgRecetas/carne/fajitasPollo.jpg",
        "carne"
    ],
    [
        "Costillas BBQ",
        "2 horas",
        [
            "Costillas de cerdo",
            "Salsa barbacoa",
            "Ajo en polvo",
            "Pimentón",
            "Sal",
            "Pimienta"
        ],
        "4",
        "Costillas tiernas cocidas a la barbacoa.",
        "Sazona las costillas con ajo, pimentón, sal y pimienta. Cubre con salsa barbacoa y cocina en el horno a 150°C durante 1.5 horas.",
        "../img/imgRecetas/carne/costillasBBQ.webp",
        "carne"
    ],
    [
        "Albóndigas en Salsa",
        "1 hora",
        [
            "Carne molida",
            "Pan rallado",
            "Huevos",
            "Salsa de tomate",
            "Cebolla",
            "Ajo"
        ],
        "4",
        "Albóndigas jugosas en salsa de tomate.",
        "Mezcla carne molida con pan rallado, huevos, cebolla y ajo. Forma albóndigas y cocina en salsa de tomate durante 30 minutos.",
        "../img/imgRecetas/carne/albondigasSalsa.jpg",
        "carne"
    ],
    [
        "Estofado de Ternera",
        "2 horas",
        [
            "Ternera",
            "Cebolla",
            "Zanahorias",
            "Patatas",
            "Caldo de carne",
            "Tomates"
        ],
        "6",
        "Un estofado de ternera con verduras.",
        "Dora la ternera y retírala. Sofríe cebolla, zanahorias y patatas. Añade el caldo y los tomates, luego la ternera. Cocina a fuego lento durante 1.5 horas.",
        "../img/imgRecetas/carne/estofadoTernera.jpg",
        "carne"
    ],
    [
        "Lomo de Cerdo a la Mostaza",
        "1 hora",
        [
            "Lomo de cerdo",
            "Mostaza",
            "Miel",
            "Ajo",
            "Romero"
        ],
        "4",
        "Lomo de cerdo marinado en mostaza y miel.",
        "Mezcla mostaza, miel, ajo y romero. Cubre el lomo con la mezcla y hornea a 180°C durante 45 minutos.",
        "../img/imgRecetas/carne/lomoMostaza.jpg",
        "carne"
    ],

    // Categoría: pescado
    [
        "Tacos de Pescado",
        "25 minutos",
        [
            "Tortillas de maíz",
            "Filetes de pescado",
            "Col rallada",
            "Salsa de aguacate",
            "Lima"
        ],
        "4",
        "Tacos frescos con pescado crujiente y salsa de aguacate.",
        "Fríe los filetes de pescado hasta que estén crujientes. Calienta las tortillas, añade el pescado, col rallada y salsa de aguacate. Exprime un poco de lima sobre los tacos antes de servir.",
        "../img/imgRecetas/pescado/tacosPescado.jpg",
        "pescado"
    ],
    [
        "Salmón a la Parrilla",
        "20 minutos",
        [
            "Filetes de salmón",
            "Limón",
            "Ajo",
            "Perejil",
            "Aceite de oliva"
        ],
        "4",
        "Salmón jugoso a la parrilla con un toque de limón.",
        "Marina el salmón con limón, ajo y perejil. Cocina en la parrilla a fuego medio durante 5-7 minutos por lado.",
        "../img/imgRecetas/pescado/salmonParrilla.webp",
        "pescado"
    ],
    [
        "Paella de Mariscos",
        "1 hora",
        [
            "Arroz",
            "Mejillones",
            "Calamares",
            "Gambas",
            "Pimientos",
            "Azafrán"
        ],
        "4",
        "Paella clásica con una variedad de mariscos.",
        "Sofríe pimientos y calamares. Añade arroz, azafrán y caldo. Cocina con mejillones y gambas hasta que todo esté cocido.",
        "../img/imgRecetas/pescado/paellaMarisco.jpg",
        "pescado"
    ],
    [
        "Filetes de Pescado al Horno",
        "30 minutos",
        [
            "Filetes de pescado",
            "Limón",
            "Ajo",
            "Tomates",
            "Perejil"
        ],
        "4",
        "Pescado al horno con limón y ajo.",
        "Coloca los filetes en una bandeja, añade limón, ajo y tomates en rodajas. Hornea a 180°C durante 20 minutos.",
        "../img/imgRecetas/pescado/pescadoHorno.jpg",
        "pescado"
    ],
    [
        "Ceviche de Camarón",
        "30 minutos",
        [
            "Camarones",
            "Limón",
            "Cebolla morada",
            "Tomate",
            "Cilantro"
        ],
        "4",
        "Ceviche refrescante con camarones y cítricos.",
        "Cocina los camarones en jugo de limón. Mezcla con cebolla, tomate y cilantro picados. Sirve frío.",
        "../img/imgRecetas/pescado/ceviche.jpg",
        "pescado"
    ],
    [
        "Tarta de Atún",
        "45 minutos",
        [
            "Masa para tarta",
            "Atún",
            "Huevos",
            "Crema",
            "Queso rallado"
        ],
        "4",
        "Tarta salada de atún y queso.",
        "Mezcla atún con huevos, crema y queso. Rellena la masa y hornea a 180°C durante 30 minutos.",
        "../img/imgRecetas/pescado/tartaAtun.jpg",
        "pescado"
    ],

    // Categoría: arroz
    [
        "Arroz con Pollo",
        "45 minutos",
        [
            "Arroz",
            "Pollo",
            "Verduras variadas",
            "Caldo de pollo",
            "Especias"
        ],
        "4",
        "Un plato tradicional de arroz con pollo y verduras.",
        "Dora el pollo y retíralo. Sofríe las verduras y luego añade el arroz y el caldo. Cocina hasta que el arroz esté hecho. Añade el pollo y cocina todo junto por unos minutos.",
        "../img/imgRecetas/arroz/arrozConPollo.jpg",
        "arroz"
    ],
    [
        "Paella Valenciana",
        "1 hora 30 minutos",
        [
            "Arroz",
            "Pollo",
            "Conejo",
            "Judías verdes",
            "Pimiento rojo",
            "Azafrán"
        ],
        "6",
        "Paella tradicional con pollo y conejo.",
        "Sofríe pollo y conejo, añade judías verdes, pimiento y arroz. Cocina con caldo y azafrán hasta que el arroz esté hecho.",
        "../img/imgRecetas/arroz/paellaValenciana.jpg",
        "arroz"
    ],
    [
        "Risotto de Champiñones",
        "40 minutos",
        [
            "Arroz Arborio",
            "Champiñones",
            "Caldo de verduras",
            "Queso parmesano",
            "Mantequilla"
        ],
        "4",
        "Risotto cremoso con champiñones y parmesano.",
        "Sofríe champiñones, añade arroz y caldo poco a poco, removiendo hasta que esté cremoso. Agrega parmesano y mantequilla.",
        "../img/imgRecetas/arroz/risottoChampinon.jpg",
        "arroz"
    ],
    [
        "Arroz con Mariscos",
        "50 minutos",
        [
            "Arroz",
            "Mejillones",
            "Gambas",
            "Calamares",
            "Pimientos",
            "Caldo de pescado"
        ],
        "4",
        "Arroz con una mezcla de mariscos y pimientos.",
        "Sofríe pimientos y calamares, añade arroz y caldo de pescado. Cocina con mejillones y gambas.",
        "../img/imgRecetas/arroz/arrozMarisco.jpg",
        "arroz"
    ],
    [
        "Arroz a la Cubana",
        "30 minutos",
        [
            "Arroz",
            "Tomate frito",
            "Plátano",
            "Huevos",
            "Aceite"
        ],
        "4",
        "Arroz con tomate, plátano frito y huevo.",
        "Cocina el arroz y mezcla con tomate frito. Fríe plátanos y huevos. Sirve todo junto.",
        "../img/imgRecetas/arroz/arrozCubano.jpg",
        "arroz"
    ],
    [
        "Arroz con Leche",
        "45 minutos",
        [
            "Arroz",
            "Leche",
            "Azúcar",
            "Canela",
            "Pasas"
        ],
        "4",
        "Un postre clásico de arroz con leche y canela.",
        "Cocina el arroz en leche con azúcar hasta que esté tierno. Añade canela y pasas. Sirve frío o tibio.",
        "../img/imgRecetas/arroz/arrozLeche.jpg",
        "arroz"
    ],

    // Categoría: postre
    [
        "Tarta de Manzana",
        "1 hora 30 minutos",
        [
            "Manzanas",
            "Harina",
            "Mantequilla",
            "Azúcar",
            "Canela"
        ],
        "8",
        "Una tarta clásica de manzana con un toque de canela y una corteza crujiente.",
        "Pela y corta las manzanas. Mezcla con azúcar y canela. Prepara la masa con harina y mantequilla, extiéndela en un molde y coloca las manzanas encima. Cubre con más masa y hornea a 180°C durante 45 minutos.",
        "../img/imgRecetas/postre/tartaManzana.jpg",
        "postre"
    ],
    [
        "Panqueques de Plátano",
        "20 minutos",
        [
            "Plátanos",
            "Harina",
            "Leche",
            "Huevos",
            "Azúcar"
        ],
        "4",
        "Panqueques esponjosos con sabor a plátano.",
        "Macha los plátanos y mézclalos con los demás ingredientes. Cocina en una sartén caliente hasta que estén dorados por ambos lados. Sirve con miel o jarabe.",
        "../img/imgRecetas/postre/panquequesPlatano.jpg",
        "postre"
    ],
    [
        "Galletas de Chocolate",
        "30 minutos",
        [
            "Harina",
            "Azúcar",
            "Mantequilla",
            "Huevos",
            "Chips de chocolate"
        ],
        "24",
        "Galletas dulces y crujientes con chips de chocolate.",
        "Mezcla todos los ingredientes y forma bolitas de masa. Colócalas en una bandeja para hornear y hornea a 180°C durante 12-15 minutos.",
        "../img/imgRecetas/postre/galletasChocolate.jpg",
        "postre"
    ],
    [
        "Mousse de Chocolate",
        "30 minutos",
        [
            "Chocolate",
            "Huevos",
            "Azúcar",
            "Crema de leche"
        ],
        "4",
        "Un mousse suave y cremoso de chocolate.",
        "Derrite el chocolate y mézclalo con huevos batidos y azúcar. Incorpora crema de leche batida. Refrigera antes de servir.",
        "../img/imgRecetas/postre/mouseChocolate.jpg",
        "postre"
    ],
    [
        "Brownies",
        "40 minutos",
        [
            "Chocolate",
            "Mantequilla",
            "Azúcar",
            "Huevos",
            "Harina",
            "Nuez"
        ],
        "12",
        "Brownies densos y fudgy con trozos de nuez.",
        "Derrite chocolate y mantequilla. Mezcla con azúcar, huevos y harina. Añade nueces y hornea a 180°C durante 30 minutos.",
        "../img/imgRecetas/postre/brownies.jpg",
        "postre"
    ],
    [
        "Tiramisu",
        "1 hora 30 minutos",
        [
            "Queso mascarpone",
            "Café",
            "Bizcochos",
            "Cacao en polvo",
            "Azúcar",
            "Huevos"
        ],
        "6",
        "Un postre italiano con capas de café y queso mascarpone.",
        "Mezcla queso mascarpone con azúcar y yemas de huevo. Monta claras a punto de nieve e incorpora. Alterna capas de bizcochos empapados en café con la mezcla de mascarpone. Refrigera y espolvorea con cacao.",
        "../img/imgRecetas/postre/tiramisu.jpg",
        "postre"
    ]
];
