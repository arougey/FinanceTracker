import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Savings() {
  return (
    <>
    <h1>Savings</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Intended state"
          aria-label="Last name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Expected pre-tax income"
          aria-label="Expected income"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Are your student loans deferred?" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="If so, for how many years are they deferred?"
          aria-label="Expected income"
        />
      </InputGroup>
    </>
  );
}