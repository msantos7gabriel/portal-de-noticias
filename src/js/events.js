const cards = document.querySelectorAll(".noticia_principal");

cards.forEach((card) => {
  const image = card.querySelector("img");

  if (!image) return;

  card.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.08)";
  });

  card.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
});
