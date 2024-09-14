export default class UserInfo {
  constructor({ name, job }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }

  getUserInfo() {
    return { name: this._name.textContent, job: this._job.textContent };
    //returns an object containing info about the user
  }

  setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;
    //takes new user data and adds it to the page, use after successful submission of profile form
  }
}
