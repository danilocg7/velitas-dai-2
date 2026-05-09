const productos = [
    {
        id: "prod-01",
        nombre: "Vela Bubble",
        descripcion: "Vela decorativa con aroma a elección.",
        precio: 210,
        stock: true,
        imagen: "img/Velas_deco/bubble.jpg",
        categoria: "Velas decorativas"
    },

    {
        id: "prod-02",
        nombre: "Corazones apilados",
        descripcion: "Par de corazones apilados...",
        precio: 150,
        stock: false,
        imagen: "img/Velas_deco/corazones_apilados.jpg",
        categoria: "Velas decorativas"
    },

    {
        id: "prod-03",
        nombre: "Vela Torneada",
        descripcion: "Vela decorativa con aroma y color a elección.",
        precio: 195,
        stock: true,
        imagen: "img/Velas_deco/vela_torneada.jpg",
        categoria: "Velas decorativas"
    },

    {
        id: "prod-04",
        nombre: "Flor Peonia",
        descripcion: "Vela decorativa con aroma y color a elección.",
        precio: 230,
        stock: true,
        imagen: "img/Velas_deco/flor_peonia.png",
        categoria: "Velas decorativas"
    },

    {
        id: "prod-05",
        nombre: "Ramo Tulipan",
        descripcion: "Vela decorativa con aroma y color a elección.",
        precio: 230,
        stock: false,
        imagen: "img/Velas_deco/Ramo_tulipan.jpg",
        categoria: "Velas decorativas"
    },

    {
        id: "prod-06",
        nombre: "Mini Bubble",
        descripcion: "Vela decorativa con aroma a elección.",
        precio: 130,
        stock: true,
        imagen: "img/Velas_deco/mini_bubble.jpg",
        categoria: "Velas decorativas"
    },

    {
        id: "prod-07",
        nombre: "Vela Tornado",
        descripcion: "Vela decorativa con aroma y color a elección.",
        precio: 195,
        stock: true,
        imagen: "img/Velas_deco/tornado.jpg",
        categoria: "Velas decorativas"
    },

    {
        id: "prod-08",
        nombre: "Vela Nudo",
        descripcion: "Vela decorativa con aroma y color a elección.",
        precio: 170,
        stock: true,
        imagen: "img/Velas_deco/nudo.jpg",
        categoria: "Velas decorativas"
    },

    {
        id: "prod-09",
        nombre: "Barco Souvenir",
        descripcion: "Ideales para souvenirs, puede venir con bolsita y tarjetita personalizada si lo desea. Mínimo 20 unidades.",
        precio: null,
        stock: true,
        imagen: "img/Souvenirs/barco_souv.jpeg",
        categoria: "Souvenirs"
    },

    {
        id: "prod-10",
        nombre: "Mini Miel Souvenir",
        descripcion: "Ideales para souvenirs, puede venir con bolsita y tarjetita personalizada si lo desea. Mínimo 20 unidades.",
        precio: null,
        stock: true,
        imagen: "img/Souvenirs/mini_miel_souv.jpeg",
        categoria: "Souvenirs"
    },

    {
        id: "prod-11",
        nombre: "Ositos Souvenir",
        descripcion: "Ideales para souvenirs, puede venir con bolsita y tarjetita personalizada si lo desea. Mínimo 20 unidades.",
        precio: null,
        stock: true,
        imagen: "img/Souvenirs/ositos_souv.png",
        categoria: "Souvenirs"
    },

    {
        id: "prod-12",
        nombre: "Mini Rosa Souvenir",
        descripcion: "Cotizar según cantidad, mínimo para precio por mayor 15 unidades.",
        precio: null,
        stock: true,
        imagen: "img/Souvenirs/mini_rosa_souv.jpg",
        categoria: "Souvenirs"
    },

    {
        id: "prod-13",
        nombre: "Mini Bubble Souvenir",
        descripcion: "Cotizar según cantidad, mínimo para precio por mayor 15 unidades.",
        precio: null,
        stock: true,
        imagen: "img/Souvenirs/mini_bubble_souv.JPG",
        categoria: "Souvenirs"
    },

    {
        id: "prod-14",
        nombre: "Nubes aromáticas",
        descripcion: "Diseñados para perfumar tus espacios de forma práctica y duradera. Solo colocá un bombón en el hornito y dejá que el aroma transforme el ambiente.",
        precio: 300,
        stock: true,
        imagen: "img/Bombones_hornito/nubes_hornito.jpeg",
        categoria: "Bombones aromáticos para hornito"
    },

    {
        id: "prod-15",
        nombre: "Corazones aromáticos",
        descripcion: "Diseñados para perfumar tus espacios de forma práctica y duradera. Solo colocá un bombón en el hornito y dejá que el aroma transforme el ambiente.",
        precio: 300,
        stock: true,
        imagen: "img/Bombones_hornito/corazones_hornito.jpeg",
        categoria: "Bombones aromáticos para hornito"
    },

    {
        id: "prod-16",
        nombre: "Tableta para hornito",
        descripcion: "Diseñados para perfumar tus espacios de forma práctica y duradera. Solo colocá un bombón en el hornito y dejá que el aroma transforme el ambiente.",
        precio: 300,
        stock: true,
        imagen: "img/Bombones_hornito/chocolate_hornito.jpeg",
        categoria: "Bombones aromáticos para hornito"
    },

    {
        id: "prod-17",
        nombre: "Velas de miel x4",
        descripcion: "Elaboradas con cera pura de abeja, de aroma natural y cálido. Ideales para rituales de intención los días 11 y 22 ✨ Presentación: pack de 4 unidades.",
        precio: 300,
        stock: true,
        imagen: "img/Velitas_de_miel/miel_x4.jpeg",
        categoria: "Velas de miel"
    },

    {
        id: "prod-18",
        nombre: "Vela panal",
        descripcion: "Hecha con cera pura de abeja, de aroma natural y cálido. Ideal para rituales de intención los días 11 y 22 ✨",
        precio: 160,
        stock: true,
        imagen: "img/Velitas_de_miel/panal.jpeg",
        categoria: "Velas de miel"
    },

    {
        id: "prod-19",
        nombre: "Velas de miel x2",
        descripcion: "Cera pura de abeja, con aroma y color natural. Ideales para atraer buenas energías los días 11 y 22 ✨ Presentación: Pack x 2 unidades.",
        precio: 160,
        stock: true,
        imagen: "img/Velitas_de_miel/miel_x2.jpeg",
        categoria: "Velas de miel"
    },

    {
        id: "prod-20",
        nombre: "Capibara Souvenir",
        descripcion: "FALTA DESCRIPCIÓN",
        precio: null,
        stock: true,
        imagen: "img/Souvenirs/capibara_souv.jpeg",
        categoria: "Souvenirs"
    },

    {
        id: "prod-21",
        nombre: "Jirafa Souvenir",
        descripcion: "FALTA DESCRIPCIÓN",
        precio: null,
        stock: true,
        imagen: "img/Souvenirs/jirafa_souv.jpeg",
        categoria: "Souvenirs"
    }
];