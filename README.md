# Componentes Ionic

Aplicación móvil desarrollada con **Ionic** y **Angular** que muestra ejemplos prácticos de los componentes UI de Ionic. Incluye soporte para Android mediante Capacitor.

---

## Descripción

Esta aplicación es una guía interactiva de componentes de Ionic Framework. Cada página demuestra el uso de un componente específico con ejemplos funcionales y código de referencia. La app incluye un menú lateral navegable y está optimizada para dispositivos móviles.

## Funcionalidades

La aplicación incluye ejemplos de los siguientes componentes:

| Componente | Descripción |
|------------|-------------|
| **Action Sheet** | Menú de opciones deslizable desde la parte inferior |
| **Alert** | Diálogos de alerta, confirmación e input |
| **Avatar** | Imágenes de avatar con diferentes estilos |
| **Buttons** | Botones con variantes de color y forma |
| **Cards** | Tarjetas con contenido organizado |
| **Checks** | Casillas de verificación |
| **DateTime** | Selector de fecha y hora |
| **Fab** | Botones de acción flotante |
| **Grid** | Sistema de cuadrícula responsive |
| **Infinite Scroll** | Carga infinita de contenido |
| **Input Forms** | Formularios con validaciones |
| **List - Sliding** | Listas con opciones deslizables |
| **List - Reorder** | Listas reordenables |
| **Loading** | Indicadores de carga |
| **Modal** | Ventanas modales |
| **Popover** | Menús emergentes |
| **ProgressBar** | Barras de progreso |
| **Refresher** | Pull-to-refresh |
| **Search** | Barra de búsqueda con filtros |
| **Segment** | Control de segmentos/tabs |
| **Slides** | Carrusel de imágenes (Swiper) |
| **Tabs** | Navegación por pestañas |
| **Toast** | Notificaciones tipo toast |

### Características adicionales

- **Menú lateral** con lista de componentes
- **Split Pane** para tablets y pantallas grandes
- **Consumo de API** (JSONPlaceholder para datos de prueba)
- **Carga de datos** desde archivos JSON locales
- **Soporte para Android** mediante Capacitor

---

## Librerías Utilizadas

### Framework principal
| Librería | Versión | Descripción |
|----------|---------|-------------|
| `@angular/core` | ^20.0.0 | Framework Angular |
| `@ionic/angular` | ^8.0.0 | Componentes de Ionic |
| `@capacitor/core` | 8.3.0 | Acceso a funciones nativas |

### Plugins de Capacitor
| Plugin | Versión | Función |
|--------|---------|---------|
| `@capacitor/android` | ^8.3.0 | Soporte para Android |
| `@capacitor/camera` | ^8.1.0 | Acceso a la cámara |
| `@capacitor/filesystem` | ^8.1.2 | Manejo de archivos |
| `@capacitor/preferences` | ^8.0.1 | Almacenamiento local |
| `@capacitor/app` | 8.1.0 | Gestión del ciclo de vida de la app |
| `@capacitor/haptics` | 8.0.2 | Retroalimentación háptica |
| `@capacitor/keyboard` | 8.0.3 | Control del teclado |
| `@capacitor/status-bar` | 8.0.2 | Control de la barra de estado |

### Librerías adicionales
| Librería | Versión | Descripción |
|----------|---------|-------------|
| `swiper` | ^12.1.3 | Carrusel de imágenes |
| `animate.css` | ^4.1.1 | Animaciones CSS |
| `ionicons` | ^7.0.0 | Iconos de Ionic |
| `@ionic/pwa-elements` | ^3.4.0 | Elementos PWA para Capacitor |

---

## Requisitos Previos

- **Node.js** (versión 18 o superior recomendada)
- **npm** o **yarn**
- **Angular CLI** (`npm install -g @angular/cli`)
- **Ionic CLI** (`npm install -g @ionic/cli`)
- **Android Studio** (para compilar en Android)
- **JDK 17** (para Android)

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd "03-componentes"
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar dependencias de Capacitor (si es necesario)

```bash
npx cap sync
```

---

## Ejecución

### Modo desarrollo (navegador)

```bash
ionic serve
```

O con Angular CLI:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:8100`

### Modo desarrollo con acceso externo

```bash
ionic serve --external
```

### Construir para producción

```bash
npm run build
```

---

## Android

### Preparar el proyecto Android

```bash
npm run build
npx cap sync android
npx cap open android
```

### Ejecutar en dispositivo Android

Desde Android Studio:
1. Conecta tu dispositivo o inicia un emulador
2. Haz clic en "Run" (triángulo verde)

### Live Reload en Android

```bash
ionic capacitor run android -l --external
```

### Generar APK de release

```bash
cd android
./gradlew assembleRelease
```

El APK se encuentra en: `android/app/build/outputs/apk/release/`

---

## Estructura del Proyecto

```
componentes/
├── src/
│   ├── app/
│   │   ├── pages/           # Páginas de componentes
│   │   ├── services/        # Servicios (DataService)
│   │   ├── interfaces/      # Interfaces TypeScript
│   │   └── ...
│   ├── assets/
│   │   └── data/            # Archivos JSON de datos
│   └── ...
├── android/                 # Proyecto Android generado
├── package.json
├── ionic.config.json
└── README.md
```

---

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run watch` | Construye en modo watch |
| `npm test` | Ejecuta pruebas unitarias |
| `npm run lint` | Ejecuta el linter |
| `ionic serve` | Inicia servidor de Ionic |
| `npx cap sync` | Sincroniza plugins de Capacitor |

---

## Recursos Útiles

- [Documentación de Ionic](https://ionicframework.com/docs)
- [Documentación de Angular](https://angular.io/docs)
- [Documentación de Capacitor](https://capacitorjs.com/docs)
- [Ionicons](https://ionic.io/ionicons)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (API de prueba)

---

## Autor

**Ionic Framework** - Proyecto de demostración

---

## Licencia

Este proyecto es de uso educativo.
