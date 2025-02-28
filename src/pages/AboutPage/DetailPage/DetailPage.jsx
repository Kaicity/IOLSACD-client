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
  const [targetId, setTargetId] = useState(0);
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
        console.log("articleData", articleData.id);
        setTargetId(articleData.id);
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
        const { articles: fetchedArticles, pagination } = res.data.data;
  
        // Nếu targetId đã có (được set từ useEffect trước)
        if (targetId) {
          // Tìm vị trí của phần tử có targetId trong mảng gốc
          const originalIndex = fetchedArticles.findIndex(
            (article) => article.id === targetId
          );
  
          // Loại bỏ phần tử có targetId
          const filteredArticles = fetchedArticles.filter(
            (article) => article.id !== targetId
          );
  
          const countNeeded = 4;
          let newArticles = [];
  
          // Tính toán vị trí bắt đầu: nếu originalIndex vượt quá độ dài mảng filteredArticles thì đặt về 0
          const startIndex =
            originalIndex < filteredArticles.length ? originalIndex : 0;
  
          // Lấy các phần tử từ startIndex
          newArticles = filteredArticles.slice(startIndex, startIndex + countNeeded);
  
          // Nếu không đủ 4 phần tử, bổ sung thêm từ đầu mảng (wrap around)
          if (newArticles.length < countNeeded) {
            const remaining = countNeeded - newArticles.length;
            newArticles = newArticles.concat(filteredArticles.slice(0, remaining));
          }
  
          console.log("newArticles", newArticles);
          setArticles(newArticles);
        } else {
          // Nếu targetId chưa có, bạn có thể đặt mặc định là 4 phần tử đầu tiên
          setArticles(fetchedArticles.slice(0, 4));
        }
        setPagination(pagination);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery, currentPage, targetId]);
  

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
