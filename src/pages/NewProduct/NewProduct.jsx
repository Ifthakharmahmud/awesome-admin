import './NewProduct.css';

const NewProduct = () => {
    return (
        <>
            <div className="newProduct">
            <h1 className="newUserTitle">New Product</h1>
                <form action="#" className="newUserForm">
                <div className="newUserItem">
                        <label htmlFor="">Product Image</label>
                        <input type="file"  />
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder="Product Name" />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="">Stock</label>
                        <input type="text" placeholder="223" />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="">Price</label>
                        <input type="email" placeholder="$100" />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="">Brand</label>
                        <input type="email" placeholder="Brand Name" />
                    </div>

                   
                    
                    <div className="newUserItem">
                        <label htmlFor="">Active</label>
                        <select name="active" id="active" className="newUserSelect">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>
                    

                    <buton className="newUserButton" >Add New Product</buton>
                </form>
            </div>
        </>
    );
};

export default NewProduct;