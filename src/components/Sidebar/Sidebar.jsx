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
                            <li className="sidebar-list-item">
                                <TimelineIcon className="sidebar-icon" />
                                Analytics
                            </li>

                            <li className="sidebar-list-item">
                                <TrendingUpIcon className="sidebar-icon" />
                                Sales
                            </li>
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
                            <li className="sidebar-list-item">
                                <InventoryIcon className="sidebar-icon" />
                                Products
                            </li>

                            <li className="sidebar-list-item">
                                <AttachMoneyIcon className="sidebar-icon" />
                                Transactions
                            </li>
                            <li className="sidebar-list-item">
                                <AnalyticsIcon className="sidebar-icon" />
                                Reports
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Notifications</h3>
                        <ul className="sidebar-list">
                            <li className="sidebar-list-item active">
                                <MailOutlineIcon className="sidebar-icon" />
                                Mail
                            </li>
                            <li className="sidebar-list-item">
                                <CommentIcon className="sidebar-icon" />
                                Feedback
                            </li>

                            <li className="sidebar-list-item">
                                <SendIcon className="sidebar-icon" />
                                Messages
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">Staff</h3>
                        <ul className="sidebar-list">
                            <li className="sidebar-list-item active">
                                <ManageAccountsIcon className="sidebar-icon" />
                                Manage
                            </li>
                            <li className="sidebar-list-item">
                                <TimelineIcon className="sidebar-icon" />
                                Analytics
                            </li>

                            <li className="sidebar-list-item">
                                <AnalyticsIcon className="sidebar-icon" />
                                Reports
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;