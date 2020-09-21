import React, { Fragment } from 'react';

const TableItems = ({tableData}) => {
  return (
    <Fragment>
      {tableData === undefined ? "error" : console.log(tableData.catalog[0])}    
    </Fragment>    
  )
}

export default TableItems;
