export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".post__like")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });

    this._cardElement
      .querySelector(".post__delete")
      .addEventListener("click", () => {
        this._handleDeletePost();
      });

    this._cardElement
      .querySelector(".post__image")
      .addEventListener("click", () => {
        this._handleImageClick(this._data);
      });
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".post__like")
      .classList.toggle("post__like_active");
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
    console.log(this._data.link);

    this._cardElement.querySelector(".post__image").src = this._data.link;
    this._cardElement.querySelector(".post__image").alt = this._data.name;
    this._cardElement.querySelector(".post__title").textContent =
      this._data.name;

    this._setEventListeners();

    return this._cardElement;
  }
}
