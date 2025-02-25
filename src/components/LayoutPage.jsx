import React from "react";
import ContentSection from "./ContentSection";
import CardKnowledge from "./KnowledgeSection/CardKnowledge";

export default function LayoutPage({ data, header, pagination, onPageChange }) {
  // Tính tổng số trang dựa trên tổng số bài viết và số bài viết trên mỗi trang
  const totalPages = pagination.total
    ? Math.ceil(pagination.total / pagination.limit)
    : 0;

  return (
    <div>
      <div className="md:w-3/4 w-full mx-auto md:px-4 px-2 py-10 z-50 text-black">
        <ContentSection header={header} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 gap-5 bg-white">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <CardKnowledge key={index} {...item} />
            ))}
        </div>
        {/* Phần phân trang */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => onPageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(pageNum)}
                  className={`px-3 py-1 border rounded ${
                    pagination.page === pageNum ? "font-bold" : ""
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => onPageChange(pagination.page + 1)}
              disabled={pagination.page === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
