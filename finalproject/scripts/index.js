// index.js
export async function loadDishes() {
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

    // Filtrado de categorías
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const category = btn.dataset.category;
        const cards = document.querySelectorAll(".dish-card");

        cards.forEach(card => {
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
