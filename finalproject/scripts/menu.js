// menu.js
export async function loadMenu() {
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
    console.error("Error loading menu:", error);
    container.innerHTML = "<p>Unable to load menu data.</p>";
  }
}
