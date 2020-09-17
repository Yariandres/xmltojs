import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AppForm = () => {
  return (
    <div className="appForm mt-5">
      <Container>
        <Form method="POST" action="http://localhost:3000/api/xml">    
          <Form.Group controlId="formBasicPassword" style={{ width: "23.5%"}}>
            <Form.File 
              id="custom-file"
              label="Import file"
              custom
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button variant="warning" className="ml-2">
            clear fields
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default AppForm
