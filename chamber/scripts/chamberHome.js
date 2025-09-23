function getLevelName(level) {
    switch (level) {
        case "1": return "Bronze";
        case "2": return "Silver";
        case "3": return "Gold";
        default: return "Unknown";
    }
}

export async function loadSpotlights() {
    const spotlightContainer = document.getElementById("business-container");
    if (!spotlightContainer) return;

    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        // Filter Silver (2) y Gold (3)
        const eligible = members.filter(m => m.level === "2" || m.level === "3");

        const shuffled = eligible.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

        spotlightContainer.innerHTML = "";

        selected.forEach(business => {
            const card = document.createElement("div");
            card.classList.add("business-card");

            card.innerHTML = `
                <img src="${business.image}" alt="${business.name}">
                <h3>${business.name}</h3>
                <p><em>${business.tagline}</em></p>
                <p><strong>Email:</strong> ${business.email}</p>
                <p><strong>Phone:</strong> ${business.phone}</p>
                <p><a href="${business.url}" target="_blank">Website</a></p>
                <p><strong>Member level:</strong> ${getLevelName(business.level)}</p>
            `;
            spotlightContainer.appendChild(card);
        });
    } catch (err) {
        console.error("Spotlights error:", err);
    }
}
