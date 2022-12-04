import { useEffect, useState } from 'react';
import Alert_xx from '../components/Alert_xx';
import Product_xx from '../components/Product_xx';
import midterm_data_xx from '../midterm_data_xx';

const P6Page_xx = () => {
  const [products, setProducts] = useState(midterm_data_xx);
  console.log('products', products);

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({show, msg, type});
  }

  const filterItems = (category) => {
    if(category === 'all') {
      setProducts(midterm_data_xx);
    }else {
      const newProducts = midterm_data_xx.filter( (product) => product.category === category);
      setProducts(newProducts);
    }
  } 

  const clearAllProducts = () => {
    showAlert(true, 'all products deleted', 'danger');
    setProducts([]);
  };

  const fetchAllProducts = () => {
    //showAlert(true, 'item remove', 'dangr');
    setProducts(midterm_data_xx);
  };

  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
              />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button className="company-btn" onClick={ () => filterItems('all')}>all</button>
            </article>
          </div>
          <button className='clear-btn' onClick={clearAllProducts}> Clear All</button>
          <button className='fetch-btn' onClick={fetchAllProducts}> Fetch All</button>
        </div>
        { alert.show && <Alert_xx {...alert} removeAlert = {showAlert} /> } 
        <div className="products-right">
          <div className="products-container">
            {products.map((product) => {
               const { id, title, copy, btn } = product;
               return (
                 <Product_xx key={id} title={title} copy={copy} btn={btn} />
               );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default P6Page_xx;
