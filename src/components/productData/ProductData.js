// import './datatable.scss'
import '../datatable/datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const ProductData = () => {

  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }
  const actionColumn = [{
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <NavLink to="/products/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </NavLink>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)} >Delete</div>

        </div>
      )
    }
  }]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
      Add New Product
        <NavLink to="/products/new" className='link'>
          Add new
        </NavLink>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductData