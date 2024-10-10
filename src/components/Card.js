export default class Card {
  constructor(
    { data, handleImageClick, handleLike, handleDelete },
    cardSelector
  ) {
    this.data = data;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLike = handleLike;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLike(this);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDelete(this);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this.data);
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

    this._cardImage.src = this.data.link;
    this._cardImage.alt = this.data.name;
    this._cardName.textContent = this.data.name;

    if (this.data.isLiked) {
      this.handleAddLikeButton();
    }

    this._setEventListeners();

    return this._cardElement;
  }
}
