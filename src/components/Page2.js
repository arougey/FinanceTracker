import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Page1() {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly student loans"
          aria-label="Student loans"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly pets"
          aria-label="Monthly pets"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly groceries"
          aria-label="Monthly groceries"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly vehicle costs"
          aria-label="Monthly vehicle"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly internet costs"
          aria-label="Monthly internet"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Monthly discretionary costs"
          aria-label="Monthly discretionary"
        />
      </InputGroup>
    </>
  );
}
