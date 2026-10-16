/* Agregá, quitá o editá trabajos acá. Campos: title, description, tags, image (ej. "assets/img/remera.jpg"), link (opcional).
   Para la versión en inglés completá "en" con title, description y tags (si falta, se muestra el español).
   instagram (opcional): link a Instagram, se muestra como ícono redondo.
   subtitle (opcional): línea corta bajo el título (también en en.subtitle).
   web (opcional): link a un sitio web, se muestra como ícono redondo de globo.
   credit (opcional): línea de crédito con link (ej. diseño de trama de otra persona).
   badge (opcional): etiqueta chica, ej. { es: "Propuesta", en: "Proposal" }.
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
    tags: ["Sublimación", "Moldes", "Illustrator"], image: "assets/img/krc-jersey-mockup-4x3.webp", link: "", instagram: "https://www.instagram.com/kalosrunning/",
    credit: { before: "Diseño de trama: ", after: ". Mockups y moldería: propios.", before_en: "Print design: ", after_en: ". Mockups and patterns: mine.", handle: "@glendamorahan", url: "https://www.instagram.com/glendamorahan/" },
    en: { title: "KRC", description: "Triathlon and running jersey and trisuit for KRC (Kalos Running): mockups and patterns in Illustrator ready for sublimation, plus the final produced garment.", tags: ["Sublimation", "Patterns", "Illustrator"] },
    gallery: [
      { src: "assets/img/krc-jersey-mockup-4x3.webp", caption: "Mockup del jersey", caption_en: "Jersey mockup" },
      { src: "assets/img/krc-enterito-mockup-4x3.webp", caption: "Mockup del enterito", caption_en: "Trisuit mockup" },
      { src: "assets/img/krc-foto-bici-4x3.webp", caption: "Equipo KRC con la indumentaria", caption_en: "KRC team wearing the kit" },
      { src: "assets/img/krc-foto-espaldas-4x3.webp", caption: "Prenda final", caption_en: "Final garment" },
      { src: "assets/img/krc-foto-detalle-4x3.webp", caption: "Detalle de la prenda", caption_en: "Garment detail" },
      { src: "assets/img/krc-jersey-moldes-4x3.webp", caption: "Moldes del jersey en Illustrator", caption_en: "Jersey patterns in Illustrator" },
      { src: "assets/img/krc-enterito-moldes-4x3.webp", caption: "Moldes del enterito en Illustrator", caption_en: "Trisuit patterns in Illustrator" }
    ] },
  { title: "BRIDA TRAINING", badge: { es: "Propuesta", en: "Proposal" },
    description: "Propuesta de indumentaria para el equipo de entrenamiento BRIDA TRAINING: jersey, chaleco y camperas.",
    tags: ["Sublimación", "Mockups"], image: "assets/img/brida-jersey-4x3.webp", link: "", instagram: "https://www.instagram.com/brida.training/",
    en: { title: "BRIDA TRAINING", description: "Apparel proposal for the BRIDA TRAINING team: jersey, vest and jackets.", tags: ["Sublimation", "Mockups"] },
    gallery: [
      { src: "assets/img/brida-jersey-4x3.webp", caption: "Jersey", caption_en: "Jersey" },
      { src: "assets/img/brida-chaleco-4x3.webp", caption: "Chaleco", caption_en: "Vest" },
      { src: "assets/img/brida-campera-4x3.webp", caption: "Campera", caption_en: "Jacket" },
      { src: "assets/img/brida-campera-2-4x3.webp", caption: "Campera (versión 2)", caption_en: "Jacket (version 2)" }
    ] },
  { title: "Z TEAM", description: "Enteritos de triatlón para Z TEAM (Jeremías Chinque): manga corta y sin mangas.",
    tags: ["Sublimación", "Moldes", "Mockups"], image: "assets/img/zteam-enterito-manga-corta-4x3.webp", link: "", instagram: "https://www.instagram.com/chinquejeremias/",
    en: { title: "Z TEAM", description: "Triathlon trisuits for Z TEAM (Jeremías Chinque): short-sleeve and sleeveless.", tags: ["Sublimation", "Patterns", "Mockups"] },
    gallery: [
      { src: "assets/img/zteam-enterito-manga-corta-4x3.webp", caption: "Enterito manga corta", caption_en: "Short-sleeve trisuit" },
      { src: "assets/img/zteam-enterito-sin-mangas-4x3.webp", caption: "Enterito sin mangas", caption_en: "Sleeveless trisuit" },
      { src: "assets/img/zteam-moldes-4x3.webp", caption: "Moldes en Illustrator", caption_en: "Patterns in Illustrator" }
    ] },
  { title: "MAX TRAINING", description: "Indumentaria para MAX TRAINING: enterito, jersey y remera.",
    tags: ["Sublimación", "Moldes", "Mockups"], image: "assets/img/max-enterito-4x3.webp", link: "", web: "https://maxipassadore.com.ar/", instagram: "https://www.instagram.com/maxipassadore/",
    en: { title: "MAX TRAINING", description: "Apparel for MAX TRAINING: trisuit, jersey and t-shirt.", tags: ["Sublimation", "Patterns", "Mockups"] },
    gallery: [
      { src: "assets/img/max-enterito-4x3.webp", caption: "Enterito", caption_en: "Trisuit" },
      { src: "assets/img/max-carrera-4x3.webp", caption: "Prenda en carrera", caption_en: "Garment in a race" },
      { src: "assets/img/max-bici-4x3.webp", caption: "Prenda final", caption_en: "Final garment" },
      { src: "assets/img/max-jersey-4x3.webp", caption: "Jersey", caption_en: "Jersey" },
      { src: "assets/img/max-remera-4x3.webp", caption: "Remera", caption_en: "T-shirt" },
      { src: "assets/img/max-moldes-4x3.webp", caption: "Moldes en Illustrator", caption_en: "Patterns in Illustrator" }
    ] },
  { title: "ZR RIDING CLUB", subtitle: "Edición especial: De la Puna a las Yungas",
    description: "Jersey de ciclismo edición especial para ZR RIDING CLUB: mockup en Photoshop y moldes listos para sublimación.",
    tags: ["Sublimación", "Moldes", "Mockups"], image: "assets/img/zr-mockup-4x3.webp", link: "",
    en: { title: "ZR RIDING CLUB", subtitle: "Special edition: De la Puna a las Yungas", description: "Special-edition cycling jersey for ZR RIDING CLUB: mockup in Photoshop and patterns ready for sublimation.", tags: ["Sublimation", "Patterns", "Mockups"] },
    gallery: [
      { src: "assets/img/zr-mockup-4x3.webp", caption: "Mockup del jersey", caption_en: "Jersey mockup" },
      { src: "assets/img/zr-grupo-4x3.webp", caption: "El equipo con la prenda final", caption_en: "The team in the final garment" },
      { src: "assets/img/zr-grupo-nubes-4x3.webp", caption: "El equipo en ruta", caption_en: "The team on the road" },
      { src: "assets/img/zr-moldes-4x3.webp", caption: "Moldes en Illustrator", caption_en: "Patterns in Illustrator" }
    ] }
];
