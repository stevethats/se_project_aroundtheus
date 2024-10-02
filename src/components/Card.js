export default class Card {
  constructor(
    {
      data,
      handleImageClick,
      handleLike,
      openConfirmDelete,
      handleConfirmDeleteSubmit,
    },
    cardSelector
  ) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLike = handleLike;
    this._openConfirmDelete = openConfirmDelete;
    this._handleConfirmDeleteSubmit = handleConfirmDeleteSubmit;
    this._confirmDeleteModal = document.querySelector("#post-delete-modal");
    this._confirmDeleteForm = document.querySelector(
      "#modal__post-delete-form"
    );
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLike(this);
    });

    this._deleteButton.addEventListener("click", () => {
      this._openConfirmDelete();
    });

    this._confirmDeleteForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleConfirmDeleteSubmit(this);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._data);
    });
  }

  handleAddLikeButton() {
    this._likeButton.classList.add("post__like_active");
  }

  handleRemoveLikeButton() {
    this._likeButton.classList.remove("post__like_active");
  }

  handleDeletePost() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".post")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getTemplate();

    this._likeButton = this._cardElement.querySelector(".post__like");
    this._deleteButton = this._cardElement.querySelector(".post__delete");
    this._cardImage = this._cardElement.querySelector(".post__image");
    this._cardName = this._cardElement.querySelector(".post__title");

    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._cardName.textContent = this._data.name;

    this._setEventListeners();

    return this._cardElement;
  }
}
