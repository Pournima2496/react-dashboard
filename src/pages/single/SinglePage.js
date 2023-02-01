import React from 'react'
import './singlepage.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table';


const SinglePage = ({title}) => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <h2>{title}</h2>

        <div className="top">

          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itmeTitle">Pournima</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">pournima@gmail.com </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+91 8097639445</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Kalyan Thane,Maharashtra </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">India</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
        <List/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
