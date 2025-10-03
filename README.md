# 🚀 Portafolio de Sebastián Quintero

Un portafolio web moderno y responsivo construido con las últimas tecnologías web. Diseñado para destacar habilidades, proyectos y experiencia profesional como desarrollador frontend.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Características

- **🎨 Diseño Moderno**: Interface limpia con gradientes, glassmorphism y micro-interacciones
- **📱 Totalmente Responsivo**: Optimizado para móviles, tablets y desktop
- **🌙 Modo Oscuro/Claro**: Cambio de tema suave con persistencia
- **⚡ Animaciones Fluidas**: Utilizando Framer Motion para transiciones elegantes
- **✨ Efecto Parallax con Estrellas**: Fondo animado con estrellas que crean profundidad
- **🎯 Navegación Intuitiva**: Scroll suave con indicadores de sección activa
- **📧 Formulario de Contacto**: Validación completa con Zod y React Hook Form
- **📨 Envío de Emails**: Integración con EmailJS para mensajes reales
- **🔍 SEO Optimizado**: Meta tags, Open Graph y estructuración semántica
- **⚡ Alto Rendimiento**: Optimizado con Next.js 15 y mejores prácticas

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 15.5.4** - Framework React con App Router
- **React 19.1.0** - Biblioteca de interfaces de usuario
- **TypeScript 5** - Tipado estático para JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first

### UI/UX
- **Shadcn/ui** - Sistema de componentes accesibles
- **Framer Motion** - Biblioteca de animaciones
- **Lucide React** - Iconografía moderna
- **React Icons** - Iconos de tecnologías
- **next-themes** - Gestión de temas
- **Sonner** - Notificaciones toast elegantes

### Herramientas
- **React Hook Form** - Gestión de formularios
- **Zod** - Validación de esquemas
- **EmailJS** - Envío de emails desde el frontend
- **ESLint** - Linting de código
- **Geist Font** - Tipografía optimizada

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18.0.0 o superior
- npm, yarn, pnpm o bun

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/sebastianquintero/portafolio.git
   cd portafolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configura las variables de entorno**

   Crea un archivo `.env.local` en la raíz del proyecto:
   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

   Ver [EMAILJS_SETUP.md](EMAILJS_SETUP.md) para instrucciones detalladas de configuración.

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Abre tu navegador**

   Visita [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 📁 Estructura del Proyecto

```
├── app/
│   ├── components/
│   │   ├── animations/         # Componentes de animación reutilizables
│   │   │   ├── FadeIn.tsx
│   │   │   ├── SlideIn.tsx
│   │   │   ├── FloatingElements.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── sections/           # Secciones principales del portafolio
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/                 # Componentes de UI
│   │       ├── Navigation.tsx
│   │       ├── Footer.tsx
│   │       └── ParallaxStars.tsx
│   ├── globals.css             # Estilos globales y variables CSS
│   ├── layout.tsx              # Layout principal con metadata
│   └── page.tsx                # Página principal
├── components/                 # Componentes Shadcn/ui
├── lib/                        # Utilidades y configuraciones
└── public/                     # Archivos estáticos
```

## 🎨 Secciones del Portafolio

### 🏠 Hero Section
- Presentación impactante con animaciones de entrada
- Elementos flotantes dinámicos
- Enlaces a redes sociales
- Call-to-actions prominentes

### 👨‍💻 About Section
- Historia personal y profesional
- Valores y principios de trabajo
- Estadísticas de experiencia
- Badges de competencias

### 🛠️ Skills Section
- Barras de progreso animadas por categorías
- Tecnologías frontend, backend y herramientas
- Competencias adicionales
- Sección de aprendizaje continuo

### 💼 Projects Section
- Showcase de 6 proyectos destacados
- Cards interactivas con hover effects
- Enlaces a demos y repositorios
- Filtrado por categorías y estado

### 📧 Contact Section
- Formulario con validación completa
- Envío de emails reales con EmailJS
- Información de contacto interactiva
- Enlaces a redes sociales
- Notificaciones toast de éxito/error

## 🎯 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción

# Linting
npm run lint         # Ejecuta ESLint para encontrar problemas
```

## 🎨 Personalización

### Colores y Temas
Los colores se configuran en `app/globals.css` usando variables CSS:

```css
:root {
  --primary: /* Tu color primario */;
  --secondary: /* Tu color secundario */;
  /* ... más variables */
}
```

### Contenido Personal
Actualiza el contenido en los componentes de sección:
- Información personal en `HeroSection.tsx` y `AboutSection.tsx`
- Proyectos en `ProjectsSection.tsx`
- Habilidades en `SkillsSection.tsx`
- Datos de contacto en `ContactSection.tsx`

### Metadata SEO
Modifica la metadata en `app/layout.tsx` para tu información:

```typescript
export const metadata: Metadata = {
  title: "Tu Nombre - Frontend Developer",
  description: "Tu descripción personalizada...",
  // ... más configuraciones
};
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Configura las variables de entorno en **Settings > Environment Variables**:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. El despliegue se realiza automáticamente en cada push

### Variables de Entorno en Producción
Para que el formulario de contacto funcione en producción, asegúrate de configurar las variables de entorno de EmailJS en tu plataforma de hosting.

**En Vercel:**
1. Ve a tu proyecto > Settings > Environment Variables
2. Agrega las 3 variables de EmailJS
3. Selecciona todos los entornos (Production, Preview, Development)
4. Redespliega el proyecto

### Netlify
1. Construye el proyecto: `npm run build`
2. Configura las variables de entorno en Netlify
3. Despliega la carpeta `.next` en Netlify

### Otros Proveedores
El proyecto es compatible con cualquier proveedor que soporte Next.js.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📬 Contacto

**Sebastián Quintero**
- 📧 Email: juansebastianquinteroortiz@gmail.com
- 💼 LinkedIn: [linkedin.com/in/sebastianquintero](https://www.linkedin.com/in/juan-sebastian-quintero-ortiz-659004296/)
- 🐙 GitHub: [github.com/sebastianquintero](https://github.com/SebasQuintero99_)
---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
