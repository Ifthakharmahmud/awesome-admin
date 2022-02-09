import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import "./Product.css";
import {productData} from "./../../dummyData";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Product = () => {
    return (
        <>
        {/* Single Product */}
            <div className="product">
                <div className="productTitleContainer">
                    <h1 className="productTitle">Product</h1>
                    <Link to="/newproduct">
                        <button className="productAddButton">Add Product</button>
                    </Link>
                </div>
                
                <div className="productTop">
                    <div className="productTopLeft">
                        <Chart data={productData} dataKey="Sales" title="Sales Performance" grid/>
                    </div>
                    <div className="productTopRight">
                        <div className="productInfoTop">
                            <img src="https://cdn.thewirecutter.com/wp-content/media/2021/04/airpods-2048px-3907-2x1-1.jpg?auto=webp&quality=60&crop=2:1&width=1024" alt="" className="productInfoImage" />
                            <span className="productName">Apple Airpods</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">id:</span>
                                <span className="productInfoValue">234</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">sales:</span>
                                <span className="productInfoValue">4350</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">active:</span>
                                <span className="productInfoValue">yes</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">in stock:</span>
                                <span className="productInfoValue">no</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productBottom">
                    <form  className="productForm">
                        <div className="productFormLeft">
                            <label> Product Name  </label>
                            <input type="text"  placeholder="Apple Airpod" />

                            <label>In Stock</label>
                            <select name="inStock" id="inStock">
                                <option value="yes">YES</option>
                                <option value="no">NO</option>
                            </select>

                            <label>Active</label>
                            <select name="active" id="active">
                                <option value="yes">YES</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src="https://cdn.thewirecutter.com/wp-content/media/2021/04/airpods-2048px-3907-2x1-1.jpg?auto=webp&quality=60&crop=2:1&width=1024" alt="" className="productUploadImg" />
                                <label for="file">
                                    <CloudUploadIcon />
                                </label>
                                <input type="file" id="file" style={{ display: "none"}} />
                            </div>
                            <button className="productButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Product;