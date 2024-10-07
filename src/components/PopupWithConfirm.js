import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }

  setSubmitFunction(newSubmitFunction) {
    this._submitFunction = newSubmitFunction;
    console.log("check");
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", this._submitFunction);
    super.setEventListeners();
  }
}
