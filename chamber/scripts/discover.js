export async function loadDiscover() {
  const container = document.getElementById("discover-container");
  if (!container) return;

  try {
    const response = await fetch("data/discover.json");
    const data = await response.json();

    container.innerHTML = "";
    data.forEach(business => {
      const card = document.createElement("div");
      card.classList.add("business-card-dis");

      card.innerHTML = `
          <figure>
          <img src="${business.image_url}" alt="${business.name} logo" loading="lazy">
          </figure>
          <h2>${business.name}</h2>
          <address>${business.address}</address>
          <p>${business.description}</p>
          <button class="learn-more">Learn More</button>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading businesses:", error);
    container.innerHTML = "<p>Unable to load business data.</p>";
  }
}