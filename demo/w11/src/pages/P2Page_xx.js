import { useState } from 'react';
import midterm_data_xx from '../midterm_data_xx';

const P2Page_xx = () => {
  const [products, setProducts] = useState(midterm_data_xx);
  console.log('products', products);
  return (
    <>
          <section className="main-section">
      <div className="filter-left">
        <div className="left-content">
            <form className="input-form">
              <input type="text" className="search-input" placeholder="search..." />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button className="company-btn">all</button>
            </article>
          </div>
      </div>
      <div className="products-right">
        <div className="products-container">
          { products.map( (product) => {
            const {id,title, copy, btn} = product;
            return (
              <div key={id} class="card">
              <div class="content">
                <h2 class="title">{title}</h2>
                <p class="copy">{copy}</p>
                <button class="btn">{btn}</button>
              </div>
            </div>
                  )
          })}
        </div>
      </div>
    </section>
    </>
  );
};
export default P2Page_xx;
