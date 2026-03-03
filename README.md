# 💼 Diego Pérez Fonterosa - Portfolio Personal

Portfolio web profesional responsive desarrollado con HTML5, CSS3 y JavaScript vanilla. Presenta proyectos, experiencia laboral, formación académica y formulario de contacto funcional.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-green)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7)

## 📋 Descripción

Portfolio personal completo desarrollado desde cero con tecnologías web fundamentales (HTML5, CSS3, JavaScript). Implementa diseño responsive mobile-first, navegación con menú hamburguesa para móviles, sistema de cookies personalizado, fuentes locales optimizadas (Roboto y Playfair Display) y estructura semántica profesional. Diseñado para presentar proyectos técnicos, experiencia laboral en sistemas de telecomunicaciones y formación en Administración de Sistemas Informáticos en Red (ASIR).

## ✨ Características

- 📱 **Diseño Responsive**: Mobile-first con breakpoints optimizados
- 🍔 **Menú Hamburguesa**: Navegación colapsable para dispositivos móviles
- 🎨 **Gradient Hero**: Banner principal con degradado moderno
- 🔤 **Fuentes Locales**: Roboto y Playfair Display cargadas localmente (WOFF2/WOFF)
- 🍪 **Sistema de Cookies**: Popup personalizado con localStorage
- 📄 **Secciones Completas**: Inicio, Sobre mí, Proyectos, CV, Contacto
- ⚡ **Scroll Suave**: Navegación fluida entre secciones
- 🔗 **Enlaces Sociales**: LinkedIn, GitHub, Instagram
- 📋 **Política de Privacidad**: Página dedicada con estructura legal
- 🎯 **SEO Básico**: Meta tags y estructura semántica

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura y contenido semántico
- **CSS3** - Estilos, Grid, Flexbox, transiciones
- **JavaScript (Vanilla)** - Interactividad, navegación, cookies
- **Fuentes Web** - Roboto (body), Playfair Display (headings)
- **Netlify** - Hosting y despliegue continuo

## 📦 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación ni dependencias externas
- Fuentes incluidas localmente (no requiere conexión para cargar)

## 🚀 Instalación y uso

### Ver online
🌐 **Demo en vivo**: [https://portfoliodiegofonterosa.netlify.app/](https://portfoliodiegofonterosa.netlify.app/)

### Ejecutar localmente

1. **Clonar el repositorio**
```bash
git clone https://github.com/diegofonterosa/portfolio-personal.git
cd portfolio-personal
```

2. **Estructura de carpetas esperada**
```
portfolio-personal/
├── index.html
├── privacy.html
├── css/
│   ├── style.css
│   ├── privacy.css
│   └── fonts/
│       ├── Roboto-Regular.woff2
│       ├── Roboto-Regular.woff
│       ├── Roboto-Bold.woff2
│       ├── Roboto-Bold.woff
│       ├── Playfair144pt-Regular.woff2
│       ├── Playfair144pt-Regular.woff
│       ├── Playfair144pt-Bold.woff2
│       └── Playfair144pt-Bold.woff
└── js/
    └── javascript.js
```

3. **Abrir en navegador**
```bash
# Opción 1: Doble clic en index.html
# Opción 2: Live Server en VS Code
# Opción 3: Servidor local Python
python -m http.server 8000
```

4. **Navegar a**
```
http://localhost:8000
```

## 📁 Estructura del proyecto
```
portfolio-personal/
│
├── index.html              # Página principal
├── privacy.html            # Política de privacidad
│
├── css/
│   ├── style.css           # Estilos principales
│   ├── privacy.css         # Estilos página privacidad
│   └── fonts/              # Fuentes locales (Roboto, Playfair)
│
├── js/
│   └── javascript.js       # Lógica interactiva
│
└── README.md               # Este archivo
```

## 🎯 Secciones del sitio

### 1. Header / Navegación
- Menú sticky con 5 secciones
- Menú hamburguesa responsive (< 768px)
- Scroll suave a secciones

### 2. Hero Section
- Fondo con gradiente (púrpura/azul)
- Nombre, título, descripción
- CTA "Ver mis proyectos"

### 3. Sobre mí
- Foto/imagen representativa
- Biografía profesional (15+ años experiencia)
- Tags de habilidades técnicas:
  - HTML, CSS, JavaScript
  - Python, Node.js

### 4. Proyectos
Grid responsive con 3 proyectos:
- **Allen Iverson Tribute** (HTML/CSS)
- **Sistema Cuestionarios ASIR** (Python)
- **Gestor de Archivos CLI** (Python)

Cada proyecto incluye:
- Imagen
- Título y descripción
- Tags de tecnologías
- Enlace al proyecto/código

### 5. Currículum
Dos columnas (desktop) / apiladas (móvil):

**Experiencia Profesional:**
- Operador CRA - Segursystem Europa (2009-2025)
- Operario - Kingspan (2008)
- Reponedor - Gadis (2002-2004)

**Formación:**
- Ciclo Superior Telecomunicaciones (2007)
- Bachillerato Humanidades (2005)

### 6. Contacto
Dos columnas:
- **Formulario**: Nombre, Email, Asunto, Mensaje
- **Información**: Email, Teléfono, LinkedIn

### 7. Footer
- Copyright
- Enlaces sociales (LinkedIn, GitHub, Instagram)
- Link a Política de Privacidad

### 8. Popup de Cookies
- Aparece en primera visita
- Opciones: Aceptar / Rechazar
- Persistencia con localStorage

## 💻 Características técnicas implementadas

### HTML5
- ✅ Estructura semántica completa
- ✅ Meta viewport para responsive
- ✅ Favicon personalizado
- ✅ Atributos de accesibilidad (title en links)
- ✅ IDs para navegación interna

### CSS3
- ✅ CSS Grid para layouts complejos
- ✅ Flexbox para alineación
- ✅ Variables CSS (colores, espaciados)
- ✅ @font-face para fuentes locales
- ✅ Media queries (breakpoint 768px)
- ✅ Transiciones y hover effects
- ✅ Gradientes lineales
- ✅ Box-shadow para profundidad

### JavaScript
- ✅ Toggle menú hamburguesa
- ✅ Cierre automático de menú al navegar
- ✅ Smooth scroll a secciones
- ✅ Sistema cookies con localStorage
- ✅ Event listeners optimizados

### Responsive Design
- ✅ Mobile-first approach
- ✅ Grid adaptativo (auto-fit)
- ✅ Menú colapsable < 768px
- ✅ Columnas apiladas en móvil
- ✅ Tamaños de fuente escalables

### Performance
- ✅ Fuentes locales (no requests externos)
- ✅ CSS/JS separados en archivos
- ✅ Imágenes desde Unsplash CDN
- ✅ Sin librerías pesadas (jQuery, Bootstrap)

## 🎨 Paleta de colores
```css
:root {
  /* Colores principales */
  --primary-blue: #007bff;
  --primary-blue-dark: #0056b3;
  --gradient-start: #667eea;
  --gradient-end: #764ba2;
  
  /* Neutrales */
  --text-dark: #333;
  --text-medium: #666;
  --text-light: #495057;
  --background: #f8f9fa;
  --white: #fff;
  
  /* Grises */
  --gray-100: #e9ecef;
  --gray-300: #ddd;
  --gray-600: #6c757d;
  --gray-700: #545b62;
}
```

## 📱 Responsive Breakpoints
```css
/* Mobile: < 768px (por defecto) */

/* Tablet y Desktop: >= 768px */
@media (max-width: 768px) {
  /* Menú hamburguesa activo */
  /* Grid a 1 columna */
  /* Padding reducido */
}
```

## 🔧 Posibles mejoras futuras

### Funcionalidad
- [ ] Formulario funcional con Netlify Forms
- [ ] Modo oscuro/claro toggle
- [ ] Animaciones scroll (Intersection Observer)
- [ ] Validación de formulario en tiempo real
- [ ] Página de proyectos individual para cada uno
- [ ] Blog o sección de artículos técnicos
- [ ] Filtros de proyectos por tecnología

### Contenido
- [ ] Añadir sección de certificaciones
- [ ] Timeline de carrera profesional
- [ ] Testimonios o recomendaciones
- [ ] Más proyectos (mínimo 6 totales)
- [ ] Sección "Skills" con barras de progreso
- [ ] Integración con API de GitHub (repos dinámicos)

### Técnico
- [ ] Lazy loading para imágenes
- [ ] Service Worker (PWA)
- [ ] Optimización SEO avanzada (Schema.org)
- [ ] Analytics (Google Analytics o alternativa)
- [ ] Sitemap XML
- [ ] Tests automatizados

### Performance
- [ ] Minificación de CSS/JS
- [ ] Compresión de imágenes (WebP)
- [ ] Critical CSS inline
- [ ] Precarga de fuentes

## 📖 Aprendizajes del proyecto

Este proyecto permitió consolidar:
- Diseño web responsive desde cero
- Arquitectura CSS escalable (sin frameworks)
- JavaScript vanilla para interactividad
- Optimización de fuentes web
- Gestión de localStorage
- Sistema de navegación fluida
- Buenas prácticas de accesibilidad
- Estructura semántica HTML5

## 🐛 Bugs conocidos y soluciones

### Bug 1: Typo en JavaScript
```javascript
// ❌ MAL (línea actual)
rejectBtnBtn.addEventListener("click", ...

// ✅ BIEN (corrección)
rejectBtn.addEventListener("click", ...
```

### Bug 2: Formulario sin acción
El formulario no tiene `method` ni `action`. Para hacerlo funcional con Netlify:
```html
<form name="contacto" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contacto">
  <!-- resto del formulario -->
</form>
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 👤 Autor

**Diego Pérez Fonterosa**
- **Ubicación**: Tui, Pontevedra, España
- **Email**: diegofonterosa@gmail.com
- **GitHub**: [@diegofonterosa](https://github.com/diegofonterosa)
- **LinkedIn**: [Diego Pérez Fonterosa](https://linkedin.com/in/diegoperezfonterosa)
- **Instagram**: [@diegofonterosa](https://instagram.com/diegofonterosa)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 📞 Contacto

Para preguntas, colaboraciones o sugerencias:
- **Email**: diegofonterosa@gmail.com
- **LinkedIn**: https://linkedin.com/in/diegoperezfonterosa
- **Portfolio**: https://portfoliodiegofonterosa.netlify.app

## 🙏 Créditos

- **Fuentes**: Google Fonts (Roboto, Playfair Display)
- **Imágenes**: Unsplash (fotos de stock)
- **Hosting**: Netlify
- **Inspiración**: Portfolios modernos de desarrolladores frontend

---

⭐ **Si te gustó este portfolio, dale una estrella en GitHub!**

**#WebDevelopment #HTML5 #CSS3 #JavaScript #Portfolio #ASIR #ResponsiveDesign**
```

---
html5
css3
javascript
portfolio
responsive-design
mobile-first
web-development
frontend
netlify
vanilla-js
personal-website
css-grid
flexbox
