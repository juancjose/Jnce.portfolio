/* Agregá, quitá o editá trabajos acá. Campos: title, description, tags, image (ej. "assets/img/remera.jpg"), link (opcional).
   Para la versión en inglés completá "en" con title, description y tags (si falta, se muestra el español).
   instagram (opcional): link a Instagram, se muestra como ícono redondo.
   gallery (opcional): lista de imágenes { src, caption, caption_en } que se abren en una galería al hacer clic. */
const PROJECTS = [
  { title: "CHIMANTEAM", description: "Indumentaria sublimada para CHIMANTEAM: enterito y remeras, con diseño del mockup y armado de cada pieza de la prenda lista para impresión.",
    tags: ["Sublimación", "Moldes", "Photoshop", "Illustrator"], image: "assets/img/chimanteam-mockup-4x3.webp", link: "",
    en: { title: "CHIMANTEAM", description: "Sublimated apparel for CHIMANTEAM: one-piece suit and T-shirts, with mockup design and layout of every garment piece ready for printing.", tags: ["Sublimation", "Patterns", "Photoshop", "Illustrator"] },
    gallery: [
      { src: "assets/img/chimanteam-mockup-4x3.webp", caption: "Mockup", caption_en: "Mockup" },
      { src: "assets/img/chimanteam-remera-negra-4x3.webp", caption: "Remera negra", caption_en: "Black t-shirt" },
      { src: "assets/img/chimanteam-remera-blanca-4x3.webp", caption: "Remera blanca", caption_en: "White t-shirt" },
      { src: "assets/img/chimanteam-photoshop-4x3.webp", caption: "Diseño en Photoshop", caption_en: "Design in Photoshop" },
      { src: "assets/img/chimanteam-moldes-4x3.webp", caption: "Moldes en Illustrator", caption_en: "Patterns in Illustrator" }
    ] },
  { title: "RVC", description: "Jerseys de ciclismo para el equipo RVC, en azul y blanco, manga corta y larga: mockups en Photoshop y moldes en Illustrator listos para sublimación.",
    tags: ["Sublimación", "Moldes", "Photoshop", "Illustrator"], image: "assets/img/rvc-azul-manga-larga-4x3.webp", link: "", instagram: "https://www.instagram.com/rvc.arg/",
    en: { title: "RVC", description: "Cycling jerseys for the RVC team, in navy and white, short and long sleeve: mockups in Photoshop and patterns in Illustrator ready for sublimation.", tags: ["Sublimation", "Patterns", "Photoshop", "Illustrator"] },
    gallery: [
      { src: "assets/img/rvc-azul-manga-larga-4x3.webp", caption: "Jersey azul manga larga", caption_en: "Navy long-sleeve jersey" },
      { src: "assets/img/rvc-azul-manga-corta-4x3.webp", caption: "Jersey azul manga corta", caption_en: "Navy short-sleeve jersey" },
      { src: "assets/img/rvc-azul-photoshop-4x3.webp", caption: "Mockup en Photoshop", caption_en: "Mockup in Photoshop" },
      { src: "assets/img/rvc-azul-moldes-4x3.webp", caption: "Moldes en Illustrator", caption_en: "Patterns in Illustrator" },
      { src: "assets/img/rvc-blanca-manga-larga-4x3.webp", caption: "Jersey blanco manga larga", caption_en: "White long-sleeve jersey" },
      { src: "assets/img/rvc-blanca-manga-corta-4x3.webp", caption: "Jersey blanco manga corta", caption_en: "White short-sleeve jersey" },
      { src: "assets/img/rvc-blanca-photoshop-4x3.webp", caption: "Mockup en Photoshop", caption_en: "Mockup in Photoshop" },
      { src: "assets/img/rvc-blanca-moldes-4x3.webp", caption: "Moldes en Illustrator", caption_en: "Patterns in Illustrator" }
    ] }
];
