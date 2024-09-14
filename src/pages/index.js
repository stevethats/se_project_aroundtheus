import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  validationSettings,
  selectors,
  addPostButton,
  editProfileButton,
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
  document.querySelector("#modal__input_type_name").value =
    userInfo.getUserInfo().name;
  document.querySelector("#modal__input_type_description").value =
    userInfo.getUserInfo().job;
  profileFormPopup.open();
});

addPostButton.addEventListener("click", () => {
  postFormPopup.open();
});

const handleProfileFormSubmit = ({ name, job }) => {
  userInfo.setUserInfo({ name, job });
  profileFormPopup.close();
};

const handlePostFormSubmit = ({ title, url }) => {
  const newPost = [
    {
      name: title,
      link: url,
    },
  ];
  const newCard = new Section(
    {
      items: newPost,
      renderer: (data) => {
        const cardElement = new Card(
          {
            data,
            handleImageClick: (imgData) => {
              cardPreviewPopup.open(imgData);
            },
          },
          selectors.postTemplate
        );
        cardSection.addNewItem(cardElement.getView());
      },
    },
    selectors.postSection
  );
  newCard.renderItems();
  postFormPopup.close();
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
      const cardElement = new Card(
        {
          data,
          handleImageClick: (imgData) => {
            cardPreviewPopup.open(imgData);
          },
        },
        selectors.postTemplate
      );
      cardSection.addItem(cardElement.getView());
    },
  },
  selectors.postSection
);

//initialize instances
cardSection.renderItems();
cardPreviewPopup.setEventListeners();
profileFormPopup.setEventListeners();
postFormPopup.setEventListeners();
