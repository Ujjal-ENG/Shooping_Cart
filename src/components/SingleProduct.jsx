import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="product">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>TK {product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>

          {cart.some((p) => p.id === product.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                });
              }}
              style={{ marginBottom: "20px" }}
              variant="danger"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
              variant={!product.inStock ? "warning" : "primary"}
              disabled={!product.inStock}
            >
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
