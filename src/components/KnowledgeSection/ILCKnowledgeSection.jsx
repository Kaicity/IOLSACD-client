import React, { useEffect, useState } from "react";
import CardKnowledge from "./CardKnowledge";
import ItemKnowledge from "./ItemKnowledge";
import SearchKnowledge from "./SearchKnowledge";
import { getArticles } from "../../api/Article/article";

const ILCKnowledgeSection = () => {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [topArticle, setTopArticle] = useState(null);

  // Tạm thời searchQuery = "" (mặc định)
  const searchQuery = "";
  const type = "Lập trình";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await getArticles(searchQuery, currentPage, 6, type);
        const { articles, pagination } = response.data.data;
        // Lấy bài viết đầu tiên làm topArticle và 4 bài tiếp theo
        setTopArticle(articles[0]);
        setArticles(articles.slice(1, 5));
        setPagination(pagination);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [searchQuery, currentPage]);

  return (
    <div className="max-w-7xl md:mx-auto px-2 md:w-3/4 w-full py-10">
      <div className="grid lg:grid-cols-[35%_40%_25%] grid-rows-1 gap-3">
        <div>
          {topArticle && <CardKnowledge {...topArticle} />}
        </div>
        {/* Grid cho ItemKnowledge: 1 cột trên mobile, 2 cột trên md và các breakpoint lớn hơn */}
        <div className="grid lg:grid-cols-1 grid-cols-2 gap-4">
          {articles.map((article) => (
            <div key={article.id}>
              <ItemKnowledge {...article} />
            </div>
          ))}
        </div>
        <div className="lg:block hidden">
          <SearchKnowledge />
        </div>
      </div>
    </div>
  );
};

export default ILCKnowledgeSection;
