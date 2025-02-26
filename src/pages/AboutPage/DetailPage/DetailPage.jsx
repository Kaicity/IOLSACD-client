import React, {useEffect, useState} from "react";
import ItemKnowledge from "../../../components/KnowledgeSection/ItemKnowledge";
import {getArticleById, getArticles} from "../../../api/Article/article";
import {useParams} from "react-router-dom";
import "./Article.css";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

export default function DetailPage() {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // Khởi tạo article là object
  const [article, setArticle] = useState({});

  const searchQuery = "";
  const {slug} = useParams();

  useEffect(() => {
    if (!slug) return;
    const parts = slug.split("=");
    const id = parts.at(-1);

    setLoading(true);
    getArticleById(id)
      .then((res) => {
        const articleData = res.data.data;
        setArticle(articleData);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    setLoading(true);
    getArticles(searchQuery, currentPage, 6)
      .then((res) => {
        const {articles, pagination} = res.data.data;
        const newArticles = articles.slice(1);
        setArticles(newArticles);
        setPagination(pagination);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery, currentPage]);

  const sanitizedHTML = DOMPurify.sanitize(article.content);

  return (
    <div className="md:w-3/4 w-full mx-auto grid md:grid-cols-[2fr_1fr]  grid-cols-1 gap-2 relative">
      <div className="md:border-r md:border-gray-400 md:p-4 p-2 space-y-4">
        <h1 className="font-semibold text-xl py-2">{article.title}</h1>

        <div className="space-y-6">
          {article?.preview_img && (
            <img
              src={article.preview_img}
              alt={article.title}
              className="w-full aspect-[2/1] object-cover"
            />
          )}
          <div className="article-content">
            {article?.content && parse(sanitizedHTML)}
          </div>
        </div>
        {/* Phần chia sẻ */}
        <div className="mt-4 font-semibold text-xl">
          <h1 className="mb-4">Chia sẽ</h1>
          <div className="text-white w-24 text-base h-8 flex rounded-sm justify-center items-center my-2">
            <img
              src="https://bizweb.dktcdn.net/100/472/913/themes/888429/assets/addthis-zalo.svg?1725935235961"
              className="w-12 h-12 p-1"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
              className="w-12 h-12 p-1"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:block hidden py-2">
        <div className="sticky top-20 bottom-20 right-10 w-full">
          <h1 className="font-semibold text-xl py-2 text-red-600">
            Dịch vụ khác
          </h1>
          <div className="grid grid-rows-3 w-full gap-4">
            {articles.map((card, index) => (
              <div key={index}>
                <ItemKnowledge {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
