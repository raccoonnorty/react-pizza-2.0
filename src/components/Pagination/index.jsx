import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage }) => {
  const onChangePage = (event) => {
    dispatch(setCurrentPage(event.selected + 1));
  };

  const dispatch = useDispatch();
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={onChangePage}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
