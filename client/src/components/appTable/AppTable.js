import React, { useState, useEffect } from 'react';
import { Container, Button, Table, Form, Row, Col } from 'react-bootstrap';

import TableNav from '../tableNav/TableNav';
import TableItems from '../tableItems/TableItems';

const fetchtabledata = async () => fetch('/api/xml')
.then(res => res.json());

const AppTable = () => {

  const [ tableData, setTableData ] = useState([]);

  useEffect(() => {
    fetchtabledata().then(data => setTableData(data));
  }, []);

  return (
    <div className="appTable mt-5">
      <Container>
        <TableNav/>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Book</th>
              <th>ID</th>
              <th>Author</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Publish_Date</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <TableItems tableData={tableData}/>
          </tbody>
        </Table>
      </Container>      
    </div>
  )
}

export default AppTable;
