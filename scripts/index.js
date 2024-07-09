const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const editProfileEditButton = document.querySelector(".profile__edit-button");
const editProfileBox = document.querySelector(".modal");
const editProfileCloseButton = document.querySelector(".modal__close");
const editProfileForm = document.forms["modal__form"];
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileTitle = editProfileBox.querySelector("[name='modal__title']");
const editProfileDescription = editProfileBox.querySelector(
  "[name='modal__description']"
);
let postTemplate = document.querySelector("#post").content;
let postsSection = document.querySelector(".posts");

function getCardElement(data) {
  let cardElement = postTemplate.querySelector(".post").cloneNode(true);
  const cardImage = cardElement.querySelector(".post__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardElement.querySelector(".post__title").textContent = data.name;
  return cardElement;
}

function closeProfileModal() {
  editProfileBox.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = editProfileTitle.value;
  profileDescription.textContent = editProfileDescription.value;
  closeProfileModal();
}

editProfileEditButton.addEventListener("click", function () {
  editProfileBox.classList.add("modal_opened");
  editProfileTitle.value = profileTitle.textContent;
  editProfileDescription.value = profileDescription.textContent;
});

editProfileCloseButton.addEventListener("click", closeProfileModal);

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  postsSection.append(getCardElement(initialCards[i]));
}
