import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

// Get Content Data
const restoCards = document.querySelector('.resto__cards');
fetch('DATA.json')
  .then((response) => response.json())
  .then((responseJson) => {
    const { restaurants } = responseJson;

    restaurants.forEach((data) => {
      restoCards.innerHTML += `
                <article class="resto-card__item">
                    <p class="resto__city">Kota ${data.city}</p>
                    <img src="${data.pictureId}" alt="" class="resto__tumbnail">
                    <div class="resto__content">
                        <div class="resto__rating">
                            <p>${data.rating}</p>
                            <i class="material-icons" aria-label="rating">grade</i>
                        </div>
                        <h1 class="resto__name"><a href="#">${data.name}</a></h1>
                        <p class="resto__description">${data.description.slice(0, 300)} ...</p>
                    </div>
                </article>`;
    });
  })

  .catch(() => {
    restoCards.innerHTML = '<h1 style="font-weight:200;">!!!Oops Something whent wrong</h1>';
  });

const menuIcon = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');

// Change icon when drawer open or close
const changeIcon = () => {
  if (drawer.classList.contains('open')) {
    menuIcon.querySelector('i').innerHTML = 'close'; // change to close icon
  } else {
    menuIcon.querySelector('i').innerHTML = 'menu'; // change to hamburger menu icon
  }
};

// open drawer by click hamburger icon
menuIcon.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  changeIcon();
  event.preventDefault();
});

// Close Drawer when click on main area
const main = document.querySelector('main');

main.addEventListener('click', () => {
  drawer.classList.remove('open');
  changeIcon();
});
