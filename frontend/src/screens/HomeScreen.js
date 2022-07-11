import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../store/actions/productActions";
import Spinner from "../components/Loader";
import Message from "../components/Message";
import { useLocation } from "react-router-dom";
import { Paginate } from "../components/Paginate";

function HomeScreen() {
  const location = useLocation();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  const queryParams = location.search;

  useEffect(() => {
    dispatch(listProducts(queryParams));
  }, [dispatch, queryParams]);

  return (
    <div>
      <h1>Latest products</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((prod) => (
              <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={prod} />
              </Col>
            ))}
          </Row>

          <Paginate page={page} pages={pages} keyword={queryParams} />
        </>
      )}
    </div>
  );
}

export default HomeScreen;
