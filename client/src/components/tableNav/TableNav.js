import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

const TableNav = () => {
  return (
    <Row className="mb-3">
      <Col>
        <Button className="btn btn-info">Display table data</Button>
      </Col>

      <Col sm={3}>
        <Form.Control
            type="text"
            placeholder="search data..."
            aria-describedby="passwordHelpInline"
          />
      </Col>
    </Row>
  );
};

export default TableNav;
