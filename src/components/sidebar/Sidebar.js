import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCardOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

// import {DashboardIcon,PersonOutlineOutlinedIcon, NotificationsNoneIcon,SettingsSystemDaydreamOutlinedIcon,SettingsApplicationsOutlinedIcon,PsychologyOutlinedIcon,AccountCircleOutlinedIcon,ExitToAppOutlinedIcon,CreditCardIcon,InsertChartIcon,LocalShippingIcon, StoreIcon} from '@mui/icons-material';


const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)


    return (
        <div className='sidebar'>
            <div className="top">
                <NavLink to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Pournima</span>
                </NavLink>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </NavLink>

                    <p className="title">LISTS</p>

                    <NavLink to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </NavLink>
                    <NavLink to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </NavLink>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Status</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="color-option" onClick={()=> dispatch({type: "LIGHT"})} ></div>
                <div className="color-option" onClick={()=> dispatch({type: "DARK"})} ></div>
            </div>
        </div>
    )
}

export default Sidebar