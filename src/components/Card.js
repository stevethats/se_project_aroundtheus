export default class Card {
  constructor({ data, handleImageClick }, cardSelector) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeletePost();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._data);
    });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("post__like_active");
  }

  _handleDeletePost() {
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
