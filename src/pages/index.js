import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  validationSettings,
  selectors,
  addPostButton,
  editProfileButton,
  editProfileForm,
  addPostForm,
  profileNameInput,
  profileJobInput,
  profilePictureModal,
  profilePictureContainer,
  profilePicture,
  confirmDeleteModal,
  confirmDeletePostClose,
  confirmDeleteForm,
  configApi,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
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
const handleProfilePictureSubmit = ({ picture }) => {
  renderLoading(true, profilePictureModal);

  api
    .updateAvatar(picture)
    .then((avatarUrl) => {
      profilePicture.src = avatarUrl;
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    })
    .finally(() => {
      profilePictureFormPopup.close();
      renderLoading(false, profilePictureModal, "Save");
    });
};

const handleProfileFormSubmit = ({ name, job }) => {
  renderLoading(true, editProfileForm, "Save");

  api
    .updateProfileInfo({ name, about: job })
    .then((newData) => {
      userInfo.setUserInfo({
        name: newData.name,
        job: newData.about,
      });
    })
    .catch((error) => {
      console.log(newData);
      console.error(`Error: ${error}`);
    })
    .finally(() => {
      renderLoading(true, editProfileForm, "Save");
      profileFormPopup.close();
    });
};

const handlePostFormSubmit = ({ title, url }) => {
  renderLoading(true, addPostForm, "Save");

  const newPost = {
    name: title,
    link: url,
  };

  api.createApiCard(newPost).then((createdCard) => {
    cardSection.addNewItem(createCard(createdCard));
    renderLoading(false, addPostForm, "Save");
    postFormPopup.close();
  });

  formValidators[selectors.addPostForm].disableButton();
};

const openConfirmDelete = () => {
  confirmDeletePopup.open();
  formValidators[selectors.confirmDeleteForm].enableButton();
};

const handleConfirmDeleteSubmit = (card) => {
  renderLoading(true, confirmDeleteForm, "Delete");

  api
    .deleteCard(card._data._id)
    .then(() => {
      card.handleDeletePost();
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      renderLoading(false, confirmDeleteForm, "Delete");
      confirmDeletePopup.close();
    });
};

const handleLike = (card) => {
  if (!card._data.isLiked) {
    console.log(card);
    api
      .likeCard(card._data._id)
      .then(() => {
        card.handleAddLikeButton();
      })
      .catch((error) => {
        console.error(`Error adding like: ${error}`);
      });
  } else {
    api
      .dislikeCard(card._data._id)
      .then(() => {
        card.handleRemoveLikeButton();
      })
      .catch((error) => {
        console.error(`Error removing like: ${error}`);
      });
  }
};

function renderLoading(isLoading, modal, text) {
  if (isLoading) {
    modal.querySelector(".modal__button").textContent = "Saving...";
  } else {
    modal.querySelector(".modal__button").textContent = text;
  }
}

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
      handleLike,
      openConfirmDelete,
      handleConfirmDeleteSubmit,
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
  openConfirmDelete
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
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
cardPreviewPopup.setEventListeners();
profileFormPopup.setEventListeners();
postFormPopup.setEventListeners();
profilePictureFormPopup.setEventListeners();
confirmDeletePopup.setEventListeners();

// api
//   .deleteCard("66fbc3efc26271001a0ffc20")
//   .then((result) => {
//     return result;
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// api
//   .likeCard("66fbc39ac26271001a0ffc14")
//   .then((result) => {
//     return result;
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// api
//   .dislikeCard("66fbc39ac26271001a0ffc14")
//   .then((result) => {
//     return result;
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// api
//   .createApiCard({
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
//   })
//   .then((createdCard) => {
//     cardSection.addNewItem(createCard(createdCard));
//     postFormPopup.close();
//   });
