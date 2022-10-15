"use strict";
const hamburger = document.querySelector(".hmburger");
const navMenu = document.querySelector(".nav__mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// modal Window Display
const card = document.querySelector(".card");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseMB = document.querySelector(".close-card");
const btnsOpenModal = document.querySelectorAll(".btn");

const openModal = function () {
  modal.classList.remove("hidden");
  card.classList.remove("hidden");
  overlay.classList.remove("hidden");
  hamburger.classList.add("hidden");
};
const closeMB = function () {
  card.classList.add("hidden");
  overlay.classList.add("hidden");
  hamburger.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

btnCloseMB.addEventListener("click", closeMB);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Check email is valid
const form = document.getElementById("formD");
const formB = document.getElementById("FMB");
const email = document.querySelector(".email");

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    email.style.borderColor = "#2ecc71";
  } else {
    email.style.borderColor = "#e74c3c";
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkEmail(email);
});
