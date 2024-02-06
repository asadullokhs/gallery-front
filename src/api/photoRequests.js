import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });

export const getPhotos = () => {
  return API.get(`/gallery`);
};

export const addPhoto = (formDate) => {
  return API.post("/gallery", formDate);
};

export const deletePhoto = (id) => {
  return API.delete(`/gallery/${id}`);
};

export const searchPhotos = (title) => {
  return API.get(`/gallery/search?title=${title}`);
};

export const updatePhoto = (id, formDate) => {
  return API.put(`/gallery/${id}`, formDate);
};
