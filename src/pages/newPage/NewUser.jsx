import "./newUser.css"

const NewUser = () => {
    return (
        <>

            {/* New User   */}
            <div className="newUser">
                <h1 className="newUserTitle">New User</h1>
                <form action="#" className="newUserForm">
                    <div className="newUserItem">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Username" />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder="Jhon Smith" />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Password" />
                    </div>


                    <div className="newUserItem">
                        <label htmlFor="">Phone</label>
                        <input type="password" placeholder="Phone Number" />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="">Address</label>
                        <input type="password" placeholder="Your Address" />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="">Gender</label>
                        <div className="newUserGender">                            
                            <input type="radio" name="gender" id="male" value="male" />
                            <label for="male"> Male </label>
                            <input type="radio" name="gender" id="female" value="female" />
                            <label for="female"> Female </label>
                            <input type="radio" name="gender" id="other" value="other" />
                            <label for="other"> Others </label>
                        </div>
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="">Active</label>
                        <select name="active" id="active" className="newUserSelect">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>

                    <buton className="newUserButton">Create</buton>
                </form>
            </div>
        </>
    );
};

export default NewUser;