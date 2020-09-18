import React from 'react';
import { Container, Button, Table, Form, Row, Col } from 'react-bootstrap';

import TableNav from '../tableNav/TableNav';
import TableItems from '../tableItems/TableItems';

const AppTable = () => {

  return (
    <div className="appTable mt-5">
      <Container>

        <TableNav/>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>

          <tbody>
            <TableItems/>
          </tbody>
        </Table>
      </Container>      
    </div>
  )
}

export default AppTable;
