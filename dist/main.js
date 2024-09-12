!function(){"use strict";class t{constructor(t,e,n){this._data=t,this._cardSelector=e,this._handleImageClick=n}_setEventListeners(){this._likeButton.addEventListener("click",(()=>{this._handleLikeButton()})),this._deleteButton.addEventListener("click",(()=>{this._handleDeletePost()})),this._cardImage.addEventListener("click",(()=>{this._handleImageClick(this._data)}))}_handleLikeButton(){this._likeButton.classList.toggle("post__like_active")}_handleDeletePost(){this._cardElement.remove(),this._cardElement=null}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".post").cloneNode(!0)}getView(){return this._cardElement=this._getTemplate(),this._likeButton=this._cardElement.querySelector(".post__like"),this._deleteButton=this._cardElement.querySelector(".post__delete"),this._cardImage=this._cardElement.querySelector(".post__image"),this._cardName=this._cardElement.querySelector(".post__title"),this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name,this._cardName.textContent=this._data.name,this._setEventListeners(),this._cardElement}}class e{constructor(t,e){this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=e}_showInputError(t,e){const n=this._form.querySelector(`.${t.id}-error`);t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}_hideInputError(t){const e=this._form.querySelector(`.${t.id}-error`);t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}_toggleButtonState(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}_hasInvalidInput(){return this._inputList.some((t=>!t.validity.valid))}_checkInputValidity(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}resetValidation(){this._toggleButtonState(),this._inputList.forEach((t=>{this._hideInputError(t)}))}_setEventListeners(){this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._inputList.forEach((t=>{t.addEventListener("input",(()=>{this._checkInputValidity(t),this._toggleButtonState()}))})),this.resetValidation()}enableValidation(){this._form.addEventListener("submit",(t=>{t.preventDefault()})),this._setEventListeners()}}const n=document.querySelector(".profile__edit-button"),o=document.querySelector("#profile-modal"),r=document.forms["modal__profile-form"],s=document.querySelector(".profile__name"),i=document.querySelector(".profile__description"),a=o.querySelector("[name='modal__name']"),l=o.querySelector("[name='modal__description']"),c=document.querySelector(".profile__add-button"),u=document.querySelector("#post-modal"),d=document.forms["modal__post-form"],_=u.querySelector("[name='modal__title']"),m=u.querySelector("[name='modal__url']"),h=document.querySelector("#expand-modal"),p=h.querySelector(".modal__image"),v=h.querySelector(".modal__text"),E=document.querySelector(".posts"),f=document.querySelectorAll(".modal__close"),S=document.querySelectorAll(".modal");function g(t){t.classList.remove("modal_opened"),document.removeEventListener("keyup",C)}function y(t){t.classList.add("modal_opened"),document.addEventListener("keyup",C)}const L={};var k;k={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__input-error_enabled"},Array.from(document.querySelectorAll(k.formSelector)).forEach((t=>{const n=new e(k,t),o=t.getAttribute("id");L[o]=n,n.enableValidation()}));const q=t=>{p.src=t.link,p.alt=t.name,v.textContent=t.name,y(h)};function b(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend";const o=new t(e,"#post",q);E[n](o.getView())}function C(t){t.preventDefault(),function(t,e){"Escape"===t.key&&e(document.querySelector(".modal_opened"))}(t,g)}f.forEach((t=>{const e=t.closest(".modal");t.addEventListener("click",(()=>g(e)))})),S.forEach((t=>{t.addEventListener("click",(t=>{t.target===t.currentTarget&&g(t.currentTarget)}))})),n.addEventListener("click",(function(){y(o),a.value=s.textContent,l.value=i.textContent})),r.addEventListener("submit",(function(t){t.preventDefault(),s.textContent=a.value,i.textContent=l.value,g(o)})),c.addEventListener("click",(()=>y(u))),d.addEventListener("submit",(function(t){t.preventDefault(),b({name:_.value,link:m.value}),g(u),d.reset(),L[d.getAttribute("id")].resetValidation()})),[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}].forEach((t=>b(t,"append")))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUltYWdlQ2xpY2spIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VCdXR0b24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVQb3N0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayh0aGlzLl9kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUxpa2VCdXR0b24oKSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJwb3N0X19saWtlX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVEZWxldGVQb3N0KCkge1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBvc3RcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldFZpZXcoKSB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcblxyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdF9fbGlrZVwiKTtcclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdF9fZGVsZXRlXCIpO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3N0X19pbWFnZVwiKTtcclxuICAgIHRoaXMuX2NhcmROYW1lID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3N0X190aXRsZVwiKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc3JjID0gdGhpcy5fZGF0YS5saW5rO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX2RhdGEubmFtZTtcclxuICAgIHRoaXMuX2NhcmROYW1lLnRleHRDb250ZW50ID0gdGhpcy5fZGF0YS5uYW1lO1xyXG5cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XHJcblxyXG4gICAgdGhpcy5fZm9ybSA9IGZvcm1FbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQodGhpcy5faW5wdXRMaXN0KSkge1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcblxyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vL0NhbGxzIGZvciBlZGl0aW5nIHByb2ZpbGVcclxuY29uc3QgZWRpdFByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcclxuY29uc3QgZWRpdFByb2ZpbGVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtbW9kYWxcIik7XHJcbmNvbnN0IGVkaXRQcm9maWxlRm9ybSA9IGRvY3VtZW50LmZvcm1zW1wibW9kYWxfX3Byb2ZpbGUtZm9ybVwiXTtcclxuY29uc3QgcHJvZmlsZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xyXG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xyXG5jb25zdCBlZGl0UHJvZmlsZVRpdGxlID0gZWRpdFByb2ZpbGVCb3gucXVlcnlTZWxlY3RvcihcIltuYW1lPSdtb2RhbF9fbmFtZSddXCIpO1xyXG5jb25zdCBlZGl0UHJvZmlsZURlc2NyaXB0aW9uID0gZWRpdFByb2ZpbGVCb3gucXVlcnlTZWxlY3RvcihcclxuICBcIltuYW1lPSdtb2RhbF9fZGVzY3JpcHRpb24nXVwiXHJcbik7XHJcblxyXG4vL0NhbGxzIGZvciBhZGRpbmcgYSBwb3N0XHJcbmNvbnN0IGFkZFBvc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcbmNvbnN0IGFkZFBvc3RCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3QtbW9kYWxcIik7XHJcbmNvbnN0IGFkZFBvc3RGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJtb2RhbF9fcG9zdC1mb3JtXCJdO1xyXG5jb25zdCBhZGRQb3N0VGl0bGUgPSBhZGRQb3N0Qm94LnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0nbW9kYWxfX3RpdGxlJ11cIik7XHJcbmNvbnN0IGFkZFBvc3RVcmwgPSBhZGRQb3N0Qm94LnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0nbW9kYWxfX3VybCddXCIpO1xyXG5cclxuLy9DYWxscyBmb3IgaW1hZ2UgZXhwYW5kIG1vZGFsXHJcbmNvbnN0IGV4cGFuZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtbW9kYWxcIik7XHJcbmNvbnN0IGV4cGFuZE1vZGFsSW1hZ2UgPSBleHBhbmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZVwiKTtcclxuY29uc3QgZXhwYW5kTW9kYWxUZXh0ID0gZXhwYW5kTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fdGV4dFwiKTtcclxuXHJcbmNvbnN0IHBvc3RzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdHNcIik7XHJcbmNvbnN0IGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2Nsb3NlXCIpO1xyXG5jb25zdCBtb2RhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpO1xyXG5cclxuY29uc3QgY2FyZFNlbGVjdG9yID0gXCIjcG9zdFwiO1xyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUVzY1VwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlRXNjVXApO1xyXG59XHJcblxyXG4vL1ZhbGlkYXRpb25cclxuY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX2J1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbl9kaXNhYmxlZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0LWVycm9yX2VuYWJsZWRcIixcclxufTtcclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JzID0ge307XHJcblxyXG5jb25zdCBlbmFibGVWYWxpZGF0aW9uID0gKGNvbmZpZykgPT4ge1xyXG4gIGNvbnN0IGZvcm1MaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5mb3JtU2VsZWN0b3IpKTtcclxuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudCk7XHJcbiAgICBjb25zdCBmb3JtSWQgPSBmb3JtRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuXHJcbiAgICBmb3JtVmFsaWRhdG9yc1tmb3JtSWRdID0gdmFsaWRhdG9yO1xyXG4gICAgdmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuICB9KTtcclxufTtcclxuXHJcbmVuYWJsZVZhbGlkYXRpb24odmFsaWRhdGlvblNldHRpbmdzKTtcclxuXHJcbi8vSGFuZGxlIGZ1bmN0aW9uc1xyXG5jb25zdCBoYW5kbGVJbWFnZUNsaWNrID0gKGRhdGEpID0+IHtcclxuICBleHBhbmRNb2RhbEltYWdlLnNyYyA9IGRhdGEubGluaztcclxuICBleHBhbmRNb2RhbEltYWdlLmFsdCA9IGRhdGEubmFtZTtcclxuICBleHBhbmRNb2RhbFRleHQudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgb3Blbk1vZGFsKGV4cGFuZE1vZGFsKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0KGV2dCkge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHByb2ZpbGVUaXRsZS50ZXh0Q29udGVudCA9IGVkaXRQcm9maWxlVGl0bGUudmFsdWU7XHJcbiAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZWRpdFByb2ZpbGVEZXNjcmlwdGlvbi52YWx1ZTtcclxuICBjbG9zZU1vZGFsKGVkaXRQcm9maWxlQm94KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUG9zdEZvcm1TdWJtaXQoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbmV3UG9zdCA9IHtcclxuICAgIG5hbWU6IGFkZFBvc3RUaXRsZS52YWx1ZSxcclxuICAgIGxpbms6IGFkZFBvc3RVcmwudmFsdWUsXHJcbiAgfTtcclxuICByZW5kZXJDYXJkKG5ld1Bvc3QpO1xyXG4gIGNsb3NlTW9kYWwoYWRkUG9zdEJveCk7XHJcbiAgYWRkUG9zdEZvcm0ucmVzZXQoKTtcclxuICBmb3JtVmFsaWRhdG9yc1thZGRQb3N0Rm9ybS5nZXRBdHRyaWJ1dGUoXCJpZFwiKV0ucmVzZXRWYWxpZGF0aW9uKCk7XHJcbn1cclxuXHJcbi8vUmVuZGVyIGNhcmQvcG9zdFxyXG5mdW5jdGlvbiByZW5kZXJDYXJkKGNhcmQsIG1ldGhvZCA9IFwicHJlcGVuZFwiKSB7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXcgQ2FyZChjYXJkLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUltYWdlQ2xpY2spO1xyXG4gIHBvc3RzU2VjdGlvblttZXRob2RdKGNhcmRFbGVtZW50LmdldFZpZXcoKSk7XHJcbn1cclxuXHJcbi8vQ2xvc2UgZm9ybSBldmVudCBsaXN0ZW5lcnNcclxuY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGNvbnN0IHBvcHVwID0gYnV0dG9uLmNsb3Nlc3QoXCIubW9kYWxcIik7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZU1vZGFsKHBvcHVwKSk7XHJcbn0pO1xyXG5cclxubW9kYWxMaXN0LmZvckVhY2goKG1vZGFsKSA9PiB7XHJcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgIGlmIChldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCkge1xyXG4gICAgICBjbG9zZU1vZGFsKGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpc0VzY0V2ZW50KGV2dCwgYWN0aW9uKSB7XHJcbiAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgIGNvbnN0IGFjdGl2ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIik7XHJcbiAgICBhY3Rpb24oYWN0aXZlUG9wdXApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXNjVXAoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaXNFc2NFdmVudChldnQsIGNsb3NlTW9kYWwpO1xyXG59XHJcblxyXG4vL0VkaXQgUHJvZmlsZSBldmVudCBsaXN0ZW5lcnNcclxuZWRpdFByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgb3Blbk1vZGFsKGVkaXRQcm9maWxlQm94KTtcclxuICBlZGl0UHJvZmlsZVRpdGxlLnZhbHVlID0gcHJvZmlsZVRpdGxlLnRleHRDb250ZW50O1xyXG4gIGVkaXRQcm9maWxlRGVzY3JpcHRpb24udmFsdWUgPSBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XHJcbn0pO1xyXG5lZGl0UHJvZmlsZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdCk7XHJcblxyXG4vL0FkZCBQb3N0IGV2ZW50IGxpc3RlbmVyc1xyXG5hZGRQb3N0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBvcGVuTW9kYWwoYWRkUG9zdEJveCkpO1xyXG5hZGRQb3N0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVBvc3RGb3JtU3VibWl0KTtcclxuXHJcbmluaXRpYWxDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiByZW5kZXJDYXJkKGNhcmQsIFwiYXBwZW5kXCIpKTtcclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVJbWFnZUNsaWNrIiwidGhpcyIsIl9kYXRhIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2xpa2VCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2VCdXR0b24iLCJfZGVsZXRlQnV0dG9uIiwiX2hhbmRsZURlbGV0ZVBvc3QiLCJfY2FyZEltYWdlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2NhcmRFbGVtZW50IiwicmVtb3ZlIiwiX2dldFRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsImdldFZpZXciLCJfY2FyZE5hbWUiLCJzcmMiLCJsaW5rIiwiYWx0IiwibmFtZSIsInRleHRDb250ZW50IiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybSIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwiYWRkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX2hhc0ludmFsaWRJbnB1dCIsIl9pbnB1dExpc3QiLCJfYnV0dG9uRWxlbWVudCIsImRpc2FibGVkIiwic29tZSIsInZhbGlkaXR5IiwidmFsaWQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJyZXNldFZhbGlkYXRpb24iLCJmb3JFYWNoIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImVuYWJsZVZhbGlkYXRpb24iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImVkaXRQcm9maWxlRWRpdEJ1dHRvbiIsImVkaXRQcm9maWxlQm94IiwiZWRpdFByb2ZpbGVGb3JtIiwiZm9ybXMiLCJwcm9maWxlVGl0bGUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJlZGl0UHJvZmlsZVRpdGxlIiwiZWRpdFByb2ZpbGVEZXNjcmlwdGlvbiIsImFkZFBvc3RCdXR0b24iLCJhZGRQb3N0Qm94IiwiYWRkUG9zdEZvcm0iLCJhZGRQb3N0VGl0bGUiLCJhZGRQb3N0VXJsIiwiZXhwYW5kTW9kYWwiLCJleHBhbmRNb2RhbEltYWdlIiwiZXhwYW5kTW9kYWxUZXh0IiwicG9zdHNTZWN0aW9uIiwiY2xvc2VCdXR0b25zIiwibW9kYWxMaXN0IiwiY2xvc2VNb2RhbCIsIm1vZGFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUVzY1VwIiwib3Blbk1vZGFsIiwiZm9ybVZhbGlkYXRvcnMiLCJjb25maWciLCJmb3JtU2VsZWN0b3IiLCJ2YWxpZGF0b3IiLCJmb3JtSWQiLCJnZXRBdHRyaWJ1dGUiLCJyZW5kZXJDYXJkIiwiY2FyZCIsIm1ldGhvZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNhcmRFbGVtZW50IiwiYWN0aW9uIiwia2V5IiwiaXNFc2NFdmVudCIsImJ1dHRvbiIsInBvcHVwIiwiY2xvc2VzdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==