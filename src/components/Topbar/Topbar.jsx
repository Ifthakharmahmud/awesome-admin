import React from 'react';
import "./Topbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
    return (
        <>
            {/* TopBar Start    */}
            <section className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <a href="index.html" className="logo"> AwesomeAdmin </a>
                    </div>
                    <div className="topRight">
                        {/* Topbar Icons   */}
                        <div className="topbarIconContainer">
                            <NotificationsNoneIcon />
                            <span className="topIconBadge"> 2 </span>
                        </div>
                        <div className="topbarIconContainer">
                            <LanguageIcon />
                            <span className="topIconBadge"> 2 </span>
                        </div>
                        <div className="topbarIconContainer">
                            <SettingsIcon />                            
                        </div>
                        <img src="./img/user.jpg" alt="topImage" className="topAvatar" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Topbar;