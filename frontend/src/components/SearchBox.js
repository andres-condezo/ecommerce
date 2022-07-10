import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const SearchBox = () => {
  const [keyword, setKeyword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>

      <Button type="submit" variant="outline-success" className="p-2">
        Submit
      </Button>
    </Form>
  );
};