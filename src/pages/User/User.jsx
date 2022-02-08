import"./User.css";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from "react-router-dom";
const User = () => {
    return (
        <>
            {/* Single User  */}
            <div className="user">
                <div className="user-title-container">
                    <h1 className="user-title">Edit User</h1>
                    <Link to="/newUser">
                        <button className="user-add-button">Create User</button>
                    </Link>
                    
                </div>

                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img src="https://i.ibb.co/KmWPpyV/portfolio1.jpg" alt="" className="showTopImg" />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Anna Becker</span>
                                <span className="userShowUserTitle">Web Developer</span>
                            </div>

                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle"> Account Details </span>
                            <div className="userShowInfo">
                                <PersonOutlineIcon className="userShowIcon" />
                                <span className="userShowInfoTitle"> anna99 </span>
                            </div>
                            <div className="userShowInfo">
                                <DateRangeIcon className="userShowIcon" />
                                <span className="userShowInfoTitle"> 12/06/99 </span>
                            </div>
                            <span className="userShowTitle"> Contact Details </span>
                            <div className="userShowInfo">
                                <PhoneForwardedIcon className="userShowIcon" />
                                <span className="userShowInfoTitle"> +09 9888 776 </span>
                            </div>
                            <div className="userShowInfo">
                                <ForwardToInboxIcon className="userShowIcon" />
                                <span className="userShowInfoTitle"> anna99@gmail.com </span>
                            </div>
                            <div className="userShowInfo">
                                <HomeIcon className="userShowIcon" />
                                <span className="userShowInfoTitle"> Dhaka | Bangladesh </span>
                            </div>
                        </div>
                    </div>
                    {/* User Update Form  */}
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form action="#" className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Username</label>
                                    <input type="text" placeholder="anna99" className="userUpdateInput"  />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Anna Becker" className="userUpdateInput"  />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input type="text" placeholder="anna99@gmail.com" className="userUpdateInput"  />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phones</label>
                                    <input type="text" placeholder="+09 9888 776
" className="userUpdateInput"  />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Address</label>
                                    <input type="text" placeholder="Dhaka | Bangladesh" className="userUpdateInput"  />
                                </div>
                                
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img src="https://i.ibb.co/KmWPpyV/portfolio1.jpg" alt="" className="userUpdateImage" />
                                    <label htmlFor="file"><CloudUploadIcon className="userUpdateIcon" /></label>
                                    <input type="file" id="file" style={{display: "none"}} />
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;