/* Agregá, quitá o editá trabajos acá. Campos: title, description, tags, image (ej. "assets/img/remera.jpg"), link (opcional).
   Para la versión en inglés completá "en" con title, description y tags (si falta, se muestra el español).
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
    ] }
];
