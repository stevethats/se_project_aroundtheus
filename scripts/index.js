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

const postTemplate = document.querySelector("#post").content;
const postsSection = document.querySelector(".posts");
const closeButtons = document.querySelectorAll(".modal__close");
const modalList = document.querySelectorAll(".modal");

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscUp);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscUp);
  resetInputErrors();
}

function getCardElement(data) {
  let cardElement = postTemplate.querySelector(".post").cloneNode(true);
  const cardImage = cardElement.querySelector(".post__image");
  const cardTitle = cardElement.querySelector(".post__title");
  const deleteButton = cardElement.querySelector(".post__delete");
  const likeButton = cardElement.querySelector(".post__like");

  deleteButton.addEventListener("click", () => cardElement.remove());

  likeButton.addEventListener("click", () =>
    likeButton.classList.toggle("post__like_active")
  );

  cardImage.addEventListener("click", () => {
    expandModalImage.src = data.link;
    expandModalImage.alt = data.name;
    expandModalText.textContent = data.name;
    openModal(expandModal);
  });

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  return cardElement;
}

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

function renderCard(card, method = "prepend") {
  const cardElement = getCardElement(card);
  postsSection[method](cardElement);
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
  const activePopup = document.querySelector(".modal_opened");
  if (evt.key === "Escape") {
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
