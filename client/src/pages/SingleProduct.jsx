import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card mb-3 m-auto p-4" style={{ maxWidth: "850px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={singleProduct.image}
                  style={{ width: "250px", height: "250px" }}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{singleProduct.title}</h3>
                  <br />
                  <h6>Description</h6>
                  <p className="card-text">{singleProduct.description}</p>
                  <br />
                  <div className="d-flex">
                    <p>
                      <b>Price</b>
                    </p>
                    <span className="card-text ms-2">
                      ${singleProduct.price}
                    </span>
                  </div>
                  <p className="card-text">
                    <b>Rating</b> : {singleProduct.rating.rate}
                  </p>
                  <p className="card-text">
                    <b>No of Items left</b> : {singleProduct.rating.count}
                  </p>
                  <button
                    className="btn btn-dark"
                    onClick={() => addToCart(singleProduct)}
                  >
                    Add to Cart
                  </button>
                  <br />
                  <NavLink to={"/"}>
                    <i className="bi bi-arrow-left fs-2 text-black"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
