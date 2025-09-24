// chamberHome.js
export async function loadSpotlights() {
  const container = document.getElementById("spotlights-container");
  if (!container) return; 

  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const filtered = data.filter(b => b.level == "2" || b.level == "3");


    // Renderizar
    container.innerHTML = "";
    filtered.forEach(business => {
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
