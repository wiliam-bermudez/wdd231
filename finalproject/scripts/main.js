// main.js
import { loadDishes } from './index.js';
import { loadMenu } from './menu.js';
import { setupMenu } from './nav.js';
import './thankyou.js'; 

document.addEventListener("DOMContentLoaded", () => {
  setupMenu();

  if (document.getElementById("dish-grid")) {
    loadDishes();
  }

  if (document.getElementById("menu-container")) {
    loadMenu();
  }
});
