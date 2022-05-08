import classNames from 'classnames';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountPages, goToPage } from '../../../redux/paginationSlice';

function BlogPagination({ count }) {
  const { countPages, currentPage } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCountPages({ count: count }));
  }, [dispatch, count]);

  useEffect(() => {
    dispatch(goToPage({ page: 1 }));
  }, [dispatch, location]);

  return (
    <div className="pagination">
      <img
        className={classNames('pagination__arrow-left', {
          'pagination__arrow--disabled': currentPage === 1,
        })}
        src="img/tools-icons/arrow-left.svg"
        alt="arrow"
        onClick={() => dispatch(goToPage({ page: currentPage - 1 }))}
      />
      <ul className="pagination__list">
        <li
          className={classNames('pagination__list-item', {
            'pagination__list-item--active': currentPage === 1,
          })}
          onClick={() => dispatch(goToPage({ page: 1 }))}>
          1
        </li>

        {currentPage > 3 && '...'}

        {currentPage > 2 && (
          <li
            className="pagination__list-item"
            onClick={() => dispatch(goToPage({ page: currentPage - 1 }))}>
            {currentPage - 1}
          </li>
        )}

        {currentPage !== 1 && currentPage !== countPages && (
          <li
            className="pagination__list-item pagination__list-item--active"
            onClick={() => dispatch(goToPage({ page: currentPage }))}>
            {currentPage}
          </li>
        )}

        {currentPage < countPages - 1 && (
          <li
            className="pagination__list-item"
            onClick={() => dispatch(goToPage({ page: currentPage + 1 }))}>
            {currentPage + 1}
          </li>
        )}

        {currentPage + 1 < countPages - 1 && '...'}
        {countPages > 1 && (
          <li
            className={classNames('pagination__list-item', {
              'pagination__list-item--active': currentPage === countPages,
            })}
            onClick={() => dispatch(goToPage({ page: countPages }))}>
            {countPages}
          </li>
        )}
      </ul>
      <img
        className={classNames('pagination__arrow-right', {
          'pagination__arrow--disabled': currentPage === countPages,
        })}
        src="img/tools-icons/arrow-right.svg"
        alt="arrow"
        onClick={() => dispatch(goToPage({ page: currentPage + 1 }))}
      />
    </div>
  );
}

export default BlogPagination;
