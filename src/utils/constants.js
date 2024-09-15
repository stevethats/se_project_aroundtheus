export const initialCards = [
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

//Validation
export const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_enabled",
};

export const selectors = {
  postSection: ".posts",
  postTemplate: "#post",
  previewPopup: "#expand-modal",
  editProfileModal: "#profile-modal",
  editProfileForm: "modal__profile-form",
  addPostModal: "#post-modal",
  addPostForm: "modal__post-form",
  profileName: ".profile__name",
  profileJob: ".profile__description",
};

export const addPostButton = document.querySelector(".profile__add-button");

export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const profileNameInput = document.querySelector(
  "#modal__input_type_name"
);
export const profileJobInput = document.querySelector(
  "#modal__input_type_description"
);
