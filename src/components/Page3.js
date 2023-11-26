// import React from "react"
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import "bootstrap/dist/css/bootstrap.min.css";
// export default function Page3() {
//   return (
//     <>
//       <InputGroup className="mb-3">
//         <Form.Control
//           placeholder="Intended state"
//           aria-label="Last name"
//         />
//       </InputGroup>
//       <InputGroup className="mb-3">
//         <Form.Control
//           placeholder="Expected pre-tax income"
//           aria-label="Expected income"
//         />
//       </InputGroup>
//       <InputGroup className="mb-3">
//         <InputGroup.Checkbox aria-label="Are your student loans deferred?" />
//         <Form.Control aria-label="Text input with checkbox" />
//       </InputGroup>
//       <InputGroup className="mb-3">
//         <Form.Control
//           placeholder="If so, for how many years are they deferred?"
//           aria-label="Expected income"
//         />
//       </InputGroup>
//     </>
//   );
// }

import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Page3() {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <div className="">
          <Form.Label htmlFor="intended-state" className="block text-lg font-semibold mb-1">Intended State</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="intended-state"
              placeholder="Enter intended state"
              aria-label="Intended state"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="expected-income" className="block text-lg font-semibold mb-1">Expected Pre-tax Income</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="expected-income"
              placeholder="Enter expected pre-tax income"
              aria-label="Expected income"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="deferred" className="block text-lg font-semibold mb-1">Are your student loans deffered?</Form.Label>
          <InputGroup>
            <Form.Select
              aria-label="Select option"
              className="border rounded py-2 px-4 w-full"
              defaultValue=""
            >
              <option value="" disabled>Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Select>
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="deferred-years" className="block text-lg font-semibold mb-1">Years of Loan Deferral</Form.Label>
          <InputGroup>
            <Form.Control
              id="deferred-years"
              placeholder="If yes, How many years?"
              aria-label="Deferred years"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
