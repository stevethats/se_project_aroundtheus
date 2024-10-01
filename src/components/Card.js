import { selectors } from "../utils/constants";

export default class Card {
  constructor({ data, handleImageClick, handleConfirmDelete }, cardSelector) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleConfirmDelete = handleConfirmDelete;
    this._confirmDeleteModal = document.querySelector("#post-delete-modal");
    this._confirmDeleteForm = document.querySelector(
      "#modal__post-delete-form"
    );
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleConfirmDelete();
      this._confirmDeleteForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._cardElement.remove();
        this._confirmDeleteModal.classList.remove("modal_opened");
      });
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._data);
    });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("post__like_active");
  }

  _handleDeletePost(evt) {
    evt.preventDefault();
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
