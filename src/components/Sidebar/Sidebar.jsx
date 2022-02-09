import React from 'react';
import "./Sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const Sidebar = () => {
    return (
        <>
            {/* Sidebar  */}
            <div className="sidebar">
                <div className="sidebar-wrapper">
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Dashboard</h3>
                        <ul className="sidebar-list">
                            <Link to="/">
                                <li className="sidebar-list-item active">
                                    <LineStyleIcon className="sidebar-icon" />
                                    Home
                                </li>
                            </Link>
                          
                        </ul>
                    </div>

                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Quick Menu</h3>
                        <ul className="sidebar-list">
                            <Link to="/users">
                            <li className="sidebar-list-item active">
                                <PersonOutlineIcon className="sidebar-icon" />
                                Users
                            </li>
                            </Link>

                            <Link to="/newUser">
                            <li className="sidebar-list-item ">
                                <PersonAddAltIcon className="sidebar-icon" />
                                Add New User
                            </li>
                            </Link>

                            
                        </ul>
                    </div>

                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Products</h3>
                        <ul className="sidebar-list">
                            

                        <Link to="/products">
                                <li className="sidebar-list-item active">
                                    <InventoryIcon className="sidebar-icon" />
                                    Products
                                </li>
                            </Link>

                            <Link to="/newproduct">
                                <li className="sidebar-list-item">
                                    <AddBusinessIcon className="sidebar-icon" />
                                    Add New Product
                                </li>
                            </Link>

                            
                        </ul>
                    </div>

                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Staff</h3>
                        <ul className="sidebar-list">
                            <Link to="/comingsoon1">
                            <li className="sidebar-list-item active">
                                <ManageAccountsIcon className="sidebar-icon" />
                                Manage
                            </li>
                            </Link>

                            <Link to="/comingsoon2">
                            <li className="sidebar-list-item">
                                <TimelineIcon className="sidebar-icon" />
                                Analytics
                            </li>
                            </Link>

                            <Link to="/comingsoon1">
                            <li className="sidebar-list-item">
                                <AnalyticsIcon className="sidebar-icon" />
                                Reports
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;