// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function makeGallery(items) {
    items.map((item) => {
        const markup =
            `<div class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                    />
                </a>
            </div>`

        galleryList.insertAdjacentHTML("beforeend", markup);
    })
}
makeGallery(galleryItems)
console.log(galleryList)

new SimpleLightbox('.gallery__link', {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 1,
});