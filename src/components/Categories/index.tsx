import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void; // i - может нахываться как угодно
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((valueName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}>
            {valueName}
          </li>
        ))}
      </ul>
    </div>
  );
});
