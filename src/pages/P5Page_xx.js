import { useEffect, useState } from 'react';
import Product_xx from '../components/Product_xx';
import midterm_data_xx from '../midterm_data_xx';

const P5Page_xx = () => {
  const [products, setProducts] = useState(midterm_data_xx);
  console.log('products', products);

  return (
    <>
      <h2>P5Page_xx</h2>
    </>
  );
};
export default P5Page_xx;
