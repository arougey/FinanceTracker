import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "bootstrap/dist/css/bootstrap.min.css";
export default function MonthlyExpenses() {
  return (
    <>
    <h1>MonthlyExpenses</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly Rent Payment"
          aria-label="Monthly rent"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly Pet Payment"
          aria-label="Monthly pets"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly Groceries Cost (Estimate)"
          aria-label="Monthly groceries"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly Vehicle Gas Costs"
          aria-label="Monthly vehicle"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly Internet Service Provider costs"
          aria-label="Monthly internet"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly Subscriptions"
          aria-label="Monthly subs"
        />
      </InputGroup>
    </>
  );
}
