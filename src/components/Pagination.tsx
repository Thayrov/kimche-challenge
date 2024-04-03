import { useState, useEffect, useCallback } from 'react';
import {
  PaginationContainer,
  PaginationItem,
  PaginationLink,
  PaginationList,
} from '../styles/pagination/Pagination.styles.jsx';

const Pagination = ({
  totalItems,
  pageSize,
  currentPage,
  onChangePage,
}: {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}) => {
  const [pager, setPager] = useState<{
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: number[];
  }>({
    totalItems: 0,
    currentPage: 0,
    pageSize: 0,
    totalPages: 0,
    startPage: 0,
    endPage: 0,
    startIndex: 0,
    endIndex: 0,
    pages: [],
  });

  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);

    useEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
  };
  const range = (start: number, end: number) => {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  };

  const [width] = useWindowSize();

  const getPager = useCallback(
    (totalItems: number, currentPage: number, pageSize: number, width: number) => {
      const totalPages = Math.ceil(totalItems / pageSize);
      let maxPagesToShow;

      if (width < 576) {
        maxPagesToShow = 3;
      } else if (width >= 576 && width < 768) {
        maxPagesToShow = 5;
      } else {
        maxPagesToShow = 10;
      }

      let startPage, endPage;
      if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
      } else {
        const halfMaxPages = Math.floor(maxPagesToShow / 2);

        if (currentPage <= halfMaxPages) {
          startPage = 1;
          endPage = maxPagesToShow;
        } else if (currentPage + halfMaxPages >= totalPages) {
          startPage = totalPages - maxPagesToShow + 1;
          endPage = totalPages;
        } else {
          startPage = currentPage - halfMaxPages;
          endPage = currentPage + halfMaxPages;
        }
      }

      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize - 2, totalItems - 1);

      const pages = range(startPage, endPage);

      return {
        totalItems,
        currentPage,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages,
      };
    },
    []
  );

  useEffect(() => {
    setPager(getPager(totalItems, currentPage, pageSize, width));
  }, [getPager, totalItems, currentPage, pageSize, width]);

  const setPage = (page: number) => {
    if (page < 1 || page > pager.totalPages) {
      return;
    }
    onChangePage(page);
  };

  return (
    <PaginationContainer>
      {pager.pages && pager.pages.length && (
        <PaginationList>
          <PaginationItem className={pager.currentPage === 1 ? 'disabled' : ''}>
            <PaginationLink onClick={() => setPage(1)}>First</PaginationLink>
          </PaginationItem>
          <PaginationItem className={pager.currentPage === 1 ? 'disabled' : ''}>
            <PaginationLink onClick={() => setPage(pager.currentPage - 1)}>Previous</PaginationLink>
          </PaginationItem>
          {pager.pages.map((page) => (
            <PaginationItem key={page} className={pager.currentPage === page ? 'active' : ''}>
              <PaginationLink onClick={() => setPage(page)}>{page}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
            <PaginationLink onClick={() => setPage(pager.currentPage + 1)}>Next</PaginationLink>
          </PaginationItem>
          <PaginationItem className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
            <PaginationLink onClick={() => setPage(pager.totalPages)}>Last</PaginationLink>
          </PaginationItem>
        </PaginationList>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
