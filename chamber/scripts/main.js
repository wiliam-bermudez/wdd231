// main.js
import { setupMenu } from "./menu.js";
import { loadWeather } from "./weather.js";
import { loadSpotlights } from "./chamberHome.js";
import { loadDirectory } from "./chamber.js";

// Configurar el menú siempre
setupMenu();

// Detectar la página actual
const path = window.location.pathname;

// --- HOME PAGE ---
if (path.includes("index.html") || path === "/" || path.endsWith("/")) {
    loadWeather();           // carga el clima
    loadSpotlights();        // carga spotlights filtrados nivel 2 y 3
}

// --- DIRECTORY PAGE ---
if (path.includes("directory.html")) {
    loadDirectory();         // carga todos los negocios
}
