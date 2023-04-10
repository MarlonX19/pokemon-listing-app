import React from "react";
import "./styles.css";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, page, setPage }: any) => {
  const current = page / 20;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

  function onPageChange(page: number) {
    setPage(String(Number(page) * 20));
  }

  return (
    <ul className="pagination">
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={
                page == current ? "pagination__item--active" : undefined
              }
            >
              {page}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
