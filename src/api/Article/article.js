// src/api/article/articleService.js
import instance from '../api';

export const getAllArticles = () => {
  return instance.get('/article');
};

export const getArticleById = (id) => {
  return instance.get(`/article/${id}`);
};

export const createArticle = (data) => {
  return instance.post('/article', data);
};

export const updateArticle = (id, data) => {
  return instance.put(`/article/${id}`, data);
};

export const deleteArticle = (id) => {
  return instance.delete(`/article/${id}`);
};

export const getArticles = (search = '') => {
  if (search) {
    // Nếu có search, gọi API với query
    return instance.get(`/article/?search=${search}`);
  } else {
    // Nếu search rỗng, sử dụng hàm getAllArticles đã định nghĩa
    return getAllArticles();
  }
};
