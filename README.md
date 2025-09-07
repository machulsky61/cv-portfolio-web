# 🚀 Joaquín Machulsky - Data Scientist Portfolio

Un sitio web moderno y responsivo que presenta mi perfil profesional como científico de datos recién graduado. Construido con las últimas tecnologías web para crear una experiencia impactante y profesional.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **📱 Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **⚡ Alto Rendimiento**: Construcción estática optimizada con Next.js 15
- **🎯 SEO Optimizado**: Meta tags y estructura optimizada para buscadores
- **🌙 Modo Oscuro**: Compatible con preferencias del sistema
- **✨ Animaciones**: Efectos de transición suaves con Framer Motion

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Deployment**: AWS Amplify
- **Herramientas**: ESLint, Prettier

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
│   ├── globals.css     # Estilos globales
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página principal
├── components/         # Componentes React
│   ├── sections/      # Secciones de la página
│   └── ui/           # Componentes de UI (Shadcn)
└── lib/              # Utilidades
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm, yarn, o pnpm

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/joaquin-machulsky-web-cv.git
cd joaquin-machulsky-web-cv
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
Visita [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo con Turbopack
npm run build    # Construcción para producción
npm run start    # Servidor de producción
npm run lint     # Ejecutar ESLint
```

## 🌐 Deploy en AWS Amplify

Este proyecto está configurado para deployment automático en AWS Amplify:

1. **Conectar repositorio GitHub a AWS Amplify**
2. **La configuración de build está en `amplify.yml`**
3. **Deploy automático en cada push a main**

### Configuración de Build
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
```

## 🎨 Personalización

### Colores y Tema
Los colores están configurados en `src/app/globals.css` usando CSS variables y Tailwind CSS.

### Contenido
Edita el contenido en los archivos de componentes en `src/components/sections/`:
- `HeroSection.tsx` - Información principal
- `AboutSection.tsx` - Sobre mí
- `SkillsSection.tsx` - Habilidades técnicas
- `ProjectsSection.tsx` - Portfolio de proyectos
- `ExperienceSection.tsx` - Experiencia y educación
- `ContactSection.tsx` - Información de contacto

## 🔗 Enlaces y Contacto

- **Email**: joaquin.machulsky@email.com
- **LinkedIn**: [linkedin.com/in/joaquin-machulsky](https://linkedin.com/in/joaquin-machulsky)
- **GitHub**: [github.com/tu-username](https://github.com/tu-username)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

⚡ **Construido con ❤️ por Joaquín Machulsky** usando Next.js, TypeScript y Tailwind CSS
