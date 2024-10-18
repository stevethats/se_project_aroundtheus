import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  validationSettings,
  selectors,
  editProfileButton,
  editProfileForm,
  addPostButton,
  addPostForm,
  profileNameInput,
  profileJobInput,
  editProfilePictureForm,
  profilePictureContainer,
  confirmDeleteForm,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { api } from "../components/Api.js";

//Event Listeners
profilePictureContainer.addEventListener("click", () => {
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

//Handle Submit functions
function handleSubmit(request, popupModal, popupForm, renderingText) {
  popupModal.renderLoading(true, renderingText);
  request()
    .then(() => {
      popupModal.close();
      popupForm.reset();
    })
    .catch(console.error)
    .finally(() => {
      popupModal.renderLoading(false, renderingText);
    });
}

const handleProfilePictureSubmit = ({ picture }) => {
  function makeRequest() {
    return api.updateAvatar(picture).then((newData) => {
      userInfo.setUserInfo({
        name: newData.name,
        job: newData.about,
        avatar: newData.avatar,
      });
    });
  }

  handleSubmit(makeRequest, profilePictureFormPopup, editProfilePictureForm);
};

const handleProfileFormSubmit = ({ name, job }) => {
  function makeRequest() {
    return api.updateProfileInfo({ name, about: job }).then((newData) => {
      userInfo.setUserInfo({
        name: newData.name,
        job: newData.about,
        avatar: newData.avatar,
      });
    });
  }

  handleSubmit(makeRequest, profileFormPopup, editProfileForm);
};

const handlePostFormSubmit = ({ title, url }) => {
  const newPost = {
    name: title,
    link: url,
  };

  function makeRequest() {
    return api.createApiCard(newPost).then((createdCard) => {
      cardSection.addNewItem(createCard(createdCard));
      formValidators[selectors.addPostForm].disableButton();
    });
  }

  handleSubmit(makeRequest, postFormPopup, addPostForm);
};

const handleDelete = (card) => {
  confirmDeletePopup.open();
  formValidators[selectors.confirmDeleteForm].enableButton();
  confirmDeletePopup.setSubmitFunction(() => {
    function makeRequest() {
      return api.deleteCard(card.data._id).then(() => {
        card.handleDeletePost();
      });
    }

    handleSubmit(makeRequest, confirmDeletePopup, confirmDeleteForm);
  });
};

const handleLike = (card) => {
  const updateLikeState = () => {
    card.data.isLiked = !card.data.isLiked;
  };

  if (!card.data.isLiked) {
    api
      .likeCard(card.data._id)
      .then(() => {
        card.handleAddLikeButton();
        updateLikeState();
      })
      .catch((error) => {
        console.error(`Error adding like: ${error}`);
      });
  } else {
    api
      .dislikeCard(card.data._id)
      .then(() => {
        card.handleRemoveLikeButton();
        updateLikeState();
      })
      .catch((error) => {
        console.error(`Error removing like: ${error}`);
      });
  }
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
  avatar: selectors.profileAvatar,
});

const createCard = (data) => {
  const cardElement = new Card(
    {
      data,
      handleImageClick: (imgData) => {
        cardPreviewPopup.open(imgData);
      },
      handleLike,
      handleDelete,
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

const confirmDeletePopup = new PopupWithConfirm(
  selectors.confirmDeletePostModal
);

const cardSection = new Section(
  {
    renderer: (data) => {
      const cardElement = createCard(data);
      cardSection.addItem(cardElement);
    },
  },
  selectors.postSection
);

//initialize instances

//Initial Cards
api
  .getInitialCards()
  .then((cards) => {
    cardSection.renderItems(cards);
  })
  .catch(console.error);

cardPreviewPopup.setEventListeners();
profileFormPopup.setEventListeners();
postFormPopup.setEventListeners();
profilePictureFormPopup.setEventListeners();
confirmDeletePopup.setEventListeners();

api
  .getUserInfo()
  .then((res) => {
    return userInfo.setUserInfo({
      name: res.name,
      job: res.about,
      avatar: res.avatar,
    });
  })
  .catch(console.error);
