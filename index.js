// Get DOM Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

// Events

// Open

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close If Outside Click
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
