import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import StarIcon from "@mui/icons-material/Star";
import { addCart } from "../../redux/action";

const Product = () => {
  //! State
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBackBtn = () => {
    navigate("/products");
  };
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-6 ">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div>
          <KeyboardBackspaceIcon
            fontSize="large"
            sx={{
              position: "absolute",
              top: "86px",
              left: "60px",
              cursor: "pointer",
            }}
            onClick={handleBackBtn}
          />
        </div>
        <div className="col-md-6 pt-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 pt-5">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <StarIcon sx={{ position: "relative", top: "-2px" }} />
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          {localStorage.getItem("isLogged") ? (
            <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </NavLink>
          ) : (
            <div className="btn btn-dark ms-2 px-3 py-2">Go to Cart</div>
          )}
        </div>
      </>
    );
  };

  //! Function
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  //! Render
  return (
    <div>
      <div className="container py-5 pt-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);
