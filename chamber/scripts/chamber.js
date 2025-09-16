const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("business-container");

  fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(business => {

        const card = document.createElement("div");
        card.classList.add("business-card");

        const img = document.createElement("img");
        img.src = business.image;
        img.alt = business.name;

        const name = document.createElement("h3");
        name.textContent = business.name;

        const tagline = document.createElement("p");
        tagline.textContent = business.tagline;

        const email = document.createElement("p");
        email.innerHTML = `<strong>Email:</strong> ${business.email}`;

        const phone = document.createElement("p");
        phone.innerHTML = `<strong>Phone:</strong> ${business.phone}`;

        const url = document.createElement("p");
        url.innerHTML = `<a href="${business.url}" target="_blank">${business.url}</a>`;
        
        const level = document.createElement("p");
        level.innerHTML = `<strong>Member level: </strong> ${business.level}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(tagline);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading businesses:", error);
      container.innerHTML = "<p>Unable to load business data.</p>";
    });
});
