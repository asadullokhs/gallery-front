import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });

export const getPhotos = () => {
  return API.get(`/gallery`);
};

export const deletePhoto = (id) => {
  return API.delete(`/gallery/${id}`);
};
