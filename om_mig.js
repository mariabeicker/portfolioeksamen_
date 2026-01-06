const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");

// Åben popup
function openPopup() {
  popup.classList.add("active");
}

// Luk popup
function closePopup() {
  popup.classList.remove("active");
}

popupClose.addEventListener("click", closePopup);

// Luk hvis man klikker udenfor
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});
