const container = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const result = document.getElementById("para");

let selectedImages = [];


const baseImages = ["img1", "img2", "img3", "img4", "img5"];


const randomIndex = Math.floor(Math.random() * baseImages.length);
const duplicate = baseImages[randomIndex];


let images = [...baseImages, duplicate];


images.sort(() => Math.random() - 0.5);


images.forEach((cls) => {
  const img = document.createElement("img");
  img.classList.add(cls);
  img.dataset.id = cls;

  img.addEventListener("click", () => handleClick(img));

  container.appendChild(img);
});


function handleClick(img) {

  if (
    selectedImages.length >= 2 ||
    img.classList.contains("selected")
  ) {
    return;
  }

  img.classList.add("selected");
  selectedImages.push(img);

  
  resetBtn.style.display = "inline-block";


  if (selectedImages.length === 2) {
    verifyBtn.style.display = "inline-block";
  }
}


resetBtn.addEventListener("click", () => {
  selectedImages.forEach(img => img.classList.remove("selected"));
  selectedImages = [];

  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  result.textContent = "";
});


verifyBtn.addEventListener("click", () => {
  const [img1, img2] = selectedImages;

  if (img1.dataset.id === img2.dataset.id) {
    result.textContent = "You are a human. Congratulations!";
  } else {
    result.textContent =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }

  verifyBtn.style.display = "none";
});