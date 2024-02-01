import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { add } from "../Redux/CartSlice";
import { STATUSES, fetchProducts } from "../Redux/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status == STATUSES.LOADING) {
    return (
      <>
        <h2 className="fw-bold fs-1">Loading</h2>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <form className="d-flex p-5" role="search">
            <input
              className="form-control p-4"
              type="search"
              placeholder="Search here"
              aria-label="Search"
            />
          </form>
          {products.map((product) => {
            const { id, title, image, price, description } = product;
            return (
              <div className="col-xl-3 col-lg-4 col-md-6 col">
                <div className="card my-3" key={id}>
                  <img
                    src={image}
                    className="card-img-top m-auto"
                    style={{ width: "250px", height: "250px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 20)}</h5>
                    <p className="card-text">
                      Description: {description.slice(0, 40)}
                    </p>
                    <p className="card-text">Price: ${price}</p>
                    {/* <NavLink to={`/products/${id}`} className="btn btn-dark">
                      Read More
                    </NavLink> */}
                    <NavLink
                      className="btn btn-dark"
                      onClick={() => handleAdd(product)}
                    >
                      Add o Cart
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
