import { setupMenu } from "./menu.js";
import { loadWeather } from "./weather.js";
import { loadSpotlights } from "./chamberHome.js";
import { loadDirectory } from "./chamber.js";

setupMenu();

const path = window.location.pathname;

if (path.includes("index.html")) {
    loadWeather();
    loadSpotlights();
}

if (path.includes("directory.html")) {
    loadDirectory();
}
