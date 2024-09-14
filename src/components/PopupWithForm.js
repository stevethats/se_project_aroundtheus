import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const data = {};
    this._formInputs = Array.from(
      this._popupForm.querySelectorAll(".modal__input")
    );
    this._formInputs.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
    //collects data from all the input fields and returns it as an object, then pass to submission handler
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
    //add submit event listener to form, then super();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
