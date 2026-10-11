// Barber Data Source (Add, remove, or modify barbers here)
const barbersData = [
  {
    id: "adrian",
    name: "Adrian Andrew",
    handle: "https://instagram.com/inabarberlounge",
    displayHandle: "@inabarberlounge",
    image: "assets/images/adrian-andrew.webp",
    booksyUrl: "https://www.fresha.com/a/ina-barber-lounge-tucson-3701-west-ina-road-zcyfznmk/all-offer?menu=true&pId=828985&rwg_token=AE37R_jGQUV1cWFjjhIP-Zf0UKC5A-JwyKrlxwBn6qRLK0fC6cGjKKOaE3YmpzYmBW0Rl9XsIZDX96LnpYf6t97hJwMvdqcB7g=="
  },

  {
    id: "eric",
    name: "Eric Moreno",
    handle: "https://instagram.com/eriictrill",
    displayHandle: "@eriictrill",
    image: "assets/images/eric-moreno.webp",
    booksyUrl: "https://www.fresha.com/a/ina-barber-lounge-tucson-3701-west-ina-road-zcyfznmk/all-offer?menu=true&pId=828985&rwg_token=AE37R_jGQUV1cWFjjhIP-Zf0UKC5A-JwyKrlxwBn6qRLK0fC6cGjKKOaE3YmpzYmBW0Rl9XsIZDX96LnpYf6t97hJwMvdqcB7g=="
  },

  {
    id: "dominique",
    name: "Dominique Lozano",
    handle: "https://instagram.com/_dominique.the.barber_",
    displayHandle: "@_dominique.the.barber_",
    image: "assets/images/dominique-lozano.webp",
    booksyUrl: "https://www.fresha.com/a/ina-barber-lounge-tucson-3701-west-ina-road-zcyfznmk/all-offer?menu=true&pId=828985&rwg_token=AE37R_jGQUV1cWFjjhIP-Zf0UKC5A-JwyKrlxwBn6qRLK0fC6cGjKKOaE3YmpzYmBW0Rl9XsIZDX96LnpYf6t97hJwMvdqcB7g=="
  },

  {
    id: "cesar",
    name: 'Cesar',
    handle: "https://instagram.com/inabarberlounge",
    displayHandle: "inabarberlounge",
    image: "assets/images/cesar.webp",
    booksyUrl: "https://www.fresha.com/a/ina-barber-lounge-tucson-3701-west-ina-road-zcyfznmk/all-offer?menu=true&pId=828985&rwg_token=AE37R_jGQUV1cWFjjhIP-Zf0UKC5A-JwyKrlxwBn6qRLK0fC6cGjKKOaE3YmpzYmBW0Rl9XsIZDX96LnpYf6t97hJwMvdqcB7g=="
  },

  {
    id: "noah",
    name: 'Noah Pallanes',
    handle: "https://instagram.com/swayxblendz",
    displayHandle: "@swayxblendz",
    image: "assets/images/noah-pallanes.webp",
    booksyUrl: "https://www.fresha.com/a/ina-barber-lounge-tucson-3701-west-ina-road-zcyfznmk/all-offer?menu=true&pId=828985&rwg_token=AE37R_jGQUV1cWFjjhIP-Zf0UKC5A-JwyKrlxwBn6qRLK0fC6cGjKKOaE3YmpzYmBW0Rl9XsIZDX96LnpYf6t97hJwMvdqcB7g=="
  }
];

// Render Function
function renderBarbers(barbers) {
  const container = document.getElementById("barbers-container");
  if (!container) return;

  if (!barbers || barbers.length === 0) {
    container.innerHTML = `<p class="no-barbers">No barbers available at this time. Check back soon!</p>`;
    return;
  }

  container.innerHTML = barbers
    .map(
      (barber) => `
    <article class="barber-card" id="barber-${barber.id}">
      <div class="barber-card-media">
        <img 
          src="${barber.image}" 
          alt="${barber.name} - Barber" 
          loading="lazy"
          onerror="this.onerror=null; this.src='assets/images/placeholder.jpg';"
        >
      </div>

      <div class="barber-card-content">
        <div class="card-bg-hex"></div>
        <h2>${barber.name}</h2>
        <a href="${barber.handle}" class="barber-handle" target="_blank" rel="noopener noreferrer">
        Instagram: ${barber.displayHandle}
        </a>
        <a 
          href="${barber.booksyUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="book-btn"
        >
          Book Appointment
        </a>
      </div>
    </article>
  `
    )
    .join("");
}

// Execute on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderBarbers(barbersData);
});