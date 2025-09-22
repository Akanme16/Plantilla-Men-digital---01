/* =================================================================
    BLOQUE 1: OBJETO DE TRADUCCIONES COMPLETAS
================================================================== */
const translations = {
    // -------------------------------------
    // ESPAÑOL
    // -------------------------------------
    es: {
        index: {
            "meta_description": "Descubre el menú digital de TERRA BRASIL. Sabores auténticos, promociones especiales y servicio de delivery.",
            "page_title": "Menú Digital - Restaurante TERRA BRASIL",
            "main_tagline": "Descubre un mundo de sabores auténticos.",
            "delivery_service": "SERVICIO DE",
            "delivery_title": "DELIVERY",
            "events_title": "Eventos",
            "discount_title": "DESCUENTO",
            "discount_percentage": "20%",
            "discount_on": "EN CARNES",
            "terra_brasil_card": "TERRA BRÁSIL",
            "patio_terra_card": "PATIO TERRA",
            "copyright": "© 2025 Restaurante TERRA BRASIL. Todos los derechos reservados.",
            "developed_by": "Menú digital desarrollado por"
        },
        terraBrasil: {
            "meta_description": "Menú del buffet de TERRA BRASIL. Tenedor libre, parrilla, y la mejor comida brasileña.",
            "page_title": "Menú Buffet - TERRA BRASIL",
            "back_to_home": "Volver a la página principal",
            "main_tagline": "Descubre un mundo de sabores auténticos.",
            "buffet_title": "Tenedor Libre",
            "weekdays": "Lunes a Viernes",
            "weekends": "Sábado y Domingo",
            "price_by_kilo_prefix": "OPCIÓN POR KILO:",
            "price_by_kilo_suffix": "CADA 100 GRAMOS",
            "menu_title": "Menú",
            "category_main": "Principales",
            "category_sides": "Guarniciones",
            "category_grill": "Parrillas",
            "category_salads": "Ensaladas",
            "category_drinks": "Bebidas",
            "category_desserts": "Postres",
            "category_coffee": "Café y Té",
            "copyright": "© 2025 Restaurante TERRA BRASIL. Todos los derechos reservados.",
            "developed_by": "Menú digital desarrollado por",

            // PRINCIPALES
            "item_feijoada_completa_title": "Feijoada Completa",
            "item_feijoada_completa_desc": "Plato brasileño tradicional con frijoles negros, carnes ahumadas, chorizo, costilla y acompañado de arroz, farofa y naranja.",
            "item_feijoada_preto_title": "Feijoada Preto",
            "item_feijoada_preto_desc": "Versión más sencilla de la feijoada, centrada en frijoles negros con carne de cerdo y embutidos.",
            "item_poroto_carioca_title": "Poroto Carioca",
            "item_poroto_carioca_desc": "Frijoles pintos cocidos con especias, carne o embutidos, muy consumido en la cocina brasileña diaria.",
            "item_cazuela_mondongo_title": "Cazuela de Mondongo",
            "item_cazuela_mondongo_desc": "Guiso de mondongo (callos) con verduras, papas, tomate y condimentos, típico de Paraguay.",
            "item_escalopirio_carne_title": "Escalopírio de Carne",
            "item_escalopirio_carne_desc": "Bifes de carne rebozados, cocidos en salsa suave de tomate, cebolla y pimientos.",
            "item_pollo_escabeche_title": "Pollo al Escabeche",
            "item_pollo_escabeche_desc": "Pollo marinado en vinagre, cebolla, zanahoria y especias, servido frío o tibio.",
            "item_estofado_carne_title": "Estofado de Carne",
            "item_estofado_carne_desc": "Carne cocida a fuego lento con papas, zanahorias, cebolla, tomate y especias.",
            "item_pollo_agridulce_title": "Pollo Agridulce",
            "item_pollo_agridulce_desc": "Pollo salteado con pimientos y piña, en salsa agridulce a base de soja y azúcar.",
            "item_canelon_title": "Canelón de Carne / Pollo",
            "item_canelon_desc": "Pasta rellena de carne o pollo, servida con salsa roja o blanca y gratinada con queso.",
            "item_lasana_title": "Lasaña de Carne / Pollo / Jamón y Queso",
            "item_lasana_desc": "Capas de pasta intercaladas con salsas, carne, pollo o jamón y queso, gratinada.",
            "item_strogonoff_title": "Strogonoff de Carne / Pollo",
            "item_strogonoff_desc": "Plato brasileño a base de tiras de carne o pollo en salsa cremosa con champiñones.",
            "item_duquesa_pollo_title": "Duquesa de Pollo c/ Jamón y Queso",
            "item_duquesa_pollo_desc": "Pechuga de pollo rellena con jamón y queso, empanizada y frita.",
            "item_milanesa_title": "Milanesa de Carne / Pollo",
            "item_milanesa_desc": "Carne o pollo rebozado con pan rallado y frito, clásico en Paraguay.",
            "item_milanesa_caballo_title": "Milanesa a Caballo",
            "item_milanesa_caballo_desc": "Milanesa servida con huevo frito encima.",
            "item_milanesa_napolitana_title": "Milanesa Napolitana",
            "item_milanesa_napolitana_desc": "Milanesa cubierta con salsa de tomate, jamón y queso gratinado.",
            "item_bife_caballo_title": "Bife a Caballo c/ Huevo",
            "item_bife_caballo_desc": "Bife de carne a la plancha servido con huevo frito.",
            "item_besito_vino_title": "Besito al Vino",
            "item_besito_vino_desc": "Albóndigas de carne cocidas en salsa de vino y tomate.",
            "item_marinera_title": "Marinera de Carne / Pollo",
            "item_marinera_desc": "Carne o pollo rebozado en masa de harina y frito, típico en Paraguay.",
            "item_marinera_napolitana_title": "Marinera Napolitana",
            "item_marinera_napolitana_desc": "Marinera cubierta con salsa de tomate, jamón y queso.",
            "item_pollo_crema_title": "Pollo a la Crema",
            "item_pollo_crema_desc": "Pollo cocinado en salsa cremosa de leche o nata con cebolla y champiñones.",
            "item_sufle_title": "Suflé de Verduras / Jamón y Queso",
            "item_sufle_desc": "Preparación horneada de verduras o jamón con queso en mezcla de huevo batido.",
            "item_grille_cebolla_title": "Grillé con Cebolla",
            "item_grille_cebolla_desc": "Carne a la plancha acompañada de cebolla caramelizada.",
            "item_grille_napolitana_title": "Grillé Napolitana",
            "item_grille_napolitana_desc": "Carne grillada cubierta con salsa de tomate, jamón y queso.",
            "item_costeleta_cerdo_title": "Costeleta de Cerdo",
            "item_costeleta_cerdo_desc": "Chuleta de cerdo a la plancha o frita, marinada con especias.",

            // GUARNICIONES
            "item_arroz_ajo_title": "Arroz Frito al Ajo",
            "item_arroz_ajo_desc": "Arroz salteado con ajo dorado en aceite, de sabor intenso.",
            "item_fideo_ajo_title": "Fideo al Ajo",
            "item_fideo_ajo_desc": "Pasta salteada con ajo y aceite.",
            "item_fideo_manteca_title": "Fideo a la Manteca",
            "item_fideo_manteca_desc": "Fideos mezclados con manteca derretida.",
            "item_fideo_crema_title": "Fideo a la Crema",
            "item_fideo_crema_desc": "Pasta servida con salsa cremosa.",
            "item_fideo_pesto_title": "Fideo al Pesto",
            "item_fideo_pesto_desc": "Fideos acompañados con salsa de albahaca, ajo y queso.",
            "item_fideo_chino_title": "Fideo Chino",
            "item_fideo_chino_desc": "Tallarines salteados con verduras y salsa de soja.",
            "item_fideo_carbonara_title": "Fideo a la Carbonara",
            "item_fideo_carbonara_desc": "Pasta con crema, panceta y queso rallado.",
            "item_arroz_queso_title": "Arroz con Queso",
            "item_arroz_queso_desc": "Arroz cremoso con queso fundido.",
            "item_noquis_title": "Ñoquis",
            "item_noquis_desc": "Bolitas de papa mezcladas con harina, hervidas y servidas con salsa.",
            "item_ravioles_title": "Ravioles de Pollo / Jamón / Carne",
            "item_ravioles_desc": "Pasta rellena de pollo, jamón o carne, servida con salsa.",
            "item_arroz_primavera_title": "Arroz Primavera",
            "item_arroz_primavera_desc": "Arroz con verduras variadas como zanahoria, arvejas y choclo.",
            "item_arroz_piamontese_title": "Arroz Piamontese",
            "item_arroz_piamontese_desc": "Arroz cremoso con champiñones y crema.",

            // PARRILLAS
            "item_vacio_title": "Vacío",
            "item_vacio_desc": "Un clásico de la parrilla, corte jugoso y tierno proveniente de la parte baja de la res.",
            "item_costilla_title": "Costilla",
            "item_costilla_desc": "Corte tradicional muy valorado por su sabor y jugosidad.",
            "item_cupim_title": "Cupim",
            "item_cupim_desc": "Corte típico de Brasil, extraído de la parte superior de la res. De textura marmoleada y sabrosa, se prepara a fuego bajo.",
            "item_bondiola_title": "Bondiola de Cerdo",
            "item_bondiola_desc": "Parte del cuello del cerdo, reconocida por su sabor profundo y ternura.",

            // ENSALADAS
            "item_ensalada_papa_title": "Ensalada de Papa",
            "item_ensalada_papa_desc": "Papas hervidas mezcladas con mayonesa, cebolla, huevo duro y perejil.",
            "item_ensalada_alemana_title": "Ensalada Alemana",
            "item_ensalada_alemana_desc": "Papas hervidas, salchichas, cebolla y mayonesa, típica de la cocina alemana-brasileña.",
            "item_ensalada_rusa_title": "Ensalada Rusa",
            "item_ensalada_rusa_desc": "Papas, zanahorias, arvejas y mayonesa.",
            "item_ensalada_arroz_title": "Ensalada de Arroz",
            "item_ensalada_arroz_desc": "Arroz frío acompañado de verduras, a veces con pollo o jamón.",
            "item_ensalada_poroto_title": "Ensalada de Poroto",
            "item_ensalada_poroto_desc": "Frijoles cocidos con cebolla, tomate, pimiento y aliño de vinagre.",
            "item_ensalada_lechuga_title": "Ensalada de Lechuga",
            "item_ensalada_lechuga_desc": "Hojas frescas de lechuga con aderezo simple de aceite y limón.",
            "item_ensalada_lechuga_repollada_title": "Ensalada de Lechuga Repollada",
            "item_ensalada_lechuga_repollada_desc": "Lechuga repollada finamente picada con aliño ligero.",
            "item_ensalada_bailarina_title": "Bailarina",
            "item_ensalada_bailarina_desc": "Ensalada colorida de vegetales variados, similar a ensalada primavera.",
            "item_ensalada_tomate_title": "Ensalada de Tomate",
            "item_ensalada_tomate_desc": "Rodajas de tomate fresco con cebolla, aceite y vinagre.",
            "item_ensalada_repollo_title": "Ensalada de Repollo Blanco c/ Morado",
            "item_ensalada_repollo_desc": "Repollo blanco y morado en juliana, aderezado con vinagreta.",
            "item_ensalada_cebolla_vinagreta_title": "Ensalada de Cebolla a la Vinagreta",
            "item_ensalada_cebolla_vinagreta_desc": "Cebolla cortada en pluma con vinagre, aceite y condimentos.",
            "item_vinagreta_verdura_title": "Vinagreta de Verdura",
            "item_vinagreta_verdura_desc": "Verduras varias (pimiento, cebolla, tomate) marinadas en vinagre.",
            "item_pepino_agridulce_title": "Pepino Agridulce",
            "item_pepino_agridulce_desc": "Pepino en rodajas con mezcla de vinagre, azúcar y sal.",
            "item_ensalada_huevo_title": "Ensalada de Huevo",
            "item_ensalada_huevo_desc": "Huevos duros picados con mayonesa y verduras.",
            "item_ensalada_remolacha_title": "Ensalada de Remolacha",
            "item_ensalada_remolacha_desc": "Remolachas hervidas con cebolla y aliño simple.",
            "item_verdura_primavera_title": "Verdura Primavera",
            "item_verdura_primavera_desc": "Mezcla de verduras de estación como zanahoria, arvejas y choclo.",
            "item_repollo_ajo_title": "Repollo al Ajo",
            "item_repollo_ajo_desc": "Repollo salteado o marinado con ajo.",
            "item_ensalada_mixta_title": "Ensalada Mixta",
            "item_ensalada_mixta_desc": "Combinación de lechuga, tomate, cebolla y pepino.",
            "item_salpicon_pollo_title": "Salpicón de Pollo",
            "item_salpicon_pollo_desc": "Pollo desmenuzado mezclado con verduras y mayonesa.",
            "item_berro_title": "Berro",
            "item_berro_desc": "Hojas frescas de berro, servidas como ensalada simple.",
            "item_rucula_title": "Rúcula",
            "item_rucula_desc": "Hojas frescas de rúcula, de sabor amargo y picante.",

            // BEBIDAS
            "item_agua_title": "Agua",
            "item_agua_desc": "Con o sin gas.",
            "item_jugos_title": "Jugos Naturales",
            "item_jugos_desc": "Durazno, Piña, Naranja, Limón.",
            "drink_size_large_pitcher": "Jarra Grande",
            "drink_size_small_pitcher": "Jarra Pequeña",
            "drink_size_glass": "Vaso",
            "item_antarctica_title": "Antarctica",
            "item_antarctica_desc": "Normal y Zero",
            "item_cocacola_title": "Coca Cola",
            "item_cocacola_desc": "Normal y Zero",
            "item_fanta_title": "Fanta",
            "item_fanta_desc": "Naranja, Guaraná, Piña.",
            "item_sprite_title": "Sprite",
            "item_sprite_desc": "Normal y Zero.",
            "item_schweppes_title": "Schweppes",
            "item_schweppes_desc": "Citrus y Tónica.",
            
            // POSTRES
            "item_flan_leche_title": "Flan de Leche",
            "item_flan_leche_desc": "Clásico flan de huevo con caramelo, suave y cremoso.",
            "item_flan_helado_title": "Flan con Helado",
            "item_flan_helado_desc": "Postre clásico de flan cremoso acompañado de una bola de helado.",
            "item_arroz_leche_title": "Arroz con leche",
            "item_arroz_leche_desc": "Postre tradicional de arroz cremoso con leche, aromatizado con canela y un toque de vainilla.",
            "item_mousse_maracuya_title": "Mousse de Maracuyá",
            "item_mousse_maracuya_desc": "Postre brasileño cremoso elaborado con pulpa de maracuyá, leche condensada y crema.",
            "item_helado_copa_title": "Helado en Copa Americana",
            "item_helado_copa_desc": "",

            // CAFÉ Y TÉ
            "item_cafe_title": "Café",
            "item_cafe_desc": "Espresso Americano, Café con Leche",
            "item_te_title": "Té",
            "item_te_desc": "Té Boldo, Té Manzanilla, Té Verde, Té Rojo, Té Anís, Té Menta, Té Limón"
        },
        patioTerra: {
            "meta_description": "Descubre el menú digital de Patio Terra. Hamburguesas, pizzas, lomitos y más.",
            "page_title": "Menú Digital - Patio Terra",
            "back_to_home": "Volver a la página principal",
            "main_tagline": "Descubre un mundo de sabores auténticos.",
            "menu_title": "Menú",
            "category_burgers": "Hamburguesa",
            "category_pizzas": "Pizza",
            "category_lomito": "Lomito Árabe",
            "category_sandwiches": "Sándwich",
            "category_appetizers": "Para Picar",
            "category_drinks": "Bebidas",
            "category_cocktails": "Cócteles y Destilados",
            "extras_button": "Agregados extras",
            "pizzas_dulces": "PIZZAS DULCES",
            "sandwich_lomito": "SANDWICH DE LOMITO",
            "sandwich_pollo": "SANDWICH DE POLLO",
            "copyright": "© 2025 Restaurante TERRA BRASIL. Todos los derechos reservados.",
            "developed_by": "Menú digital desarrollado por",

            // --- Traducciones de Items del Menú ---
            // Agregados Extras
            "extra_egg": "Huevo",
            "extra_caramelized_onion": "Cebolla caramelizada",
            "extra_cheddar": "Cheddar",
            "extra_catupiry": "Catupiry",
            "extra_bacon": "Panceta",
            "extra_meat": "Carne",
            "extra_sauce": "Salsa Extra",
            "extra_catupiry_cheese": "Queso catupiry",
            "extra_mozzarella_cheese": "Queso mozzarella",
            "extra_calabresa_slices": "Rodajas de calabresa",
            "extra_hard_boiled_egg": "Huevo duro",
            "extra_garlic_sauce": "Salsa de ajo",
            "extra_olive": "Aceituna",

            // Hamburguesas
            "item_burger_1": "Hamburguesa Simple",
            "desc_burger_1": "Pan, carne, queso cheddar.",
            "item_burger_2": "Hamburguesa Completa",
            "desc_burger_2": "Pan, carne, queso cheddar, lechuga, tomate y huevo.",
            "item_burger_3": "Hamburguesa Terra",
            "desc_burger_3": "Pan, carne, queso cheddar, cebolla caramelizada, panceta, lechuga, tomate y huevo.",
            
            // Pizzas
            "item_pizza_1": "MARGARITA",
            "desc_pizza_1": "Mozzarella cremosa, tomate, aceituna y orégano.",
            "item_pizza_2": "Vegetariana",
            "desc_pizza_2": "Mozzarella cremosa, cebolla, morrones, tomate, choclo, palmito, aceituna y orégano.",
            "item_pizza_3": "Pollo con Catupiry",
            "desc_pizza_3": "Mozzarella cremosa, pollo desmenuzado, catupiry, aceituna y orégano.",
            "item_pizza_4": "Palmito",
            "desc_pizza_4": "Mozzarella cremosa, palmito, catupiry, aceituna y orégano.",
            "item_pizza_5": "4 Quesos",
            "desc_pizza_5": "Mozzarella cremosa, queso provolone, parmesano, queso azul, aceituna y orégano.",
            "item_pizza_6": "Al Ajo",
            "desc_pizza_6": "Mozzarella cremosa, ajo, aceite de oliva, aceituna y orégano.",
            "item_pizza_7": "Portuguesa",
            "desc_pizza_7": "Mozzarella cremosa, jamón, huevo duro, cebolla, aceituna negra y orégano.",
            "item_pizza_8": "Choclo",
            "desc_pizza_8": "Mozzarella cremosa, choclo, aceituna y orégano.",
            "item_pizza_9": "Napolitana",
            "desc_pizza_9": "Mozzarella cremosa, tomate, jamón, aceituna, albahaca y orégano.",
            "item_pizza_10": "Pepperoni",
            "desc_pizza_10": "Mozzarella cremosa, orégano y pepperoni.",
            "item_pizza_11": "Terra",
            "desc_pizza_11": "Mozzarella cremosa, panceta (bacon) y orégano.",
            "item_pizza_12": "Calabresa",
            "desc_pizza_12": "Mozzarella cremosa, calabresa, cebolla (opcional) y orégano.",
            "item_pizza_13": "Rúcula",
            "desc_pizza_13": "Mozzarella cremosa, jamón crudo, rúcula, tomate cherry y orégano.",

            // Pizzas Dulces
            "item_pizza_sweet_1": "Sensación",
            "desc_pizza_sweet_1": "Mozzarella, nutella, frutilla y azúcar impalpable.",
            "item_pizza_sweet_2": "PRESTIGIO",
            "desc_pizza_sweet_2": "Mozzarella, coco rallado, bañado en leche condensada, chocolate negro o blanco.",
            "item_pizza_sweet_3": "Bônoffee",
            "desc_pizza_sweet_3": "Mozzarella, banana, canela y dulce de leche.",

            // Lomito Árabe
            "item_lomito_1": "Normal",
            "desc_lomito_1": "Pan árabe, carne o pollo, y repollo.",
            "item_lomito_2": "Completo",
            "desc_lomito_2": "Pan árabe, carne o pollo, repollo y queso catupiry.",
            
            // Sándwiches de Lomito
            "item_sandwich_lomito_1": "Simple",
            "desc_sandwich_lomito_1": "Pan, carne, queso mozzarella, lechuga y tomate.",
            "item_sandwich_lomito_2": "Completa",
            "desc_sandwich_lomito_2": "Pan, carne, queso mozzarella, lechuga, tomate y huevo.",
            "item_sandwich_lomito_3": "Terra",
            "desc_sandwich_lomito_3": "Pan, carne, queso mozzarella, panceta, cebolla caramelizada, lechuga, tomate y huevo.",
            
            // Sándwiches de Pollo
            "item_sandwich_pollo_1": "Sándwich Simple",
            "desc_sandwich_pollo_1": "Pan, pollo, queso mozzarella, lechuga y tomate.",
            "item_sandwich_pollo_2": "Sándwich Completo",
            "desc_sandwich_pollo_2": "Pan, pollo, queso mozzarella, lechuga, tomate y huevo.",
            "item_sandwich_pollo_3": "Sándwich Terra",
            "desc_sandwich_pollo_3": "Pan, pollo, queso mozzarella, panceta, cebolla caramelizada, lechuga, tomate y huevo.",

            // Para Picar
            "item_appetizer_1": "Papas fritas",
            "item_appetizer_2": "Mandioca Frita",
            "item_appetizer_3": "Frango a Passarinho",
            "desc_appetizer_3": "Incluye 8 piezas de pollo con papas fritas o mandiocas fritas.",
            "item_appetizer_4": "Calabresa con Fritas",
            "desc_appetizer_4": "Papas fritas crujientes, rodajas de calabresa y cebolla salteada.",

            // Bebidas
            "item_drink_1": "Agua",
            "desc_drink_1": "Con o sin gas.",
            "item_drink_2": "Jugos Naturales",
            "desc_drink_2": "Durazno, Piña, Naranja, Limón.",
            "drink_size_large_pitcher": "Jarra Grande",
            "drink_size_small_pitcher": "Jarra Pequeña",
            "drink_size_glass": "Vaso",
            "item_drink_3": "Antarctica",
            "desc_drink_3": "Normal y Zero",
            "item_drink_4": "Coca Cola",
            "desc_drink_4": "Normal y Zero",
            "item_drink_5": "Fanta",
            "desc_drink_5": "Naranja, Guaraná, Piña.",
            "item_drink_6": "Sprite",
            "desc_drink_6": "Normal y Zero.",
            "item_drink_7": "Schweppes",
            "desc_drink_7": "Citrus y Tónica.",

            // Cócteles
            "item_cocktail_1": "Aperol",
            "desc_cocktail_1": "Aperol, prosecco, soda, hielo y una rodaja de naranja.",
            "item_cocktail_2": "Gin Tonic",
            "desc_cocktail_2": "Ginebra, tónica, hielo y una rodaja de limón o pepino.",
            "item_cocktail_3": "Caipiroska",
            "desc_cocktail_3": "Vodka, lima, azúcar y hielo picado.",
            "item_cocktail_4": "Caipirinha",
            "desc_cocktail_4": "Cachaça, lima, azúcar y hielo picado.",
            "item_cocktail_5": "Fernet Cola",
            "desc_cocktail_5": "Fernet, refresco de cola y hielo.",
            "item_cocktail_6": "Sangría",
            "desc_cocktail_6": "Vino tinto, refresco de naranja o limón, frutas picadas (como naranja, manzana, limón, durazno) y, opcionalmente, un toque de licor.",
            "list_wines": "VINOS",
            "list_beers": "Cervezas",
            "list_drafts": "Vasos",
            "wine_1": "Alma mora Norma",
            "wine_2": "Gran Hacienda",
            "wine_3": "Terra Noble Car Alma",
            "wine_4": "Mora Black Norton",
            "wine_5": "Alma Mora Black",
            "wine_6": "Carmen Synal",
            "wine_7": "Santa Julia Malbec",
            "wine_8": "Benjamín Malbec",
            "wine_9": "Casa Sibra Malbec",
            "wine_10": "Male Gascon Malbec",
            "wine_11": "Copa de vino",
            "beer_1": "Heineken (650 ml)",
            "beer_2": "Cerveza Miller",
            "beer_3": "Corona (650 ml)",
            "beer_4": "Munich (650 ml)",
            "beer_5": "Heineken 0 (300 ml)",
            "draft_1": "Chop Munich 500",
            "draft_2": "Chop Munich 360",
            "draft_3": "2x1 Chop 360"
        }
    },
    // -------------------------------------
    // INGLÉS
    // -------------------------------------
    en: {
        index: {
            "meta_description": "Discover the digital menu of TERRA BRASIL. Authentic flavors, special promotions, and delivery service.",
            "page_title": "Digital Menu - TERRA BRASIL Restaurant",
            "main_tagline": "Discover a world of authentic flavors.",
            "delivery_service": "SERVICE",
            "delivery_title": "DELIVERY",
            "events_title": "Events",
            "discount_title": "DISCOUNT",
            "discount_percentage": "20%",
            "discount_on": "ON MEATS",
            "terra_brasil_card": "TERRA BRÁSIL",
            "patio_terra_card": "PATIO TERRA",
            "copyright": "© 2025 TERRA BRASIL Restaurant. All rights reserved.",
            "developed_by": "Digital menu developed by"
        },
        terraBrasil: {
            "meta_description": "TERRA BRASIL's buffet menu. All-you-can-eat, grill, and the best Brazilian food.",
            "page_title": "Buffet Menu - TERRA BRASIL",
            "back_to_home": "Back to homepage",
            "main_tagline": "Discover a world of authentic flavors.",
            "buffet_title": "All-You-Can-Eat",
            "weekdays": "Monday to Friday",
            "weekends": "Saturday and Sunday",
            "price_by_kilo_prefix": "OPTION BY KILO:",
            "price_by_kilo_suffix": "PER 100 GRAMS",
            "menu_title": "Menu",
            "category_main": "Main Courses",
            "category_sides": "Side Dishes",
            "category_grill": "Grill",
            "category_salads": "Salads",
            "category_drinks": "Drinks",
            "category_desserts": "Desserts",
            "category_coffee": "Coffee & Tea",
            "copyright": "© 2025 TERRA BRASIL Restaurant. All rights reserved.",
            "developed_by": "Digital menu developed by",

            // MAIN COURSES
            "item_feijoada_completa_title": "Complete Feijoada",
            "item_feijoada_completa_desc": "Traditional Brazilian dish with black beans, smoked meats, sausage, ribs, served with rice, farofa, and orange slices.",
            "item_feijoada_preto_title": "Black Bean Feijoada",
            "item_feijoada_preto_desc": "A simpler version of feijoada, focusing on black beans with pork and sausages.",
            "item_poroto_carioca_title": "Carioca Beans",
            "item_poroto_carioca_desc": "Pinto beans cooked with spices, meat, or sausages, a staple in daily Brazilian cuisine.",
            "item_cazuela_mondongo_title": "Tripe Stew",
            "item_cazuela_mondongo_desc": "A hearty stew of tripe with vegetables, potatoes, tomato, and spices, typical of Paraguay.",
            "item_escalopirio_carne_title": "Beef Escalope",
            "item_escalopirio_carne_desc": "Breaded beef steaks cooked in a mild tomato, onion, and pepper sauce.",
            "item_pollo_escabeche_title": "Pickled Chicken (Escabeche)",
            "item_pollo_escabeche_desc": "Chicken marinated in vinegar, onion, carrot, and spices, served cold or warm.",
            "item_estofado_carne_title": "Beef Stew",
            "item_estofado_carne_desc": "Slow-cooked beef with potatoes, carrots, onion, tomato, and spices.",
            "item_pollo_agridulce_title": "Sweet and Sour Chicken",
            "item_pollo_agridulce_desc": "Sautéed chicken with bell peppers and pineapple in a sweet and sour sauce made from soy sauce and sugar.",
            "item_canelon_title": "Cannelloni (Beef / Chicken)",
            "item_canelon_desc": "Pasta stuffed with beef or chicken, served with red or white sauce and topped with melted cheese.",
            "item_lasana_title": "Lasagna (Beef / Chicken / Ham & Cheese)",
            "item_lasana_desc": "Layers of pasta alternated with sauces, beef, chicken, or ham and cheese, topped with gratinated cheese.",
            "item_strogonoff_title": "Stroganoff (Beef / Chicken)",
            "item_strogonoff_desc": "Brazilian dish made with strips of beef or chicken in a creamy mushroom sauce.",
            "item_duquesa_pollo_title": "Chicken Cordon Bleu",
            "item_duquesa_pollo_desc": "Chicken breast stuffed with ham and cheese, breaded and fried.",
            "item_milanesa_title": "Milanesa (Beef / Chicken)",
            "item_milanesa_desc": "Beef or chicken coated with breadcrumbs and fried, a classic in Paraguay.",
            "item_milanesa_caballo_title": "Milanesa on Horseback",
            "item_milanesa_caballo_desc": "Milanesa served with a fried egg on top.",
            "item_milanesa_napolitana_title": "Neapolitan Milanesa",
            "item_milanesa_napolitana_desc": "Milanesa covered with tomato sauce, ham, and gratinated cheese.",
            "item_bife_caballo_title": "Steak on Horseback with Egg",
            "item_bife_caballo_desc": "Grilled beef steak served with a fried egg.",
            "item_besito_vino_title": "Meatballs in Wine Sauce",
            "item_besito_vino_desc": "Meatballs cooked in a wine and tomato sauce.",
            "item_marinera_title": "Battered Meat (Beef / Chicken)",
            "item_marinera_desc": "Beef or chicken dipped in flour batter and fried, typical in Paraguay.",
            "item_marinera_napolitana_title": "Neapolitan Battered Meat",
            "item_marinera_napolitana_desc": "Battered meat covered with tomato sauce, ham, and cheese.",
            "item_pollo_crema_title": "Creamy Chicken",
            "item_pollo_crema_desc": "Chicken cooked in a creamy milk or heavy cream sauce with onion and mushrooms.",
            "item_sufle_title": "Soufflé (Vegetable / Ham & Cheese)",
            "item_sufle_desc": "Baked dish of vegetables or ham with cheese in a beaten egg mixture.",
            "item_grille_cebolla_title": "Grilled Steak with Onions",
            "item_grille_cebolla_desc": "Grilled meat served with caramelized onions.",
            "item_grille_napolitana_title": "Neapolitan Grilled Steak",
            "item_grille_napolitana_desc": "Grilled meat covered with tomato sauce, ham, and cheese.",
            "item_costeleta_cerdo_title": "Pork Chop",
            "item_costeleta_cerdo_desc": "Grilled or fried pork chop, marinated with spices.",
            
            // SIDE DISHES
            "item_arroz_ajo_title": "Garlic Fried Rice",
            "item_arroz_ajo_desc": "Rice sautéed with golden garlic in oil, with an intense flavor.",
            "item_fideo_ajo_title": "Garlic Noodles",
            "item_fideo_ajo_desc": "Pasta sautéed with garlic and oil.",
            "item_fideo_manteca_title": "Buttered Noodles",
            "item_fideo_manteca_desc": "Noodles mixed with melted butter.",
            "item_fideo_crema_title": "Creamy Noodles",
            "item_fideo_crema_desc": "Pasta served with a creamy sauce.",
            "item_fideo_pesto_title": "Pesto Noodles",
            "item_fideo_pesto_desc": "Noodles with a basil, garlic, and cheese sauce.",
            "item_fideo_chino_title": "Chow Mein",
            "item_fideo_chino_desc": "Noodles stir-fried with vegetables and soy sauce.",
            "item_fideo_carbonara_title": "Carbonara Noodles",
            "item_fideo_carbonara_desc": "Pasta with cream, bacon, and grated cheese.",
            "item_arroz_queso_title": "Cheesy Rice",
            "item_arroz_queso_desc": "Creamy rice with melted cheese.",
            "item_noquis_title": "Gnocchi",
            "item_noquis_desc": "Potato dumplings mixed with flour, boiled and served with sauce.",
            "item_ravioles_title": "Ravioli (Chicken / Ham / Beef)",
            "item_ravioles_desc": "Pasta filled with chicken, ham, or beef, served with sauce.",
            "item_arroz_primavera_title": "Spring Rice",
            "item_arroz_primavera_desc": "Rice with mixed vegetables like carrots, peas, and corn.",
            "item_arroz_piamontese_title": "Piedmontese Rice",
            "item_arroz_piamontese_desc": "Creamy rice with mushrooms and cream.",

            // GRILL
            "item_vacio_title": "Flank Steak",
            "item_vacio_desc": "A grill classic, a juicy and tender cut from the lower part of the cattle.",
            "item_costilla_title": "Ribs",
            "item_costilla_desc": "A traditional cut highly valued for its flavor and juiciness.",
            "item_cupim_title": "Cupim (Beef Hump)",
            "item_cupim_desc": "A typical Brazilian cut from the zebu cattle's hump. It has a marbled texture, is extremely flavorful, and is slow-cooked on the grill or in the oven.",
            "item_bondiola_title": "Pork Shoulder",
            "item_bondiola_desc": "Cut from the neck of the pig, known for its deep flavor and tenderness.",

            // SALADS
            "item_ensalada_papa_title": "Potato Salad",
            "item_ensalada_papa_desc": "Boiled potatoes mixed with mayonnaise, onion, hard-boiled egg, and parsley.",
            "item_ensalada_alemana_title": "German Salad",
            "item_ensalada_alemana_desc": "Boiled potatoes, sausages, onion, and mayonnaise, typical of German-Brazilian cuisine.",
            "item_ensalada_rusa_title": "Russian Salad",
            "item_ensalada_rusa_desc": "Potatoes, carrots, peas, and mayonnaise.",
            "item_ensalada_arroz_title": "Rice Salad",
            "item_ensalada_arroz_desc": "Cold rice with vegetables, sometimes with chicken or ham.",
            "item_ensalada_poroto_title": "Bean Salad",
            "item_ensalada_poroto_desc": "Cooked beans with onion, tomato, bell pepper, and a vinegar dressing.",
            "item_ensalada_lechuga_title": "Lettuce Salad",
            "item_ensalada_lechuga_desc": "Fresh lettuce leaves with a simple oil and lemon dressing.",
            "item_ensalada_lechuga_repollada_title": "Cabbage Salad",
            "item_ensalada_lechuga_repollada_desc": "Finely chopped iceberg lettuce with a light dressing.",
            "item_ensalada_bailarina_title": "Dancer Salad",
            "item_ensalada_bailarina_desc": "Colorful salad of assorted vegetables, similar to a spring salad.",
            "item_ensalada_tomate_title": "Tomato Salad",
            "item_ensalada_tomate_desc": "Fresh tomato slices with onion, oil, and vinegar.",
            "item_ensalada_repollo_title": "White and Purple Cabbage Salad",
            "item_ensalada_repollo_desc": "Julienned white and purple cabbage with vinaigrette.",
            "item_ensalada_cebolla_vinagreta_title": "Onion Vinaigrette Salad",
            "item_ensalada_cebolla_vinagreta_desc": "Sliced onion with vinegar, oil, and seasonings.",
            "item_vinagreta_verdura_title": "Vegetable Vinaigrette",
            "item_vinagreta_verdura_desc": "Various vegetables (bell pepper, onion, tomato) marinated in vinegar.",
            "item_pepino_agridulce_title": "Sweet and Sour Cucumber",
            "item_pepino_agridulce_desc": "Sliced cucumber with a mixture of vinegar, sugar, and salt.",
            "item_ensalada_huevo_title": "Egg Salad",
            "item_ensalada_huevo_desc": "Chopped hard-boiled eggs with mayonnaise and vegetables.",
            "item_ensalada_remolacha_title": "Beetroot Salad",
            "item_ensalada_remolacha_desc": "Boiled beetroots with onion and a simple dressing.",
            "item_verdura_primavera_title": "Spring Vegetables",
            "item_verdura_primavera_desc": "Mix of seasonal vegetables like carrots, peas, and corn.",
            "item_repollo_ajo_title": "Garlic Cabbage",
            "item_repollo_ajo_desc": "Sautéed or marinated cabbage with garlic.",
            "item_ensalada_mixta_title": "Mixed Salad",
            "item_ensalada_mixta_desc": "Combination of lettuce, tomato, onion, and cucumber.",
            "item_salpicon_pollo_title": "Chicken Salad (Salpicón)",
            "item_salpicon_pollo_desc": "Shredded chicken mixed with vegetables and mayonnaise.",
            "item_berro_title": "Watercress",
            "item_berro_desc": "Fresh watercress leaves, served as a simple salad.",
            "item_rucula_title": "Arugula",
            "item_rucula_desc": "Fresh arugula leaves, with a bitter and peppery flavor.",

            // DRINKS
            "item_agua_title": "Water",
            "item_agua_desc": "Still or sparkling.",
            "item_jugos_title": "Natural Juices",
            "item_jugos_desc": "Peach, Pineapple, Orange, Lemon.",
            "drink_size_large_pitcher": "Large Pitcher",
            "drink_size_small_pitcher": "Small Pitcher",
            "drink_size_glass": "Glass",
            "item_antarctica_title": "Antarctica",
            "item_antarctica_desc": "Regular and Zero",
            "item_cocacola_title": "Coca Cola",
            "item_cocacola_desc": "Regular and Zero",
            "item_fanta_title": "Fanta",
            "item_fanta_desc": "Orange, Guarana, Pineapple.",
            "item_sprite_title": "Sprite",
            "item_sprite_desc": "Regular and Zero.",
            "item_schweppes_title": "Schweppes",
            "item_schweppes_desc": "Citrus and Tonic.",

            // DESSERTS
            "item_flan_leche_title": "Milk Flan",
            "item_flan_leche_desc": "Classic egg flan with caramel, smooth and creamy.",
            "item_flan_helado_title": "Flan with Ice Cream",
            "item_flan_helado_desc": "Classic creamy flan served with a scoop of ice cream.",
            "item_arroz_leche_title": "Rice Pudding",
            "item_arroz_leche_desc": "Traditional creamy rice dessert with milk, flavored with cinnamon and a hint of vanilla.",
            "item_mousse_maracuya_title": "Passion Fruit Mousse",
            "item_mousse_maracuya_desc": "Creamy Brazilian dessert made with passion fruit pulp, condensed milk, and cream.",
            "item_helado_copa_title": "Ice Cream Sundae",
            "item_helado_copa_desc": "",

            // COFFEE & TEA
            "item_cafe_title": "Coffee",
            "item_cafe_desc": "Espresso, Americano, Coffee with Milk",
            "item_te_title": "Tea",
            "item_te_desc": "Boldo, Chamomile, Green, Red, Anise, Mint, Lemon"
        },
        patioTerra: {
            "meta_description": "Discover the digital menu of Patio Terra. Burgers, pizzas, wraps, and more.",
            "page_title": "Digital Menu - Patio Terra",
            "back_to_home": "Back to homepage",
            "main_tagline": "Discover a world of authentic flavors.",
            "menu_title": "Menu",
            "category_burgers": "Burger",
            "category_pizzas": "Pizza",
            "category_lomito": "Shawarma",
            "category_sandwiches": "Sandwich",
            "category_appetizers": "Appetizers",
            "category_drinks": "Drinks",
            "category_cocktails": "Cocktails & Spirits",
            "extras_button": "Extra Toppings",
            "pizzas_dulces": "DESSERT PIZZAS",
            "sandwich_lomito": "BEEF SANDWICH",
            "sandwich_pollo": "CHICKEN SANDWICH",
            "copyright": "© 2025 TERRA BRASIL Restaurant. All rights reserved.",
            "developed_by": "Digital menu developed by",

            // Menu Items Translations
            "extra_egg": "Egg",
            "extra_caramelized_onion": "Caramelized onion",
            "extra_cheddar": "Cheddar",
            "extra_catupiry": "Catupiry",
            "extra_bacon": "Bacon",
            "extra_meat": "Meat",
            "extra_sauce": "Extra Sauce",
            "extra_catupiry_cheese": "Catupiry cheese",
            "extra_mozzarella_cheese": "Mozzarella cheese",
            "extra_calabresa_slices": "Calabresa slices",
            "extra_hard_boiled_egg": "Hard-boiled egg",
            "extra_garlic_sauce": "Garlic sauce",
            "extra_olive": "Olive",

            "item_burger_1": "Simple Burger",
            "desc_burger_1": "Bun, meat, cheddar cheese.",
            "item_burger_2": "Full Burger",
            "desc_burger_2": "Bun, meat, cheddar cheese, lettuce, tomato, and egg.",
            "item_burger_3": "Terra Burger",
            "desc_burger_3": "Bun, meat, cheddar cheese, caramelized onion, bacon, lettuce, tomato, and egg.",
            
            "item_pizza_1": "MARGHERITA",
            "desc_pizza_1": "Creamy mozzarella, tomato, olives, and oregano.",
            "item_pizza_2": "Vegetarian",
            "desc_pizza_2": "Creamy mozzarella, onion, bell peppers, tomato, corn, heart of palm, olives, and oregano.",
            "item_pizza_3": "Chicken with Catupiry",
            "desc_pizza_3": "Creamy mozzarella, shredded chicken, catupiry, olives, and oregano.",
            "item_pizza_4": "Heart of Palm",
            "desc_pizza_4": "Creamy mozzarella, heart of palm, catupiry, olives, and oregano.",
            "item_pizza_5": "4 Cheese",
            "desc_pizza_5": "Creamy mozzarella, provolone, parmesan, blue cheese, olives, and oregano.",
            "item_pizza_6": "Garlic",
            "desc_pizza_6": "Creamy mozzarella, garlic, olive oil, olives, and oregano.",
            "item_pizza_7": "Portuguesa",
            "desc_pizza_7": "Creamy mozzarella, ham, hard-boiled egg, onion, black olives, and oregano.",
            "item_pizza_8": "Corn",
            "desc_pizza_8": "Creamy mozzarella, corn, olives, and oregano.",
            "item_pizza_9": "Neapolitan",
            "desc_pizza_9": "Creamy mozzarella, tomato, ham, olives, basil, and oregano.",
            "item_pizza_10": "Pepperoni",
            "desc_pizza_10": "Creamy mozzarella, oregano, and pepperoni.",
            "item_pizza_11": "Terra",
            "desc_pizza_11": "Creamy mozzarella, bacon, and oregano.",
            "item_pizza_12": "Calabresa",
            "desc_pizza_12": "Creamy mozzarella, calabresa, onion (optional), and oregano.",
            "item_pizza_13": "Arugula",
            "desc_pizza_13": "Creamy mozzarella, prosciutto, arugula, cherry tomatoes, and oregano.",

            "item_pizza_sweet_1": "Sensation",
            "desc_pizza_sweet_1": "Mozzarella, Nutella, strawberry, and powdered sugar.",
            "item_pizza_sweet_2": "PRESTIGIO",
            "desc_pizza_sweet_2": "Mozzarella, shredded coconut, topped with condensed milk, dark or white chocolate.",
            "item_pizza_sweet_3": "Bônoffee",
            "desc_pizza_sweet_3": "Mozzarella, banana, cinnamon, and dulce de leche.",

            "item_lomito_1": "Regular",
            "desc_lomito_1": "Pita bread, meat or chicken, and cabbage.",
            "item_lomito_2": "Full",
            "desc_lomito_2": "Pita bread, meat or chicken, cabbage, and catupiry cheese.",
            
            "item_sandwich_lomito_1": "Simple",
            "desc_sandwich_lomito_1": "Bread, meat, mozzarella cheese, lettuce, and tomato.",
            "item_sandwich_lomito_2": "Full",
            "desc_sandwich_lomito_2": "Bread, meat, mozzarella cheese, lettuce, tomato, and egg.",
            "item_sandwich_lomito_3": "Terra",
            "desc_sandwich_lomito_3": "Bread, meat, mozzarella cheese, bacon, caramelized onion, lettuce, tomato, and egg.",
            
            "item_sandwich_pollo_1": "Simple Sandwich",
            "desc_sandwich_pollo_1": "Bread, chicken, mozzarella cheese, lettuce, and tomato.",
            "item_sandwich_pollo_2": "Full Sandwich",
            "desc_sandwich_pollo_2": "Bread, chicken, mozzarella cheese, lettuce, tomato, and egg.",
            "item_sandwich_pollo_3": "Terra Sandwich",
            "desc_sandwich_pollo_3": "Bread, chicken, mozzarella cheese, bacon, caramelized onion, lettuce, tomato, and egg.",

            "item_appetizer_1": "French Fries",
            "item_appetizer_2": "Fried Cassava",
            "item_appetizer_3": "Frango a Passarinho",
            "desc_appetizer_3": "Includes 8 pieces of chicken with french fries or fried cassava.",
            "item_appetizer_4": "Calabresa with Fries",
            "desc_appetizer_4": "Crispy french fries, calabresa slices, and sautéed onion.",

            "item_drink_1": "Water",
            "desc_drink_1": "Still or sparkling.",
            "item_drink_2": "Natural Juices",
            "desc_drink_2": "Peach, Pineapple, Orange, Lemon.",
            "drink_size_large_pitcher": "Large Pitcher",
            "drink_size_small_pitcher": "Small Pitcher",
            "drink_size_glass": "Glass",
            "item_drink_3": "Antarctica",
            "desc_drink_3": "Regular and Zero",
            "item_drink_4": "Coca Cola",
            "desc_drink_4": "Regular and Zero",
            "item_drink_5": "Fanta",
            "desc_drink_5": "Orange, Guarana, Pineapple.",
            "item_drink_6": "Sprite",
            "desc_drink_6": "Regular and Zero.",
            "item_drink_7": "Schweppes",
            "desc_drink_7": "Citrus and Tonic.",

            "item_cocktail_1": "Aperol Spritz",
            "desc_cocktail_1": "Aperol, prosecco, soda, ice, and an orange slice.",
            "item_cocktail_2": "Gin and Tonic",
            "desc_cocktail_2": "Gin, tonic water, ice, and a slice of lemon or cucumber.",
            "item_cocktail_3": "Caipiroska",
            "desc_cocktail_3": "Vodka, lime, sugar, and crushed ice.",
            "item_cocktail_4": "Caipirinha",
            "desc_cocktail_4": "Cachaça, lime, sugar, and crushed ice.",
            "item_cocktail_5": "Fernet and Coke",
            "desc_cocktail_5": "Fernet, cola, and ice.",
            "item_cocktail_6": "Sangria",
            "desc_cocktail_6": "Red wine, orange or lemon soda, chopped fruits (like orange, apple, lemon, peach), and optionally a splash of liqueur.",
            "list_wines": "WINES",
            "list_beers": "Beers",
            "list_drafts": "Glasses",
            "wine_1": "Alma Mora Norma",
            "wine_2": "Gran Hacienda",
            "wine_3": "Terra Noble Car Alma",
            "wine_4": "Mora Black Norton",
            "wine_5": "Alma Mora Black",
            "wine_6": "Carmen Synal",
            "wine_7": "Santa Julia Malbec",
            "wine_8": "Benjamín Malbec",
            "wine_9": "Casa Sibra Malbec",
            "wine_10": "Male Gascon Malbec",
            "wine_11": "Glass of wine",
            "beer_1": "Heineken (650 ml)",
            "beer_2": "Miller Beer",
            "beer_3": "Corona (650 ml)",
            "beer_4": "Munich (650 ml)",
            "beer_5": "Heineken 0 (300 ml)",
            "draft_1": "Munich Draft 500ml",
            "draft_2": "Munich Draft 360ml",
            "draft_3": "2x1 Draft 360ml"
        }
    },
    // -------------------------------------
    // PORTUGUÉS
    // -------------------------------------
    pt: {
        index: {
            "meta_description": "Descubra o menu digital do TERRA BRASIL. Sabores autênticos, promoções especiais e serviço de delivery.",
            "page_title": "Menu Digital - Restaurante TERRA BRASIL",
            "main_tagline": "Descubra um mundo de sabores autênticos.",
            "delivery_service": "SERVIÇO DE",
            "delivery_title": "DELIVERY",
            "events_title": "Eventos",
            "discount_title": "DESCONTO",
            "discount_percentage": "20%",
            "discount_on": "EM CARNES",
            "terra_brasil_card": "TERRA BRÁSIL",
            "patio_terra_card": "PATIO TERRA",
            "copyright": "© 2025 Restaurante TERRA BRASIL. Todos os direitos reservados.",
            "developed_by": "Menu digital desenvolvido por"
        },
        terraBrasil: {
            "meta_description": "Menu do buffet TERRA BRASIL. Rodízio, churrasco e a melhor comida brasileira.",
            "page_title": "Menu Buffet - TERRA BRASIL",
            "back_to_home": "Voltar à página inicial",
            "main_tagline": "Descubra um mundo de sabores autênticos.",
            "buffet_title": "Rodízio",
            "weekdays": "Segunda a Sexta",
            "weekends": "Sábado e Domingo",
            "price_by_kilo_prefix": "OPÇÃO POR QUILO:",
            "price_by_kilo_suffix": "A CADA 100 GRAMAS",
            "menu_title": "Cardápio",
            "category_main": "Pratos Principais",
            "category_sides": "Acompanhamentos",
            "category_grill": "Churrasco",
            "category_salads": "Saladas",
            "category_drinks": "Bebidas",
            "category_desserts": "Sobremesas",
            "category_coffee": "Café e Chá",
            "copyright": "© 2025 Restaurante TERRA BRASIL. Todos os direitos reservados.",
            "developed_by": "Menu digital desenvolvido por",

            // PRATOS PRINCIPAIS
            "item_feijoada_completa_title": "Feijoada Completa",
            "item_feijoada_completa_desc": "Prato tradicional brasileiro com feijão preto, carnes defumadas, linguiça, costela, acompanhado de arroz, farofa e laranja.",
            "item_feijoada_preto_title": "Feijão Preto",
            "item_feijoada_preto_desc": "Versão mais simples da feijoada, focada no feijão preto com carne de porco e embutidos.",
            "item_poroto_carioca_title": "Feijão Carioca",
            "item_poroto_carioca_desc": "Feijão cozido com especiarias, carne ou embutidos, muito consumido na culinária brasileira diária.",
            "item_cazuela_mondongo_title": "Dobradinha",
            "item_cazuela_mondongo_desc": "Guisado de dobradinha (bucho) com vegetais, batatas, tomate e temperos, típico do Paraguai.",
            "item_escalopirio_carne_title": "Bife à Milanesa ao Molho",
            "item_escalopirio_carne_desc": "Bifes de carne empanados, cozidos em molho suave de tomate, cebola e pimentão.",
            "item_pollo_escabeche_title": "Frango em Escabeche",
            "item_pollo_escabeche_desc": "Frango marinado em vinagre, cebola, cenoura e especiarias, servido frio ou morno.",
            "item_estofado_carne_title": "Carne de Panela",
            "item_estofado_carne_desc": "Carne cozida em fogo baixo com batatas, cenouras, cebola, tomate e especiarias.",
            "item_pollo_agridulce_title": "Frango Agridoce",
            "item_pollo_agridulce_desc": "Frango salteado com pimentão e abacaxi, em molho agridoce à base de soja e açúcar.",
            "item_canelon_title": "Canelone de Carne / Frango",
            "item_canelon_desc": "Massa recheada com carne ou frango, servida com molho vermelho ou branco e gratinada com queijo.",
            "item_lasana_title": "Lasanha de Carne / Frango / Presunto e Queijo",
            "item_lasana_desc": "Camadas de massa intercaladas com molhos, carne, frango ou presunto e queijo, gratinada.",
            "item_strogonoff_title": "Strogonoff de Carne / Frango",
            "item_strogonoff_desc": "Prato brasileiro à base de tiras de carne ou frango em molho cremoso com champignon.",
            "item_duquesa_pollo_title": "Frango à Cordon Bleu",
            "item_duquesa_pollo_desc": "Peito de frango recheado com presunto e queijo, empanado e frito.",
            "item_milanesa_title": "Bife à Milanesa (Carne / Frango)",
            "item_milanesa_desc": "Carne ou frango empanado com farinha de rosca e frito, um clássico no Paraguai.",
            "item_milanesa_caballo_title": "Bife à Cavalo (Milanesa)",
            "item_milanesa_caballo_desc": "Bife à milanesa servido com ovo frito por cima.",
            "item_milanesa_napolitana_title": "Milanesa à Napolitana",
            "item_milanesa_napolitana_desc": "Bife à milanesa coberto com molho de tomate, presunto и queijo gratinado.",
            "item_bife_caballo_title": "Bife a Cavalo com Ovo",
            "item_bife_caballo_desc": "Bife de carne na chapa servido com ovo frito.",
            "item_besito_vino_title": "Almôndegas ao Vinho",
            "item_besito_vino_desc": "Almôndegas de carne cozidas em molho de vinho e tomate.",
            "item_marinera_title": "Iscas de Carne / Frango",
            "item_marinera_desc": "Carne ou frango empanado em massa de farinha e frito, típico do Paraguai.",
            "item_marinera_napolitana_title": "Iscas à Napolitana",
            "item_marinera_napolitana_desc": "Iscas de carne cobertas com molho de tomate, presunto e queijo.",
            "item_pollo_crema_title": "Frango ao Creme",
            "item_pollo_crema_desc": "Frango cozido em molho cremoso de leite ou nata com cebola e champignon.",
            "item_sufle_title": "Suflê de Legumes / Presunto e Queijo",
            "item_sufle_desc": "Preparação assada de legumes ou presunto com queijo em mistura de ovos batidos.",
            "item_grille_cebolla_title": "Bife Acebolado",
            "item_grille_cebolla_desc": "Carne na chapa acompanhada de cebola caramelizada.",
            "item_grille_napolitana_title": "Bife à Napolitana (Grelhado)",
            "item_grille_napolitana_desc": "Carne grelhada coberta com molho de tomate, presunto e queijo.",
            "item_costeleta_cerdo_title": "Costeleta de Porco",
            "item_costeleta_cerdo_desc": "Costeleta de porco na chapa ou frita, marinada com especiarias.",

            // ACOMPANHAMENTOS
            "item_arroz_ajo_title": "Arroz com Alho",
            "item_arroz_ajo_desc": "Arroz refogado com alho dourado no óleo, de sabor intenso.",
            "item_fideo_ajo_title": "Macarrão Alho e Óleo",
            "item_fideo_ajo_desc": "Massa salteada com alho e azeite.",
            "item_fideo_manteca_title": "Macarrão na Manteiga",
            "item_fideo_manteca_desc": "Macarrão misturado com manteiga derretida.",
            "item_fideo_crema_title": "Macarrão ao Molho Branco",
            "item_fideo_crema_desc": "Massa servida com molho cremoso.",
            "item_fideo_pesto_title": "Macarrão ao Pesto",
            "item_fideo_pesto_desc": "Macarrão acompanhado de molho de manjericão, alho e queijo.",
            "item_fideo_chino_title": "Yakisoba",
            "item_fideo_chino_desc": "Macarrão salteado com legumes e molho de soja.",
            "item_fideo_carbonara_title": "Macarrão à Carbonara",
            "item_fideo_carbonara_desc": "Massa com creme, bacon e queijo ralado.",
            "item_arroz_queso_title": "Arroz com Queijo",
            "item_arroz_queso_desc": "Arroz cremoso com queijo derretido.",
            "item_noquis_title": "Nhoque",
            "item_noquis_desc": "Massas de batata misturadas com farinha, cozidas e servidas com molho.",
            "item_ravioles_title": "Ravióli de Frango / Presunto / Carne",
            "item_ravioles_desc": "Massa recheada com frango, presunto ou carne, servida com molho.",
            "item_arroz_primavera_title": "Arroz Primavera",
            "item_arroz_primavera_desc": "Arroz com legumes variados como cenoura, ervilhas e milho.",
            "item_arroz_piamontese_title": "Arroz à Piemontese",
            "item_arroz_piamontese_desc": "Arroz cremoso com champignon e creme de leite.",

            // CHURRASCO
            "item_vacio_title": "Fraldinha",
            "item_vacio_desc": "Um clássico do churrasco, corte suculento e macio da parte inferior do boi.",
            "item_costilla_title": "Costela",
            "item_costilla_desc": "Corte tradicional muito valorizado pelo seu sabor e suculência.",
            "item_cupim_title": "Cupim",
            "item_cupim_desc": "Corte típico do Brasil, extraído do boi Zebu. Com textura marmorizada e muito saboroso, é preparado em fogo baixo.",
            "item_bondiola_title": "Bondiola de Porco",
            "item_bondiola_desc": "Parte do pescoço do porco, reconhecida pelo seu sabor profundo e maciez.",

            // SALADAS
            "item_ensalada_papa_title": "Salada de Maionese",
            "item_ensalada_papa_desc": "Batatas cozidas misturadas com maionese, cebola, ovo cozido e salsa.",
            "item_ensalada_alemana_title": "Salada Alemã",
            "item_ensalada_alemana_desc": "Batatas cozidas, salsichas, cebola e maionese, típica da culinária teuto-brasileira.",
            "item_ensalada_rusa_title": "Salada Russa",
            "item_ensalada_rusa_desc": "Batatas, cenouras, ervilhas e maionese.",
            "item_ensalada_arroz_title": "Salada de Arroz",
            "item_ensalada_arroz_desc": "Arroz frio acompanhado de legumes, às vezes com frango ou presunto.",
            "item_ensalada_poroto_title": "Salada de Feijão",
            "item_ensalada_poroto_desc": "Feijão cozido com cebola, tomate, pimentão e molho de vinagre.",
            "item_ensalada_lechuga_title": "Salada de Alface",
            "item_ensalada_lechuga_desc": "Folhas frescas de alface com molho simples de azeite e limão.",
            "item_ensalada_lechuga_repollada_title": "Salada de Alface Americana",
            "item_ensalada_lechuga_repollada_desc": "Alface finamente picada com molho leve.",
            "item_ensalada_bailarina_title": "Salada Bailarina",
            "item_ensalada_bailarina_desc": "Salada colorida de vegetais variados, semelhante à salada primavera.",
            "item_ensalada_tomate_title": "Salada de Tomate",
            "item_ensalada_tomate_desc": "Fatias de tomate fresco com cebola, azeite e vinagre.",
            "item_ensalada_repollo_title": "Salada de Repolho Branco com Roxo",
            "item_ensalada_repollo_desc": "Repolho branco e roxo em juliana, temperado com vinagrete.",
            "item_ensalada_cebolla_vinagreta_title": "Salada de Cebola ao Vinagrete",
            "item_ensalada_cebolla_vinagreta_desc": "Cebola fatiada com vinagre, azeite e temperos.",
            "item_vinagreta_verdura_title": "Vinagrete de Legumes",
            "item_vinagreta_verdura_desc": "Legumes variados (pimentão, cebola, tomate) marinados em vinagre.",
            "item_pepino_agridulce_title": "Pepino Agridoce",
            "item_pepino_agridulce_desc": "Pepino em rodelas com mistura de vinagre, açúcar e sal.",
            "item_ensalada_huevo_title": "Salada de Ovo",
            "item_ensalada_huevo_desc": "Ovos cozidos picados com maionese e legumes.",
            "item_ensalada_remolacha_title": "Salada de Beterraba",
            "item_ensalada_remolacha_desc": "Beterrabas cozidas com cebola e tempero simples.",
            "item_verdura_primavera_title": "Legumes Primavera",
            "item_verdura_primavera_desc": "Mistura de legumes da estação como cenoura, ervilhas e milho.",
            "item_repollo_ajo_title": "Repolho ao Alho",
            "item_repollo_ajo_desc": "Repolho refogado ou marinado com alho.",
            "item_ensalada_mixta_title": "Salada Mista",
            "item_ensalada_mixta_desc": "Combinação de alface, tomate, cebola e pepino.",
            "item_salpicon_pollo_title": "Salpicão de Frango",
            "item_salpicon_pollo_desc": "Frango desfiado misturado com legumes e maionese.",
            "item_berro_title": "Agrião",
            "item_berro_desc": "Folhas frescas de agrião, servidas como salada simples.",
            "item_rucula_title": "Rúcula",
            "item_rucula_desc": "Folhas frescas de rúcula, de sabor amargo e picante.",
            
            // BEBIDAS
            "item_agua_title": "Água",
            "item_agua_desc": "Com ou sem gás.",
            "item_jugos_title": "Sucos Naturais",
            "item_jugos_desc": "Pêssego, Abacaxi, Laranja, Limão.",
            "drink_size_large_pitcher": "Jarra Grande",
            "drink_size_small_pitcher": "Jarra Pequena",
            "drink_size_glass": "Copo",
            "item_antarctica_title": "Antarctica",
            "item_antarctica_desc": "Normal e Zero",
            "item_cocacola_title": "Coca Cola",
            "item_cocacola_desc": "Normal e Zero",
            "item_fanta_title": "Fanta",
            "item_fanta_desc": "Laranja, Guaraná, Abacaxi.",
            "item_sprite_title": "Sprite",
            "item_sprite_desc": "Normal e Zero.",
            "item_schweppes_title": "Schweppes",
            "item_schweppes_desc": "Citrus e Tônica.",

            // SOBREMESAS
            "item_flan_leche_title": "Pudim de Leite",
            "item_flan_leche_desc": "Clássico pudim de ovos com calda de caramelo, suave e cremoso.",
            "item_flan_helado_title": "Pudim com Sorvete",
            "item_flan_helado_desc": "Sobremesa clássica de pudim cremoso acompanhado de uma bola de sorvete.",
            "item_arroz_leche_title": "Arroz Doce",
            "item_arroz_leche_desc": "Sobremesa tradicional de arroz cremoso com leite, aromatizado com canela e um toque de baunilha.",
            "item_mousse_maracuya_title": "Mousse de Maracujá",
            "item_mousse_maracuya_desc": "Sobremesa cremosa brasileira feita com polpa de maracujá, leite condensado e creme de leite.",
            "item_helado_copa_title": "Sorvete na Taça",
            "item_helado_copa_desc": "",

            // CAFÉ E CHÁ
            "item_cafe_title": "Café",
            "item_cafe_desc": "Espresso, Americano, Café com Leite",
            "item_te_title": "Chá",
            "item_te_desc": "Chá de Boldo, Camomila, Verde, Vermelho, Erva-doce, Hortelã, Limão"
        },
        patioTerra: {
            "meta_description": "Descubra o menu digital do Patio Terra. Hambúrgueres, pizzas, lomitos e mais.",
            "page_title": "Menu Digital - Patio Terra",
            "back_to_home": "Voltar à página inicial",
            "main_tagline": "Descubra um mundo de sabores autênticos.",
            "menu_title": "Cardápio",
            "category_burgers": "Hambúrguer",
            "category_pizzas": "Pizza",
            "category_lomito": "Lomito Árabe",
            "category_sandwiches": "Sanduíche",
            "category_appetizers": "Para Petiscar",
            "category_drinks": "Bebidas",
            "category_cocktails": "Coquetéis e Destilados",
            "extras_button": "Adicionais",
            "pizzas_dulces": "PIZZAS DOCES",
            "sandwich_lomito": "SANDUÍCHE DE LOMITO",
            "sandwich_pollo": "SANDUÍCHE DE FRANGO",
            "copyright": "© 2025 Restaurante TERRA BRASIL. Todos os direitos reservados.",
            "developed_by": "Menu digital desenvolvido por",

            // Traduções dos Itens do Menu
            "extra_egg": "Ovo",
            "extra_caramelized_onion": "Cebola caramelizada",
            "extra_cheddar": "Cheddar",
            "extra_catupiry": "Catupiry",
            "extra_bacon": "Bacon",
            "extra_meat": "Carne",
            "extra_sauce": "Molho Extra",
            "extra_catupiry_cheese": "Queijo catupiry",
            "extra_mozzarella_cheese": "Queijo muçarela",
            "extra_calabresa_slices": "Rodelas de calabresa",
            "extra_hard_boiled_egg": "Ovo cozido",
            "extra_garlic_sauce": "Molho de alho",
            "extra_olive": "Azeitona",

            "item_burger_1": "Hambúrguer Simples",
            "desc_burger_1": "Pão, carne, queijo cheddar.",
            "item_burger_2": "Hambúrguer Completo",
            "desc_burger_2": "Pão, carne, queijo cheddar, alface, tomate e ovo.",
            "item_burger_3": "Hambúrguer Terra",
            "desc_burger_3": "Pão, carne, queijo cheddar, cebola caramelizada, bacon, alface, tomate e ovo.",
            
            "item_pizza_1": "MARGUERITA",
            "desc_pizza_1": "Muçarela cremosa, tomate, azeitona e orégano.",
            "item_pizza_2": "Vegetariana",
            "desc_pizza_2": "Muçarela cremosa, cebola, pimentão, tomate, milho, palmito, azeitona e orégano.",
            "item_pizza_3": "Frango com Catupiry",
            "desc_pizza_3": "Muçarela cremosa, frango desfiado, catupiry, azeitona e orégano.",
            "item_pizza_4": "Palmito",
            "desc_pizza_4": "Muçarela cremosa, palmito, catupiry, azeitona e orégano.",
            "item_pizza_5": "4 Queijos",
            "desc_pizza_5": "Muçarela cremosa, provolone, parmesão, gorgonzola, azeitona e orégano.",
            "item_pizza_6": "Alho e Óleo",
            "desc_pizza_6": "Muçarela cremosa, alho, azeite, azeitona e orégano.",
            "item_pizza_7": "Portuguesa",
            "desc_pizza_7": "Muçarela cremosa, presunto, ovo cozido, cebola, azeitona preta e orégano.",
            "item_pizza_8": "Milho",
            "desc_pizza_8": "Muçarela cremosa, milho, azeitona e orégano.",
            "item_pizza_9": "Napolitana",
            "desc_pizza_9": "Muçarela cremosa, tomate, presunto, azeitona, manjericão e orégano.",
            "item_pizza_10": "Pepperoni",
            "desc_pizza_10": "Muçarela cremosa, orégano e pepperoni.",
            "item_pizza_11": "Terra",
            "desc_pizza_11": "Muçarela cremosa, bacon e orégano.",
            "item_pizza_12": "Calabresa",
            "desc_pizza_12": "Muçarela cremosa, calabresa, cebola (opcional) e orégano.",
            "item_pizza_13": "Rúcula",
            "desc_pizza_13": "Muçarela cremosa, presunto cru, rúcula, tomate cereja e orégano.",
            
            "item_pizza_sweet_1": "Sensação",
            "desc_pizza_sweet_1": "Muçarela, Nutella, morango e açúcar de confeiteiro.",
            "item_pizza_sweet_2": "PRESTÍGIO",
            "desc_pizza_sweet_2": "Muçarela, coco ralado, coberta com leite condensado, chocolate preto ou branco.",
            "item_pizza_sweet_3": "Bônoffee",
            "desc_pizza_sweet_3": "Muçarela, banana, canela e doce de leite.",

            "item_lomito_1": "Normal",
            "desc_lomito_1": "Pão sírio, carne ou frango, e repolho.",
            "item_lomito_2": "Completo",
            "desc_lomito_2": "Pão sírio, carne ou frango, repolho e queijo catupiry.",
            
            "item_sandwich_lomito_1": "Simples",
            "desc_sandwich_lomito_1": "Pão, carne, queijo muçarela, alface e tomate.",
            "item_sandwich_lomito_2": "Completo",
            "desc_sandwich_lomito_2": "Pão, carne, queijo muçarela, alface, tomate e ovo.",
            "item_sandwich_lomito_3": "Terra",
            "desc_sandwich_lomito_3": "Pão, carne, queijo muçarela, bacon, cebola caramelizada, alface, tomate e ovo.",
            
            "item_sandwich_pollo_1": "Sanduíche Simples",
            "desc_sandwich_pollo_1": "Pão, frango, queijo muçarela, alface e tomate.",
            "item_sandwich_pollo_2": "Sanduíche Completo",
            "desc_sandwich_pollo_2": "Pão, frango, queijo muçarela, alface, tomate e ovo.",
            "item_sandwich_pollo_3": "Sanduíche Terra",
            "desc_sandwich_pollo_3": "Pão, frango, queijo muçarela, bacon, cebola caramelizada, alface, tomate e ovo.",
            
            "item_appetizer_1": "Batatas Fritas",
            "item_appetizer_2": "Mandioca Frita",
            "item_appetizer_3": "Frango a Passarinho",
            "desc_appetizer_3": "Inclui 8 pedaços de frango com batatas fritas ou mandioca frita.",
            "item_appetizer_4": "Calabresa com Fritas",
            "desc_appetizer_4": "Batatas fritas crocantes, rodelas de calabresa e cebola refogada.",

            "item_drink_1": "Água",
            "desc_drink_1": "Com ou sem gás.",
            "item_drink_2": "Sucos Naturais",
            "desc_drink_2": "Pêssego, Abacaxi, Laranja, Limão.",
            "drink_size_large_pitcher": "Jarra Grande",
            "drink_size_small_pitcher": "Jarra Pequena",
            "drink_size_glass": "Copo",
            "item_drink_3": "Antarctica",
            "desc_drink_3": "Normal e Zero",
            "item_drink_4": "Coca Cola",
            "desc_drink_4": "Normal e Zero",
            "item_drink_5": "Fanta",
            "desc_drink_5": "Laranja, Guaraná, Abacaxi.",
            "item_drink_6": "Sprite",
            "desc_drink_6": "Normal e Zero.",
            "item_drink_7": "Schweppes",
            "desc_drink_7": "Citrus e Tônica.",

            "item_cocktail_1": "Aperol Spritz",
            "desc_cocktail_1": "Aperol, prosecco, água com gás, gelo e uma rodela de laranja.",
            "item_cocktail_2": "Gin Tônica",
            "desc_cocktail_2": "Gin, água tônica, gelo e uma rodela de limão ou pepino.",
            "item_cocktail_3": "Caipiroska",
            "desc_cocktail_3": "Vodka, limão, açúcar e gelo picado.",
            "item_cocktail_4": "Caipirinha",
            "desc_cocktail_4": "Cachaça, limão, açúcar e gelo picado.",
            "item_cocktail_5": "Fernet com Coca",
            "desc_cocktail_5": "Fernet, refrigerante de cola e gelo.",
            "item_cocktail_6": "Sangria",
            "desc_cocktail_6": "Vinho tinto, refrigerante de laranja ou limão, frutas picadas (como laranja, maçã, limão, pêssego) e, opcionalmente, um toque de licor.",
            "list_wines": "VINHOS",
            "list_beers": "Cervejas",
            "list_drafts": "Copos",
            "wine_1": "Alma mora Norma",
            "wine_2": "Gran Hacienda",
            "wine_3": "Terra Noble Car Alma",
            "wine_4": "Mora Black Norton",
            "wine_5": "Alma Mora Black",
            "wine_6": "Carmen Synal",
            "wine_7": "Santa Julia Malbec",
            "wine_8": "Benjamín Malbec",
            "wine_9": "Casa Sibra Malbec",
            "wine_10": "Male Gascon Malbec",
            "wine_11": "Taça de vinho",
            "beer_1": "Heineken (650 ml)",
            "beer_2": "Cerveja Miller",
            "beer_3": "Corona (650 ml)",
            "beer_4": "Munich (650 ml)",
            "beer_5": "Heineken 0 (300 ml)",
            "draft_1": "Chopp Munich 500",
            "draft_2": "Chopp Munich 360",
            "draft_3": "2x1 Chopp 360"
        }
    }
};

/* =================================================================
    BLOQUE 2: LÓGICA DE TRADUCCIÓN Y MANEJO DE EVENTOS
================================================================== */

/**
 * Obtiene un parámetro por su nombre desde la URL actual.
 * @param {string} name - El nombre del parámetro a buscar.
 * @returns {string|null} - El valor del parámetro o null si no se encuentra.
 */
function getParameterByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * Aplica las traducciones a la página actual y actualiza los enlaces.
 */
function applyTranslations() {
    const lang = getParameterByName('lang') || 'es'; // Idioma por defecto es 'es'
    const pageKey = document.body.getAttribute('data-page');

    if (!pageKey || !translations[lang] || !translations[lang][pageKey]) {
        console.warn(`Traducciones no encontradas para la página: ${pageKey} en el idioma: ${lang}`);
        return;
    }
    
    const pageTranslations = translations[lang][pageKey];

    // Aplica las traducciones a todos los elementos con 'data-translate-key'
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (pageTranslations[key] !== undefined) {
             if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
                element.setAttribute('content', pageTranslations[key]);
            } else if (element.hasAttribute('aria-label')) {
                 element.setAttribute('aria-label', pageTranslations[key]);
            } else {
                element.innerHTML = pageTranslations[key];
            }
        }
    });

    // Actualiza el título de la página
    if (pageTranslations.page_title) {
        document.title = pageTranslations.page_title;
    }

    // Actualiza el texto del botón de idioma
    const langButtonText = document.getElementById('language-btn-text');
    if (langButtonText) {
        langButtonText.textContent = lang.toUpperCase();
    }
    
    // *** LA CLAVE PARA ARREGLAR EL BOTÓN DE IDIOMA ***
    // Esta función actualiza los href="#" de los botones del dropdown
    // para que apunten a la página actual con el nuevo idioma.
    document.querySelectorAll('.dropdown-item[data-lang]').forEach(link => {
        const newLang = link.getAttribute('data-lang');
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        link.href = `${currentPath}?lang=${newLang}`;
    });

    // *** LA CLAVE PARA QUE EL IDIOMA SEA "GLOBAL" ***
    // Actualiza los enlaces de navegación principales para que conserven el idioma seleccionado.
    document.querySelectorAll('a').forEach(link => {
        // Solo modificar enlaces internos que llevan a otras páginas .html
        if (link.href && link.href.includes('.html') && !link.getAttribute('data-lang')) {
            try {
                const url = new URL(link.href);
                // Asegurarse de que sea un enlace del mismo sitio
                if (url.hostname === window.location.hostname) {
                    url.searchParams.set('lang', lang);
                    link.href = url.toString();
                }
            } catch(e) { /* Ignorar si no es una URL válida */ }
        }
    });
}

/**
 * Configura la lógica de los menús con pestañas (Tabs).
 */
function setupMenuTabs() {
    const pageKey = document.body.getAttribute('data-page');
    // Solo ejecutar en las páginas que tienen este sistema de menú
    if (pageKey !== 'terraBrasil' && pageKey !== 'patioTerra') return;

    const menuTabsSection = document.getElementById('menu-completo-tabs');
    const menuContent = document.getElementById('menuTabContent');
    const allTabs = document.querySelectorAll('[data-bs-toggle="tab"]');
    const backButton = document.querySelector('.fixed-home-btn');

    if (!menuTabsSection || !menuContent) return;
    
    // Ocultar el contenido de los platos por defecto
    menuContent.style.display = 'none';

    allTabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            menuTabsSection.style.display = 'none';
            menuContent.style.display = 'block';
            const bootstrapTab = new bootstrap.Tab(this);
            bootstrapTab.show();
        });
    });

    if (backButton) {
        backButton.addEventListener('click', function(event) {
            if (menuContent.style.display === 'block') {
                event.preventDefault();
                menuContent.style.display = 'none';
                menuTabsSection.style.display = 'block';
                const activeTab = menuContent.querySelector('.tab-pane.active');
                if (activeTab) activeTab.classList.remove('active', 'show');
            }
        });
    }
}

// --- EVENTO PRINCIPAL ---
// Se ejecuta cuando el HTML ha cargado completamente.
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    setupMenuTabs();
});