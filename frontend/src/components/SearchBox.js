import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      navigate(`/?keyword=${keyword}`);
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            className="mr-sm-2 ml-sm-5"
          ></Form.Control>
        </Col>

        <Col>
          <Button type="submit" variant="outline-success" className="p-2">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
