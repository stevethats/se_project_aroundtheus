import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  validationSettings,
  selectors,
  addPostButton,
  editProfileButton,
  profileNameInput,
  profileJobInput,
  profilePictureModal,
  profilePicture,
  confirmDeleteModal,
  confirmDeletePostClose,
  confirmDeleteForm,
  configApi,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";

profilePictureModal.addEventListener("click", () => {
  profilePictureFormPopup.open();
});

editProfileButton.addEventListener("click", () => {
  profileNameInput.value = userInfo.getUserInfo().name;
  profileJobInput.value = userInfo.getUserInfo().job;
  profileFormPopup.open();

  formValidators[selectors.editProfileForm].resetValidation();
});

addPostButton.addEventListener("click", () => {
  postFormPopup.open();
});

const handleProfilePictureSubmit = ({ picture }) => {
  profilePicture.src = picture;
  profilePictureFormPopup.close();
};

const handleProfileFormSubmit = ({ name, job }) => {
  userInfo.setUserInfo({ name, job });
  profileFormPopup.close();
};

const handlePostFormSubmit = ({ title, url }) => {
  const newPost = {
    name: title,
    link: url,
  };
  const newCard = createCard(newPost);
  cardSection.addNewItem(newCard);
  postFormPopup.close();

  formValidators[selectors.addPostForm].disableButton();
};

const handleConfirmDelete = () => {
  confirmDeleteModal.classList.add("modal_opened");
  formValidators[selectors.confirmDeleteForm].enableButton();
};

//Form validation
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formId = formElement.getAttribute("id");

    formValidators[formId] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationSettings);

//create instances
const userInfo = new UserInfo({
  name: selectors.profileName,
  job: selectors.profileJob,
});

const createCard = (data) => {
  const cardElement = new Card(
    {
      data,
      handleImageClick: (imgData) => {
        cardPreviewPopup.open(imgData);
      },
      handleConfirmDelete,
    },
    selectors.postTemplate
  );
  return cardElement.getView();
};

const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
const profilePictureFormPopup = new PopupWithForm(
  selectors.profilePictureModal,
  handleProfilePictureSubmit
);
const profileFormPopup = new PopupWithForm(
  selectors.editProfileModal,
  handleProfileFormSubmit
);
const postFormPopup = new PopupWithForm(
  selectors.addPostModal,
  handlePostFormSubmit
);

const confirmDeletePopup = new PopupWithForm(
  selectors.confirmDeletePostModal,
  handleConfirmDelete
);

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = createCard(data);
      cardSection.addItem(cardElement);
    },
  },
  selectors.postSection
);

//initialize instances
cardSection.renderItems();
cardPreviewPopup.setEventListeners();
profileFormPopup.setEventListeners();
postFormPopup.setEventListeners();
profilePictureFormPopup.setEventListeners();
confirmDeletePopup.setEventListeners();

// const api = new Api(configApi);

// api
//   .getInitialCards()
//   .then((result) => {
//     return result;
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// api
//   .getUserInfo()
//   .then((result) => {
//     return result;
//   })
//   .catch((err) => {
//     console.error(err);
//   });
