import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }

  setSubmitFunction(newSubmitFunction) {
    this._submitFunction = newSubmitFunction;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunction(this);
    });
    super.setEventListeners();
  }
}
