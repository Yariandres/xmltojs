import React from 'react';
import { Container, Button, Table, Form, Row, Col } from 'react-bootstrap';
import TableNav from '../tableNav/TableNav';

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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>      
    </div>
  )
}

export default AppTable;
