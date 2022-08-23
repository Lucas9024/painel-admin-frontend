import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../../datatabledatas';

const Datatable = () => {

 
  return (
    <div className="dataContainer">
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
