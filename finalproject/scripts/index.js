// main.js

async function loadDishes() {
  const container = document.getElementById("dish-grid");
  if (!container) return;

  try {
    const response = await fetch('data/dishes.json');
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    const dishes = data.salvadoran_dishes;

    
    container.innerHTML = "";
    dishes.forEach(dish => {
      const card = document.createElement("div");
      card.classList.add("dish-card");
      card.dataset.category = dish.category;

      card.innerHTML = `
        <img src="${dish.photo}" alt="${dish.name}">
        <h3>${dish.name}</h3>
        <p><strong>Category:</strong> ${dish.category}</p>
      `;

      container.appendChild(card);
    });

  
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const category = btn.dataset.category;
        const cards = document.querySelectorAll(".dish-card");

        cards.forEach(card => {
          // Map Category #1,2,3 a Gold, Silver, Premium
          let catMap = {
            "cat1": "Gold",
            "cat2": "Silver",
            "cat3": "Premium"
          };
          const dishCategory = card.dataset.category;
          if (category === "all" || dishCategory === catMap[category]) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

  } catch (error) {
    console.error("Error loading dishes:", error);
    container.innerHTML = "<p>Unable to load dishes data.</p>";
  }
}


loadDishes();

/* NAV JS*/

function setupMenu() {
    const menuButton = document.getElementById("mobile-nav");
    const navLinks = document.getElementById("nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }

    const year = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");

    if (year) year.textContent = new Date().getFullYear();
    if (lastModified) lastModified.textContent = document.lastModified;
}



/* MENU.JS */

async function loadMenu() {
  const container = document.getElementById("menu-container");
  const Modal = document.getElementById("Desc-modal");
  const Closemodal = document.getElementById("closeModal");
  const contentModal = document.getElementById("Content-modal");

  if (!container) return;

  try {
    const response = await fetch("data/dishes.json");
    const data = await response.json();
    const dishes = data.salvadoran_dishes;

    container.innerHTML = "";
    dishes.forEach(dish => {
  const card = document.createElement("div");
  card.classList.add("menu-card-dis");

  card.innerHTML = `
      <figure>
        <img src="${dish.photo}" alt="${dish.name} logo" loading="lazy">
      </figure>
      <h2>${dish.name}</h2>
      <p>${dish.price}</p>
      <button class="learn-more-btn" data-name="${dish.name}" data-description="${dish.description}" data-price="${dish.price}">Learn More</button>
  `;
      container.appendChild(card);
    });

   const modalButtons = document.querySelectorAll(".learn-more-btn");

     modalButtons.forEach(btn => {
       btn.addEventListener("click", () => {
         const name = btn.getAttribute("data-name");
         const description = btn.getAttribute("data-description");
         const price = btn.getAttribute("data-price");

         contentModal.innerHTML = `
           <h2>${name}</h2>
           <p>${description}</p>
           <strong>Price: ${price}</strong>
         `;

         Modal.showModal();
       });
     });

     Closemodal.addEventListener("click", () => {
       Modal.close();
     });

  } catch (error) {
    console.error("Error loading businesses:", error);
    container.innerHTML = "<p>Unable to load business data.</p>";
  }
}

loadMenu()

/* THANK YOU.HTML */ 
