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
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";

const userInfo = new UserInfo({
  name: selectors.profileName,
  job: selectors.profileJob,
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
const createCard = (data) => {
  const cardElement = new Card(
    {
      data,
      handleImageClick: (imgData) => {
        cardPreviewPopup.open(imgData);
      },
    },
    selectors.postTemplate
  );
  return cardElement.getView();
};

const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
const profileFormPopup = new PopupWithForm(
  selectors.editProfileModal,
  handleProfileFormSubmit
);
const postFormPopup = new PopupWithForm(
  selectors.addPostModal,
  handlePostFormSubmit
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
