# 💻 Portfolio Personal — Diego Pérez Fonterosa

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-4CAF50?style=flat-square)]()
[![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-blue?style=flat-square)]()

Portfolio web personal desarrollado con **HTML5, CSS3 y JavaScript vanilla**. Diseño responsive con menú hamburguesa, scroll suave, política de cookies y fuentes locales. Presenta experiencia profesional, proyectos técnicos y formulario de contacto.

🌐 **Demo en vivo:** [portfoliodiegofonterosa.netlify.app](https://portfoliodiegofonterosa.netlify.app/)

---

## 📂 Estructura del Proyecto

```
Portfolio/
│
├── 📄 index.html              # Página principal del portfolio
├── 📄 cookies.html            # Política de cookies
├── 📄 privacy.html            # Política de privacidad (RGPD)
│
├── 📁 css/
│   ├── style.css              # Estilos globales del portfolio
│   ├── privacy.css            # Estilos específicos de la página de privacidad
│   └── 📁 fonts/              # Fuentes locales
│       ├── Roboto-Regular.woff2
│       ├── Roboto-Bold.woff2
│       └── Playfair144pt-Regular.woff2
│
├── 📁 js/
│   └── javascript.js          # Menú hamburguesa, scroll suave, cookies y formulario
```

---

## 🗂️ Secciones del Portfolio

| Sección | ID | Descripción |
|---|---|---|
| **Inicio** | `#home` | Hero con nombre, rol, badge de disponibilidad y CTA |
| **Sobre mí** | `#about` | Bio, experiencia y skill tags |
| **Proyectos** | `#projects` | 3 tarjetas de proyectos destacados |
| **Currículum** | `#resume` | Experiencia profesional y formación académica |
| **Contacto** | `#contact` | Formulario + datos de contacto |

---

## 🚀 Proyectos Destacados

### 🐍 Sistema de Cuestionarios Interactivo ASIR
Aplicación CLI en Python con ranking persistente en JSON y 3 categorías técnicas (Informática, Redes, Seguridad).  
**Stack:** `Python` `JSON` `CLI` `Datetime`  
🔗 [github.com/diegofonterosa/Proyecto_MPO](https://github.com/diegofonterosa/Proyecto_MPO)

### 🗂️ Gestor de Archivos CLI
Herramienta de línea de comandos para gestión CRUD de archivos y directorios con validaciones de seguridad y visualización de metadatos.  
**Stack:** `Python` `OS Module` `CLI` `File System`  
🔗 [github.com/diegofonterosa/Proyecto2_python](https://github.com/diegofonterosa/Proyecto2_python)

### 🤖 Udemy Free Courses Automation Bot
Bot en Python para automatizar búsqueda y recopilación de cursos gratuitos, con scraping y filtrado de resultados.  
**Stack:** `Python` `Web Scraping` `Automation` `API Integration`  
🔗 [github.com/diegofonterosa/udemy-free-course-bot](https://github.com/diegofonterosa/udemy-free-course-bot)

---

## ✨ Características Técnicas

### 📐 Diseño y Maquetación
- Layout con **CSS Grid** en secciones Proyectos, Currículum y Contacto
- Diseño **responsive mobile-first** con breakpoint a 768px
- Menú hamburguesa animado en móvil con `classList.toggle('active')`
- Header fijo (`position: fixed`) con sombra y z-index elevado
- Transición `translateY(-15px)` en hover de tarjetas de proyecto

### 🔤 Tipografía
- **Roboto** (Regular 400 / Bold 700) — textos del cuerpo
- **Playfair Display** (Regular 400 / Bold 700) — títulos `h1, h2, h3`
- Fuentes cargadas **localmente** en formato `.woff2` con `font-display: swap`

### ⚙️ JavaScript
- **Menú hamburguesa** — toggle de clase `active` sobre `#nav-menu`; se cierra al pulsar cualquier enlace
- **Scroll suave** — `scrollIntoView({ behavior: 'smooth' })` para todos los enlaces `href="#..."`
- **Política de cookies** — popup con `localStorage` para persistir la decisión (Aceptar / Rechazar)
- **Formulario de contacto** — envío real con **Netlify Forms** vía `POST` + validación HTML5 + mensaje inline de estado

### 🟢 Disponibilidad
- Badge visual pulsante en el hero con el mensaje **"Disponible para prácticas"** para visibilidad inmediata del perfil

### 🔒 Privacidad y Legalidad
- Página `privacy.html` con Política de Privacidad conforme al **RGPD**
- Cookies de análisis anónimas con banner de consentimiento
- Derechos de acceso, rectificación, supresión y portabilidad documentados

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5 semántico** | Estructura y marcado de todas las páginas |
| **CSS3** | Grid, Flexbox, transiciones, animaciones, `@font-face` |
| **JavaScript vanilla** | Interactividad, scroll suave, cookies |
| **Netlify Forms** | Recepción de mensajes del formulario de contacto |
| **localStorage** | Persistencia de preferencias de cookies |

> Sin frameworks externos ni dependencias npm — HTML, CSS y JS puros.

---

## ▶️ Cómo Ejecutar el Proyecto

### Opción 1 — Abrir directamente en el navegador

```bash
git clone https://github.com/diegofonterosa/Portfolio.git
cd Portfolio
# Abre index.html en el navegador
```

### Opción 2 — Servidor local con VS Code

Instala la extensión **Live Server** en VS Code, haz clic derecho sobre `index.html` y selecciona *"Open with Live Server"*.

### Opción 3 — Servidor local con Python

```bash
python -m http.server 8000
# Abre http://localhost:8000 en el navegador
```

---

## 🎯 Objetivos de Aprendizaje

- ✅ Maquetar un sitio web completo con HTML5 semántico
- ✅ Dominar CSS Grid y Flexbox para layouts complejos
- ✅ Implementar diseño responsive con media queries
- ✅ Cargar fuentes localmente con `@font-face` y `font-display: swap`
- ✅ Manipular el DOM con JavaScript vanilla sin librerías
- ✅ Gestionar el consentimiento de cookies con `localStorage`
- ✅ Redactar documentación legal conforme al RGPD

---

## 📋 Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- No requiere instalación ni dependencias

---

## 👨‍💻 Autor

**Diego Pérez Fonterosa**

[![GitHub](https://img.shields.io/badge/GitHub-diegofonterosa-181717?style=flat-square&logo=github)](https://github.com/diegofonterosa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Diego%20Pérez-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/diegoperezfonterosa)
[![Instagram](https://img.shields.io/badge/Instagram-diegofonterosa-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/diegofonterosa)

> Técnico en Sistemas de Telecomunicaciones e Informáticos (STI) | Estudiante de Administración de Sistemas Informáticos en Red (ASIR)

---

## 📄 Licencia

© Diego Pérez Fonterosa. Todos los derechos reservados.  
Este proyecto es un portfolio personal. No está permitida su reproducción o redistribución sin autorización del autor.
