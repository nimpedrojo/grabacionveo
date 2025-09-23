# Formulario de Grabación y Scouting

Este proyecto es una solución web sencilla para la gestión de solicitudes de grabación de partidos y scouting de equipos/jugadores de fútbol. Incluye dos formularios conectados a Google Sheets mediante Google Apps Script, permitiendo la recopilación automática de datos.

## Instalación y despliegue

Puedes usar el proyecto de dos formas:

- **Localmente:**
  1. Descarga o clona el repositorio.
  2. Abre `index.html` en tu navegador.

- **GitHub Pages:**
  1. Sube el contenido del repositorio a una rama llamada `gh-pages`.
  2. Activa GitHub Pages en la configuración del repositorio.
  3. Accede a la URL pública que te proporciona GitHub Pages.

## Uso de los formularios

- **Solicitud de Grabación (`grabacion.html`):**
  Permite solicitar la grabación de partidos o entrenamientos. El formulario está conectado a Google Sheets y almacena los datos enviados automáticamente.

- **Scouting (`scouting.html`):**
  Permite solicitar información de equipos o jugadores. También está conectado a Google Sheets para almacenar las solicitudes.

## Estructura del proyecto

| Archivo/Fichero         | Descripción                                                      |
|------------------------|------------------------------------------------------------------|
| `index.html`           | Página principal con acceso a los dos formularios                |
| `grabacion.html`       | Formulario de solicitud de grabación                             |
| `scouting.html`        | Formulario de scouting de equipos/jugadores                      |
| `formulario.js`        | Lógica JavaScript compartida para ambos formularios              |
| `css/estilos.css`      | Estilos CSS para la interfaz                                     |
| `escudo.jpg`           | Imagen del escudo del club                                       |
| `favicon.ico`          | Icono de la página                                               |

## Integración con Google Apps Script

Ambos formularios están conectados a Google Sheets mediante Google Apps Script. Para usar esta funcionalidad:

1. Crea una hoja de cálculo en Google Sheets.
2. Ve a "Extensiones" → "Apps Script" y pega el script que recibiste para procesar los formularios.
3. Publica el script como "Web App" y copia la URL.
4. Sustituye la URL del endpoint en el archivo `formulario.js` por la tuya.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.
