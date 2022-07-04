import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <div>
        <span>😕</span>
        <br />
        <h1>Ничего не найдено</h1>
      </div>
      <p>Такой сраницы у нашего интернет-магазина не существует</p>
    </div>
  );
};

export default NotFoundBlock;
