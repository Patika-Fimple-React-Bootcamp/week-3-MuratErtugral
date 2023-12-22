import React from "react";

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <>
      <h2 className="products-title">Product List</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <div className="product-desc">
              <h4>{product.title}</h4>
              <div>
                <div className="price-container">
                  <p className="discounted-price">{`$${parseFloat(
                    product.price * 1.1
                  ).toFixed(2)}`}</p>
                  <p className="original-price">{`$${parseFloat(
                    product.price
                  ).toFixed(2)}`}</p>
                </div>

                <button
                  className="button primary-button"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>

                <button
                  className="button secondary-button"
                  onClick={() => onEdit(product)}
                >
                  Edit
                </button>
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
