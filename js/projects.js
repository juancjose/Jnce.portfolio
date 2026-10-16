/* Agregá, quitá o editá trabajos acá. Campos: title, description, tags, image (ej. "assets/img/remera.jpg"), link (opcional).
   Para la versión en inglés completá "en" con title, description y tags (si falta, se muestra el español).
   instagram (opcional): link a Instagram, se muestra como ícono redondo.
   credit (opcional): línea de crédito con link (ej. diseño de trama de otra persona).
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
    ] },
  { title: "KRC", description: "Jersey y enterito de triatlón y running para KRC (Kalos Running): mockups y moldes en Illustrator listos para sublimación, y prenda final producida.",
    tags: ["Sublimación", "Moldes", "Illustrator"], image: "assets/img/krc-foto-bici-4x3.webp", link: "", instagram: "https://www.instagram.com/kalosrunning/",
    credit: { before: "Diseño de trama: ", after: ". Mockups y moldería: propios.", before_en: "Print design: ", after_en: ". Mockups and patterns: mine.", handle: "@glendamorahan", url: "https://www.instagram.com/glendamorahan/" },
    en: { title: "KRC", description: "Triathlon and running jersey and trisuit for KRC (Kalos Running): mockups and patterns in Illustrator ready for sublimation, plus the final produced garment.", tags: ["Sublimation", "Patterns", "Illustrator"] },
    gallery: [
      { src: "assets/img/krc-foto-bici-4x3.webp", caption: "Equipo KRC con la indumentaria", caption_en: "KRC team wearing the kit" },
      { src: "assets/img/krc-jersey-mockup-4x3.webp", caption: "Mockup del jersey", caption_en: "Jersey mockup" },
      { src: "assets/img/krc-enterito-mockup-4x3.webp", caption: "Mockup del enterito", caption_en: "Trisuit mockup" },
      { src: "assets/img/krc-foto-espaldas-4x3.webp", caption: "Prenda final", caption_en: "Final garment" },
      { src: "assets/img/krc-foto-detalle-4x3.webp", caption: "Detalle de la prenda", caption_en: "Garment detail" },
      { src: "assets/img/krc-jersey-moldes-4x3.webp", caption: "Moldes del jersey en Illustrator", caption_en: "Jersey patterns in Illustrator" },
      { src: "assets/img/krc-enterito-moldes-4x3.webp", caption: "Moldes del enterito en Illustrator", caption_en: "Trisuit patterns in Illustrator" }
    ] }
];
