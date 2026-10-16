/* Agregá, quitá o editá trabajos acá. Campos: title, description, tags, image (ej. "assets/img/remera.jpg"), link (opcional).
   Para la versión en inglés completá "en" con title, description y tags (si falta, se muestra el español).
   gallery (opcional): lista de imágenes { src, caption, caption_en } que se abren en una galería al hacer clic. */
const PROJECTS = [
  { title: "CHIMANTEAM", description: "Indumentaria sublimada para CHIMANTEAM: enterito y remeras, con diseño del mockup y armado de cada pieza de la prenda lista para impresión.",
    tags: ["Sublimación", "Moldes", "Photoshop", "Illustrator"], image: "assets/img/chimanteam%20mockup.webp", link: "",
    en: { title: "CHIMANTEAM", description: "Sublimated apparel for CHIMANTEAM: one-piece suit and T-shirts, with mockup design and layout of every garment piece ready for printing.", tags: ["Sublimation", "Patterns", "Photoshop", "Illustrator"] },
    gallery: [
      { src: "assets/img/chimanteam%20mockup.webp", caption: "Mockup", caption_en: "Mockup" },
      { src: "assets/img/chimanteam%20remera-negra.webp", caption: "Remera negra", caption_en: "Black t-shirt" },
      { src: "assets/img/chimanteam%20remera-blanca.webp", caption: "Remera blanca", caption_en: "White t-shirt" },
      { src: "assets/img/chimanteam%20photoshop.webp", caption: "Diseño en Photoshop", caption_en: "Design in Photoshop" },
      { src: "assets/img/chimanteam%20moldes.webp", caption: "Moldes en Illustrator", caption_en: "Patterns in Illustrator" }
    ] },
  { title: "Remeras", description: "Diseño de gráficas y estampados para remeras, con mockups y archivos listos para producción.", tags: ["Estampados", "Mockups"], image: "", link: "",
    en: { title: "T-shirts", description: "Graphics and print design for T-shirts, with mockups and production-ready files.", tags: ["Prints", "Mockups"] } },
  { title: "Camperas", description: "Diseño de camperas con armado de cada pieza de la prenda (moldes) listo para impresión.", tags: ["Indumentaria", "Moldes"], image: "", link: "",
    en: { title: "Jackets", description: "Jacket design with each garment piece (patterns) laid out ready for printing.", tags: ["Apparel", "Patterns"] } },
  { title: "Jerseys deportivos", description: "Diseño de jerseys deportivos preparados para impresión y sublimación.", tags: ["Deportiva", "Sublimación"], image: "", link: "",
    en: { title: "Sports jerseys", description: "Sports jersey design prepared for printing and sublimation.", tags: ["Sportswear", "Sublimation"] } }
];
