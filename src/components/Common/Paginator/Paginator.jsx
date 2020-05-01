import React, { useState } from "react";
import styles from "./Paginator.module.css";

function Paginator({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize,
}) {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [PortionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = PortionNumber * portionSize - (portionSize - 1);
  let rightPortionPageNumber = PortionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {PortionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(PortionNumber - 1);
          }}
        >
          ...
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p ? styles.selectedPage : ""}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {PortionNumber < portionCount && (
        <button
          onClick={() => {
            setPortionNumber(PortionNumber + 1);
          }}
        >
          ...
        </button>
      )}
    </div>
  );
}

export default Paginator;
