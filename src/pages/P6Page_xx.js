import { useEffect, useState } from 'react';
import Product_xx from '../components/Product_xx';
import midterm_data_xx from '../midterm_data_xx';

const P6Page_xx = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(midterm_data_xx);

  console.log('products', products);

  return (
    <>
      <h2>P6Page_xx</h2>
    </>
  );
};
export default P6Page_xx;
