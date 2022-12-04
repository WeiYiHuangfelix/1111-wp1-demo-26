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
            </article>
          </div>
      </div>
      <div className="products-right">
        <div className="products-container">
        <main class="page-content">
        <div class="card">
          <div class="content">
            <h2 class="title">Mountain View</h2>
            <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
            <button class="btn">View Trips</button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Desert Destinations</h2>
            <p class="copy">It's the desert you've always dreamed of</p>
            <button class="btn">Book Now</button>
          </div>
        </div>
      </main>
        </div>
      </div>
    </section>
    </>
  );
};
export default P1Page_xx;
