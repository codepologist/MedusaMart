/* eslint-disable react/prop-types */

const Product = ({ product }) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={product.image} alt={product.name} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{product.name}</p>
          <p className="title is-4">${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
