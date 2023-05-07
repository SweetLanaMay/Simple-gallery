import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItemsMarkup = document.querySelector(".gallery");

const itemsMarkup = galleryItems
  .map(
    (item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}" />
    </a>
    </li>`
  )
  .join("");

galleryItemsMarkup.innerHTML = itemsMarkup;

console.log(galleryItemsMarkup);

galleryItemsMarkup.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.tagName === "IMG") {
    const originalImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(
      `<img src="${originalImageUrl}" width="800" height="600">`
    );

    instance.show();
  }
}
