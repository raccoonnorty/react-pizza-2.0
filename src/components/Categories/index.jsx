import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const onChangeCategory = (index) => {
    dispatch(setCategoryId(index));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((valueName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={categoryId === index ? 'active' : ''}>
            {valueName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
