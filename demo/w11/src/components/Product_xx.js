const Product_xx = ({id, title, copy, btn}) => {
  return (
    <>
        <div key={id} class="card">
              <div class="content">
                <h2 class="title">{title}</h2>
                <p class="copy">{copy}</p>
                <button class="btn">{btn}</button>
              </div>
            </div>
    </>
  );
};
export default Product_xx;
