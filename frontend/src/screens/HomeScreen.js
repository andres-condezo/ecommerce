import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../store/actions/productActions";
import Spinner from "../components/Loader";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div>
      <h1>Latest products</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((prod) => (
            <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={prod} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
