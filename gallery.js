

const galleryImages = document.querySelectorAll(".gallery-item img");


galleryImages.forEach(image => {
 
  image.style.cursor = "pointer";


  image.addEventListener("click", () => {
    window.open(image.src, "_blank");
  });
});