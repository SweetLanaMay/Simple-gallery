import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItemsMarkup = document.querySelector(".gallery");

const itemsMarkup = galleryItems
  .map(
    (item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}"
    alt="${item.description}" />
    </a>
    </li>`
  )
  .join("");

galleryItemsMarkup.innerHTML = itemsMarkup;

console.log(galleryItemsMarkup);

const newLightBox = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250,
});
