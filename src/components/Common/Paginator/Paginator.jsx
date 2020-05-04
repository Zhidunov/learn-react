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
      <div className={styles.container}>
      <div className={styles.box}>
      { PortionNumber > 1 && (
        <span className={styles.prev}
          onClick={() => {
            setPortionNumber(PortionNumber - 1);
          }}
        >
          Prev
        </span>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p ? styles.selectedPage : styles.pageNumber}
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
        <span className={styles.next}
          onClick={() => {
            setPortionNumber(PortionNumber + 1);
          }}
        >
          Next
        </span>
      )}
      </div>
      </div>
    </div>
  );
}

export default Paginator;
