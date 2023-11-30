
import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "bootstrap/dist/css/bootstrap.min.css";

export default function IncomeSources() {
  return (
    <>
    <h1>
      IncomeSources:
    </h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="What is your yearly salary?"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="What is your additional yearly salary (freelance/allowance)"  
        />
      </InputGroup>    
    </>
  );
}