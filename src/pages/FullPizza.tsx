import React from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PizzaBlockProps, PizzaBlock } from '../components';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<PizzaBlockProps>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://62b0ce6fe460b79df04d7aba.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка приполучении id пиццы');
        console.log(error);
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
      <PizzaBlock {...pizza} />
    </div>
  );
};

export default FullPizza;
