/*const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;*/


/* WEATHER || This is for index.html*/
/*document.addEventListener("DOMContentLoaded", () => {
  const placeName =document.getElementById('placeName');
  const icon = document.getElementById('icon-weather');
  const descPlace =document.getElementById('description-place');
  const temperature =document.getElementById('temp');

  const key = "26f433b808752ec3f4c6ac47bc879b0f";
  const latitude = 16.766287313463078;
  const longitude = -3.003259015133361;

  const url = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric"`;
  async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
       displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

  // DISPLAY THE WEATHER 
  function displayResults(data) {
      placeName.innerHTML = data.name;
      descPlace.innerHTML = data.weather[0].description;
      temperature.innerHTML = `${data.main.temp}&deg;F`;
      const iconsrc = `https://openweathermap.org/img/wn/10d@2x.png
`;
      icon.setAttribute('SRC', iconsrc);
      icon.setAttribute('ALT', data.weather[0].description);
  }

apiFetch();
});*/


/*SPOTLIGHTS SETTING || This is for the directory.html*/

/*document.addEventListener("DOMContentLoaded", () => {
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
        img.classList.add("business-img");

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
});*/

// chamber.js
export async function loadDirectory() {
  const container = document.getElementById("business-container");
  if (!container) return;

  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    container.innerHTML = "";
    data.forEach(business => {
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
    console.error("Error loading businesses:", error);
    container.innerHTML = "<p>Unable to load business data.</p>";
  }
}

