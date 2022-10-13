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

// Mobile version of Overlay
