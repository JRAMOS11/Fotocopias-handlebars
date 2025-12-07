// src/index.js
import "../less/style.less";
import Handlebars from "handlebars";

// =======================
// Importar parciales HBS
// =======================
import headerSrc    from "./partials/header.hbs?raw";
import homeSrc      from "./partials/home.hbs?raw";
import acercaSrc    from "./partials/acerca.hbs?raw";
import serviciosSrc from "./partials/servicios.hbs?raw";
import galeriaSrc   from "./partials/galeria.hbs?raw";
import blogSrc      from "./partials/blog.hbs?raw";
import eventosSrc   from "./partials/eventos.hbs?raw";
import cotizarSrc   from "./partials/cotizar.hbs?raw";
import faqSrc       from "./partials/faq.hbs?raw";
import promosSrc    from "./partials/promociones.hbs?raw";
import contactoSrc  from "./partials/contacto.hbs?raw";
import footerSrc    from "./partials/footer.hbs?raw";

// Helper para compilar
const hbs = (src) => Handlebars.compile(src);

// =======================
// Layout principal
// =======================
const layoutSource = `
  {{{header}}}

  <main>
    {{{home}}}
    {{{acerca}}}
    {{{servicios}}}
    {{{galeria}}}
    {{{blog}}}
    {{{eventos}}}
    {{{cotizar}}}
    {{{faq}}}
    {{{promos}}}
    {{{contacto}}}
  </main>

  {{{footer}}}
`;

const layoutTpl = hbs(layoutSource);

// Punto de montaje
const app = document.querySelector("#app");

try {
  const html = layoutTpl({
    header:    hbs(headerSrc)(),
    home:      hbs(homeSrc)(),
    acerca:    hbs(acercaSrc)(),
    servicios: hbs(serviciosSrc)(),
    galeria:   hbs(galeriaSrc)(),
    blog:      hbs(blogSrc)(),
    eventos:   hbs(eventosSrc)(),
    cotizar:   hbs(cotizarSrc)(),
    faq:       hbs(faqSrc)(),
    promos:    hbs(promosSrc)(),
    contacto:  hbs(contactoSrc)(),
    footer:    hbs(footerSrc)(),
  });

  if (app) {
    app.innerHTML = html;
  } else {
    console.error("No se encontró el elemento #app en index.html");
  }
} catch (err) {
  console.error("Error renderizando Handlebars:", err);
  if (app) {
    app.innerHTML = `
      <h2 style="color:#c00; font-family:Arial; text-align:center; margin-top:40px;">
        Error al cargar la página
      </h2>
      <pre style="max-width:900px; margin:20px auto; font-size:14px; white-space:pre-wrap;">
${err.message}
      </pre>
    `;
  }
}