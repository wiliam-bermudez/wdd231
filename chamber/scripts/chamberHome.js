// chamberHome.js
export async function loadSpotlights() {
  const container = document.getElementById("spotlights-container");
  if (!container) return; // evitar error si no existe

  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Filtrar solo nivel 2 o 3
    const filtered = data.filter(b => b.level === "2" || b.level === "3");

    // Mezclar aleatoriamente
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // Seleccionar 2 o 3
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    // Renderizar
    container.innerHTML = "";
    selected.forEach(business => {
      const card = document.createElement("div");
      card.classList.add("business-card");

      card.innerHTML = `
        <img src="${business.image}" alt="${business.name}" class="business-img">
        <h3>${business.name}</h3>
        <p>${business.tagline}</p>
        <p><strong>Email:</strong> ${business.email}</p>
        <p><strong>Phone:</strong> ${business.phone}</p>
        <p><a href="${business.url}" target="_blank">${business.url}</a></p>
        <p><strong>Member level:</strong> ${business.level}</p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading spotlights:", error);
    container.innerHTML = "<p>Unable to load spotlight members.</p>";
  }
}
