import React from "react";
import { FormControl, Nav, Dropdown, Badge, Button } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { HiShoppingCart } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { CartState } from "../context/Context";

import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Add To Shopping</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search your product here..."
            className="m-auto"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>

        <Nav>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="success"
            >
              <HiShoppingCart fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {!cart.length ? (
                <Dropdown.Item href="#/action-1">
                  Cart Is Empty Now!!!
                </Dropdown.Item>
              ) : (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <div>
                        <img src={prod.image} alt={prod.name} />
                      </div>

                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <br />
                        <span>TK {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        className="icon"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}

                  <NavLink to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go TO CART
                    </Button>
                  </NavLink>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
