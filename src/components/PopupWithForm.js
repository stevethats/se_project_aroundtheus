import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._formInputs = Array.from(
      this._popupForm.querySelectorAll(".modal__input")
    );
    this._submitButton = this._popupForm.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const data = {};
    this._formInputs.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
    //collects data from all the input fields and returns it as an object, then pass to submission handler
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
    //add submit event listener to form, then super();
  }
}
