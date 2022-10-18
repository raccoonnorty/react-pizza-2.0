import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza = () => {
  const [pizzaId, setPizzaId] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizzaId() {
      try {
        const { data } = await axios.get('https://62b0ce6fe460b79df04d7aba.mockapi.io/items/' + id);
        setPizzaId(data);
      } catch (error) {
        alert('Ошибка приполучении id пиццы');
        console.log(error);
        navigate('/');
      }
    }

    fetchPizzaId();
  }, []);

  if (!pizzaId) {
    return 'Loading...';
  }

  return (
    <div className="container">
      <img src={pizzaId.imageUrl} />
      <h2>{pizzaId.title}</h2>
      <h4>{pizzaId.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
