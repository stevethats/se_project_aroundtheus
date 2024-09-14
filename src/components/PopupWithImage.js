import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupImage = this._popupElement.querySelector(".modal__image");
    this._popupText = this._popupElement.querySelector(".modal__text");
  }

  open({ name, link }) {
    this._popupText = name;
    this._popupImage.src = link;
    this._popupImage.alt = name;
    super.open();
  }
}
