import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "bootstrap/dist/css/bootstrap.min.css";
export default function PersonalInfo() {
  return (
    <>
    <h1>PersonalInfo</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Intended State of Residence"
          aria-label="State"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Are you Married"
          aria-label="Married?"
        />
      </InputGroup>
    </>
  );
}