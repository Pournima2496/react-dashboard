import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/DataTable'
import './list.scss'

const List = ({ heading }) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <h2>{heading}</h2>
        <Datatable />
      </div>
    </div>
  )
}

export default List