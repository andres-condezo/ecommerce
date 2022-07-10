import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const SearchBox = () => {
  const [keyword, setKeyword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
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
