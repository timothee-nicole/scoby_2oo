import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getItems() {
    return service
      .get("/api/items")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneItem(id) {
    return service
      .get("/api/items/" + id)
      .then((apiRes) => apiRes.data)
      .catch(errorHandler)
  },

  createOne(endPoint, data) {
    return service
      .post(endPoint, data)
      .then((apiRes) => apiRes.data)
      .catch(errorHandler)
  },

  updateOne(endPoint, data) {
    return service
      .patch(endPoint, data)
      .then((apiRes) => apiRes.data)
      .catch(errorHandler)
  },

  deleteOne(endPoint) {
    return service
      .delete(endPoint)
      .then((apiRes) => apiRes.data)
      .catch(errorHandler)
  }

};
