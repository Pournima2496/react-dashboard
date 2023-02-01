import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import '../list/list.scss'
import ProductData from '../../components/productData/ProductData'

const ProductList = ({ heading }) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <h2>{heading}</h2>
        <ProductData/>
      </div>
    </div>
  )
}

export default ProductList