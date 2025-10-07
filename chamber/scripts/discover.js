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

  const messageBox = document.getElementById('message-box');

    // Retrieve last visit from localStorage
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();

    if (!lastVisit) {
      // First visit
      messageBox.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const lastVisitTime = Number(lastVisit);
      const timeDifference = currentTime - lastVisitTime;
      const daysBetween = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      if (timeDifference < 1000 * 60 * 60 * 24) {
        messageBox.textContent = "Back so soon! Awesome!";
      } else if (daysBetween === 1) {
        messageBox.textContent = `You last visited ${daysBetween} day ago.`;
      } else {
        messageBox.textContent = `You last visited ${daysBetween} days ago.`;
      }
    }

    // Store current visit time for the next visit
    localStorage.setItem('lastVisit', currentTime);
}


