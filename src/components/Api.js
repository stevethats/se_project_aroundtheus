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

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getInitialCards() {
    return this._request(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then((res) => {
      return res;
    });
  }

  createApiCard(data) {
    return this._request(`${this.baseUrl}/cards`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(id) {
    return this._request(`${this.baseUrl}/cards/${id}`, {
      headers: this.headers,
      method: "DELETE",
    });
  }

  likeCard(id) {
    return this._request(`${this.baseUrl}/cards/${id}/likes`, {
      headers: this.headers,
      method: "PUT",
    });
  }

  dislikeCard(id) {
    return this._request(`${this.baseUrl}/cards/${id}/likes`, {
      headers: this.headers,
      method: "DELETE",
    });
  }

  getUserInfo() {
    return this._request(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then((res) => {
      return res;
    });
  }

  updateProfileInfo({ name, about }) {
    return this._request(`${this.baseUrl}/users/me`, {
      headers: this.headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  updateAvatar(data) {
    return this._request(`${this.baseUrl}/users/me/avatar`, {
      headers: this.headers,
      method: "PATCH",
      body: JSON.stringify({ avatar: data }),
    });
  }
}

export const api = new Api(configApi);

api.getUserInfo();
