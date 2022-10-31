import React from 'react';

import { PizzaBlock, Skeleton, Categories, Sort, Pagination } from '../components';

import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { selectPizzaData } from '../redux/pizza/selectors';
import { selectSort } from '../redux/filter/selectors';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { fetchPizzas } from '../redux/pizza/asynkActions';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectPizzaData);

  const { categoryId, sortType, currentPage, searchValue } = useSelector(selectSort);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sortType.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort value={sortType} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>Произошла ошибка 😕</h2>
            <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? skeleton : pizzas}</div>
        )}
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
