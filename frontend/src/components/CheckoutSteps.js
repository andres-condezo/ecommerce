import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const stepsArr = [
    {
      step: step1,
      to: "/login",
      label: "Login",
    },
    {
      step: step2,
      to: "/shipping",
      label: "Shipping",
    },
    {
      step: step3,
      to: "/payment",
      label: "Payment",
    },
    {
      step: step4,
      to: "/placeorder",
      label: "Place Order",
    },
  ];

  return (
    <Nav className="justify-content-center mb-4">
      {stepsArr.map(({ step, to, label }) =>
        step ? (
          <Nav.Item>
            <LinkContainer to={to}>
              <Nav.Link>{label}</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        ) : (
          <Nav.Link disabled>{label}</Nav.Link>
        )
      )}
    </Nav>
  );
};
