# 🛡️ Portfolio · Diego Pérez Fonterosa

Portfolio personal de administración de sistemas y ciberseguridad, hecho con HTML5, CSS3 y JavaScript vanilla, sin frameworks ni dependencias.

🌐 **Web:** [portfoliodiegofonterosa.netlify.app](https://portfoliodiegofonterosa.netlify.app)

## 📂 Estructura

```
Portfolio/
├── index.html        # Página principal
├── privacy.html      # Política de privacidad (RGPD)
├── cookies.html      # Política de cookies (el sitio no usa cookies)
├── success.html      # Confirmación de envío del formulario
├── css/
│   ├── style.css     # Estilos globales
│   ├── privacy.css   # Estilos de las páginas legales
│   └── fonts/        # Roboto y Playfair Display en local (.woff2)
└── js/
    └── javascript.js # Menú móvil y envío del formulario
```

## 🗂️ Secciones

| Sección | ID | Contenido |
|---|---|---|
| Inicio | `#home` | Perfil, disponibilidad y tecnologías principales |
| Sobre mí | `#about` | Trayectoria y competencias técnicas |
| Proyectos | `#projects` | Honeypot Cowrie con MITRE ATT&CK, pipeline SOAR (Wazuh, Cortex y TheHive), pipeline DevSecOps, Security Alert Monitor y TFG del Máster |
| Experiencia | `#resume` | FCT como técnico de sistemas y 16 años en una central receptora de alarmas |
| Formación | `#education` | ASIR, Máster en Ciberseguridad y STI |
| Contacto | `#contact` | Formulario (Netlify Forms) y datos de contacto |

## ⚙️ Detalles técnicos

- Diseño responsive con CSS Grid y Flexbox
- Menú móvil accesible (`button`, `aria-expanded`, cierre con Escape)
- Fuentes en local con `font-display: swap`, sin peticiones a terceros
- Iconos en SVG en línea, sin librerías externas
- Formulario con Netlify Forms, honeypot antispam y página de confirmación
- Respeta `prefers-reduced-motion`
- Sin cookies ni analítica

## ▶️ Ejecutar en local

```bash
git clone https://github.com/diegofonterosa/Portfolio.git
cd Portfolio
python -m http.server 8000
# Abrir http://localhost:8000
```

## 📄 Licencia

© Diego Pérez Fonterosa. Todos los derechos reservados.
