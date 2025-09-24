// main.js
import { setupMenu } from "./menu.js";
import { loadWeather } from "./weather.js";
import { loadSpotlights } from "./chamberHome.js";
import { loadDirectory } from "./chamber.js";

setupMenu();

const path = window.location.pathname;

const isPage = (page) => path.endsWith(page) || path.includes(page);
if (isPage("index.html") || path === "/" || path.endsWith("/")) {
  loadWeather();
  loadSpotlights();
}

if (isPage("directory.html")) {
  loadDirectory();
}
