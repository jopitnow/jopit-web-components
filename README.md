<div align="center">

# @jopitnow/web-components

![React](https://img.shields.io/badge/React-17+-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.3+-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?style=flat-square&logo=webpack&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/Licencia-MIT-green?style=flat-square)

**Biblioteca de componentes UI reutilizables para el ecosistema Jopit.**

</div>

---

## 📖 Descripción

`@jopitnow/web-components` es una librería de componentes visuales construida con **React** y **TypeScript**, diseñada para ser consumida por las aplicaciones del ecosistema **Jopit**. Provee elementos de interfaz listos para usar como botones, inputs, selects, diálogos, headers y pantallas de error, con estilos propios y soporte para estados de carga (skeleton screens).

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **React 17** | Librería de UI (peer dependency) |
| **TypeScript** | Tipado estático en todos los componentes |
| **Webpack 5** | Bundling de la librería (salida UMD) |
| **Vite 6** | Servidor de desarrollo para el demo |
| **CSS puro** | Estilos de cada componente |
| **MUI / Emotion** | Dependencias de desarrollo disponibles |
| **skeleton-screen-css** | Skeleton loaders para estados de carga |
| **ESLint + Prettier** | Linting y formateo de código |

---

## 🧩 Componentes Disponibles

| Componente | Descripción |
|---|---|
| `Button` | Botón estándar con estados de carga y deshabilitado |
| `MiddleButton` | Variante de botón intermedio |
| `TextInput` | Campo de texto con título opcional y soporte de tipos HTML |
| `SearchTextInput` | Input especializado para búsquedas |
| `PasswordTextInput` | Input de contraseña con toggle de visibilidad |
| `TextArea` | Área de texto multilínea |
| `Select` | Selector con placeholder, opciones y skeleton loading |
| `FilterSelect` | Selector con filtro integrado |
| `Checkbox` | Casilla de verificación |
| `AlertDialog` | Diálogo de alerta con 4 variantes: `Success`, `Info`, `Warning`, `Error` |
| `Header` | Encabezado de página con título, descripción y botón de retroceso |
| `ErrorScreen` | Pantalla de error completa con ícono y botón de reintento |
| `Logo` | Componente de logo de Jopit |

---

## 📦 Instalación

```bash
# Configurar el registry de GitHub Packages
npm config set @jopitnow:registry https://npm.pkg.github.com/

# Instalar el paquete
npm install @jopitnow/web-components
```

### Peer Dependencies

La librería requiere que el proyecto consumidor tenga instaladas las siguientes dependencias:

```bash
npm install react@^17.0.2 react-dom@^17.0.2
```

---

## 🚀 Scripts

| Comando | Descripción |
|---|---|
| `npm run build` | Compila la librería con Webpack (salida en `dist/`) |
| `npm run start:demo` | Inicia el servidor de demo con Vite en `http://localhost:8080` |

---

## 💡 Uso

```tsx
import { Button, TextInput, AlertDialog, DialogType } from "@jopitnow/web-components";
import "@jopitnow/web-components/dist/index.css";

function MiComponente() {
  return (
    <>
      <TextInput
        title="Nombre"
        placeholder="Ingresá tu nombre"
        value={nombre}
        onTextChange={(e) => setNombre(e.target.value)}
      />

      <Button
        text="Guardar"
        onClick={handleGuardar}
        isLoading={cargando}
      />

      <AlertDialog
        type={DialogType.Success}
        title="¡Listo!"
        description="Los cambios se guardaron correctamente."
        agreeText="Aceptar"
        onAgreeClick={handleAceptar}
        disagreeText="Cancelar"
        onDisagreeClick={handleCancelar}
      />
    </>
  );
}
```

---

## 📁 Estructura del Proyecto

```
jopit-web-components/
├── assets/
│   └── images/              # Íconos e imágenes de los componentes
├── demo/                    # Aplicación de demostración (Vite)
│   ├── components/          # Showcases de cada componente
│   ├── list/                # Lista de navegación del demo
│   ├── index.html
│   └── index.tsx
├── dist/                    # Salida compilada (UMD + CSS + tipos)
├── src/
│   ├── button/
│   │   ├── middle/          # MiddleButton
│   │   └── standard/        # Button
│   ├── checkbox/            # Checkbox
│   ├── dialog/
│   │   └── alert/           # AlertDialog (Success, Info, Warning, Error)
│   ├── error/               # ErrorScreen
│   ├── header/              # Header
│   ├── input/
│   │   ├── area/            # TextArea
│   │   ├── password/        # PasswordTextInput
│   │   ├── search/          # SearchTextInput
│   │   └── standard/        # TextInput
│   ├── logo/                # Logo
│   ├── select/
│   │   ├── filter/          # FilterSelect
│   │   └── standard/        # Select
│   ├── index.css            # Estilos globales
│   ├── index.tsx            # Entry point (exports)
│   ├── modules.d.ts         # Declaraciones de módulos
│   └── resources.tsx        # Textos y recursos (i18n - español)
├── package.json
├── tsconfig.json
├── vite.config.ts           # Config de Vite (demo)
└── webpack.config.js        # Config de Webpack (build)
```

---

## 🌐 Ecosistema Jopit

Este paquete forma parte del monorepo **jopit-web** y está pensado para ser consumido como dependencia por las aplicaciones frontend de Jopit. Se publica en **GitHub Packages** bajo el scope `@jopitnow`.

| Recurso | Enlace |
|---|---|
| Repositorio | [github.com/jopitnow/jopit-web-components](https://github.com/jopitnow/jopit-web-components) |
| Issues | [github.com/jopitnow/jopit-web-components/issues](https://github.com/jopitnow/jopit-web-components/issues) |
| Registry | GitHub Packages (`npm.pkg.github.com`) |

---

## 📄 Licencia

Distribuido bajo la licencia **MIT**. Consultá el archivo `LICENSE` para más información.

---

<div align="center">

Hecho con ❤️ por el equipo de **Jopit**

</div>
