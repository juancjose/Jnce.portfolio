# Portfolio — Juan José Cáceres

Sitio estático (HTML + CSS + JS, sin build). Abrí `index.html` en el navegador para verlo.

## Estructura
```
index.html          Contenido principal
css/styles.css      Estilos (colores en :root y [data-theme=dark])
js/projects.js      Lista de proyectos (editar acá)
js/main.js          Tema claro/oscuro, menú, animaciones
assets/docs/        PDFs descargables (CV, certificados)
assets/img/         Imágenes de proyectos
.nojekyll           Para GitHub Pages
```

## Cómo editar
1. Buscá `[EDITAR]` en `index.html` y reemplazá con tus datos (rol, intro, experiencia, habilidades, email, LinkedIn).
2. **Proyectos:** editá el array `PROJECTS` en `js/projects.js`:
   ```js
   { title: "Mi proyecto", description: "Qué hace", tags: ["React"], image: "assets/img/proyecto.png", link: "https://..." }
   ```
3. **Archivos:** copiá tus PDFs a `assets/docs/` con los nombres usados en `index.html` (ej. `CV-Juan-Jose-Caceres.pdf`) o cambiá los `href`.
4. **Colores:** cambiá `--accent` y `--accent2` en `css/styles.css`.

## Publicar con GitHub Pages
1. Repositorio: https://github.com/juancjose/Jnce.portfolio
2. Para subir cambios (o clonar y subir desde cero):
   ```bash
   git init && git add . && git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/juancjose/Jnce.portfolio.git
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save.
4. En 1–2 minutos queda online en **https://juancjose.github.io/Jnce.portfolio/**

> Ojo: no subas documentos con datos sensibles (DNI, dirección, teléfono personal) si el repo es público.
