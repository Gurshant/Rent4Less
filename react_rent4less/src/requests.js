// Requests

const BASE_URL = `http://localhost:3000/api/v1`;
// const BASE_URL = `http://rent4less-rails-api.herokuapp.com/api/v1`;

// Create a module of listing related fetch request methods
const Listing = {
  // fetch all listings from server
  all() {
    return fetch(`${BASE_URL}/listings`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // fetch a single listing
  one(id) {
    return fetch(`${BASE_URL}/listings/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // creating a listing 
  create(params) {
    return fetch(`${BASE_URL}/listings`, {
      method: "POST",
      credentials: "include",
      body: params
    }).then(res => res.json());
  },
  // updating a listing
  update(id, params) {
    return fetch(`${BASE_URL}/listings/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/listings/${id}`, {
      method: "DELETE",
      credentials: "include",
    }).then(res => res.json());
  }
};

// This is a helper module with methods associated with creating
// (and maybe later, destroying) a user session
const Session = {
  create(params) {
    // `params` is an object that represents a user
    // { email: 'some@email.com', password: 'some-password' }
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};
const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: 'GET',
      credentials: 'include'
    }).then(res => res.json())
  },
  create(params) {
    // params is goin g to look like
    // {email:<some-email>, password:<some-password>,first_name:...}
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json());
  }
}

export { Listing, Session, User }