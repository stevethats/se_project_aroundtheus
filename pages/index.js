import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

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

//Calls for editing profile
const editProfileEditButton = document.querySelector(".profile__edit-button");
const editProfileBox = document.querySelector("#profile-modal");
const editProfileForm = document.forms["modal__profile-form"];
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileTitle = editProfileBox.querySelector("[name='modal__name']");
const editProfileDescription = editProfileBox.querySelector(
  "[name='modal__description']"
);

//Calls for adding a post
const addPostButton = document.querySelector(".profile__add-button");
const addPostBox = document.querySelector("#post-modal");
const addPostForm = document.forms["modal__post-form"];
const addPostTitle = addPostBox.querySelector("[name='modal__title']");
const addPostUrl = addPostBox.querySelector("[name='modal__url']");

//Calls for image expand modal
const expandModal = document.querySelector("#expand-modal");
const expandModalImage = expandModal.querySelector(".modal__image");
const expandModalText = expandModal.querySelector(".modal__text");

const postsSection = document.querySelector(".posts");
const closeButtons = document.querySelectorAll(".modal__close");
const modalList = document.querySelectorAll(".modal");

const cardSelector = "#post";

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscUp);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscUp);
}

//Validation
const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_enabled",
};

const editFormValidator = new FormValidator(
  validationSettings,
  editProfileForm
);
const addFormValidator = new FormValidator(validationSettings, addPostForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//Handle functions
const handleImageClick = (data) => {
  expandModalImage.src = data.link;
  expandModalImage.alt = data.name;
  expandModalText.textContent = data.name;
  openModal(expandModal);
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = editProfileTitle.value;
  profileDescription.textContent = editProfileDescription.value;
  closeModal(editProfileBox);
}

function handlePostFormSubmit(evt) {
  evt.preventDefault();
  const newPost = {
    name: addPostTitle.value,
    link: addPostUrl.value,
  };
  renderCard(newPost);
  closeModal(addPostBox);
  addPostForm.reset();
}

//Render card/post
function renderCard(card, method = "prepend") {
  const cardElement = new Card(card, cardSelector, handleImageClick);
  postsSection[method](cardElement.getView());
}

//Close form event listeners
closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});

modalList.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal(evt.currentTarget);
    }
  });
});

function isEscEvent(evt, action) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".modal_opened");
    action(activePopup);
  }
}

function handleEscUp(evt) {
  evt.preventDefault();
  isEscEvent(evt, closeModal);
}

//Edit Profile event listeners
editProfileEditButton.addEventListener("click", function () {
  openModal(editProfileBox);
  editProfileTitle.value = profileTitle.textContent;
  editProfileDescription.value = profileDescription.textContent;
});
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

//Add Post event listeners
addPostButton.addEventListener("click", () => openModal(addPostBox));
addPostForm.addEventListener("submit", handlePostFormSubmit);

initialCards.forEach((card) => renderCard(card, "append"));
