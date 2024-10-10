import { configApi } from "../utils/constants";

export class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _request(endpoint, options = {}) {
    const finalOptions = {
      headers: this.headers,
      ...options,
    };
    const url = `${this.baseUrl}${endpoint}`;
    return fetch(url, finalOptions).then(this._checkResponse);
  }

  getInitialCards() {
    return this._request(`/cards`).then((res) => {
      return res;
    });
  }

  createApiCard(data) {
    return this._request(`/cards`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(id) {
    return this._request(`/cards/${id}`, {
      method: "DELETE",
    });
  }

  likeCard(id) {
    return this._request(`/cards/${id}/likes`, {
      method: "PUT",
    });
  }

  dislikeCard(id) {
    return this._request(`/cards/${id}/likes`, {
      method: "DELETE",
    });
  }

  getUserInfo() {
    return this._request(`/users/me`).then((res) => {
      return res;
    });
  }

  updateProfileInfo({ name, about }) {
    return this._request(`/users/me`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  updateAvatar(data) {
    return this._request(`/users/me/avatar`, {
      method: "PATCH",
      body: JSON.stringify({ avatar: data }),
    });
  }
}

export const api = new Api(configApi);
