import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GasPricesComponent = () => {
  const [gasPrices, setGasPrices] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://43.157.58.142:3000/api/getgasprice');
        setGasPrices(response.data);
      } catch (error) {
        console.error('Error fetching gas prices:', error);
      }
    };

    fetchData();
  }, []);

  const renderGasPrices = () => {
    if (gasPrices.length === 0) {
      return <div>No data available</div>;
    }

    // Finding the lowest price
    const lowestPrice = Math.min(...gasPrices.map(({ price }) => parseFloat(price)));

    return (
      <div style={{ display: 'flex' }}>
        {gasPrices.map(({ id, price }) => (
          <div key={id} style={{ margin: '0 10px', textAlign: 'center' }}>
            <div style={parseFloat(price) === lowestPrice ? styles.lowestPrice : {}}>
              <img
                src={`/${id}.png`}
                alt={`Gas icon ${id}`}
                style={{ width: '30px', height: '30px' }}
              />
              <p style={{ fontSize: '0.5em' }}>{parseFloat(price).toFixed(6)} $</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderGasPrices()}
    </div>
  );
};

const styles = {
  lowestPrice: {
    border: '2px solid green',
    padding: '5px',
  },
};

export default GasPricesComponent;
