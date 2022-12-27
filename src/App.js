import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://appoitments-server.onrender.com/products/all'
      );
      setData(result.data.products);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul className="products-list">
          {data.map(product => (
            <li key={product._id}>{product.name} ({product.price})</li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;