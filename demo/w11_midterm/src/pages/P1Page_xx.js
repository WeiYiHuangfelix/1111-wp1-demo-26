const P1Page_xx = () => {
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
              <button className="company-btn">ikea</button>
              <button className="company-btn">marcos</button>
              <button className="company-btn">caressa</button>
            </article>
          </div>
      </div>
      <div className="products-right">
        <div className="products-container">
            <div className="single-product">
              <img src="./images/product-2.jpg" className="single-product-img img" alt="albany table" />
              <footer>
                <h5 className="name">albany table</h5>
                <span className="price">$79.99</span>
              </footer>
            </div>
            <div className="single-product">
              <img src="./images/product-6.jpg" className="single-product-img img" alt="sofa set" />
              <footer>
                <h5 className="name">sofa set</h5>
                <span className="price">$69.99</span>
              </footer>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default P1Page_xx;
