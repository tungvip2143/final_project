import React, { useState, useEffect } from "react";
import Button from "../CommonStyles/Button/CommonBtn";

import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const Products = () => {
  //! State
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let componentMounted = true;

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setFilter(data)}
          >
            All
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </Button>
        </div>
        {filter.map((product) => {
          const handleBuy = () => {
            navigate(`/products/${product.id}`);
          };
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>

                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleBuy}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  //! Function
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  //! Render
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
