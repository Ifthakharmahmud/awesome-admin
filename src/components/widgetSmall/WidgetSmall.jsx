// import React from 'react';
import "./WidgetSmall.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSmall = () => {
    return (
        <>
        {/* Small User Widget  */}
            <div className="widget-small">
                <span className="widget-small-title">New Join Members</span>
                <ul className="widget-small-list">
                    <li className="widget-small-item">
                        <img src="./img/user2.jpg" alt="" className="widget-small-img" /><div className="widget-sm-user">
                            <span className="widget-sm-username"> Anna Keller</span>
                            <span className="widget-sm-user-title"> Web Developer</span>
                        </div>
                        <button className="widget-sm-button">
                            <VisibilityIcon className="widget-sm-icon" /> Display
                        </button>
                    </li>
                    <li className="widget-small-item">
                        <img src="./img/user3.jpg" alt="" className="widget-small-img" /><div className="widget-sm-user">
                            <span className="widget-sm-username"> Anna Keller</span>
                            <span className="widget-sm-user-title"> Web Developer</span>
                        </div>
                        <button className="widget-sm-button">
                            <VisibilityIcon className="widget-sm-icon" /> Display
                        </button>
                    </li>
                    <li className="widget-small-item">
                        <img src="./img/user4.jpg" alt="" className="widget-small-img" /><div className="widget-sm-user">
                            <span className="widget-sm-username"> Anna Keller</span>
                            <span className="widget-sm-user-title"> Web Developer</span>
                        </div>
                        <button className="widget-sm-button">
                            <VisibilityIcon className="widget-sm-icon" /> Display
                        </button>
                    </li>
                    <li className="widget-small-item">
                        <img src="./img/user5.jpg" alt="" className="widget-small-img" /><div className="widget-sm-user">
                            <span className="widget-sm-username"> Anna Keller</span>
                            <span className="widget-sm-user-title"> Web Developer</span>
                        </div>
                        <button className="widget-sm-button">
                            <VisibilityIcon className="widget-sm-icon" /> Display
                        </button>
                    </li>
                    <li className="widget-small-item">
                        <img src="./img/user6.jpg" alt="" className="widget-small-img" /><div className="widget-sm-user">
                            <span className="widget-sm-username"> Anna Keller</span>
                            <span className="widget-sm-user-title"> Web Developer</span>
                        </div>
                        <button className="widget-sm-button">
                            <VisibilityIcon className="widget-sm-icon" /> Display
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default WidgetSmall;