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


// Giả sử API hỗ trợ query params: ?search=...&page=...&limit=...
export const getArticles = (search = "", page = 1, limit = 20) => {
  return instance.get(`/article/?search=${search}&page=${page}&limit=${limit}`);
};

