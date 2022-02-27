import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../Component/chart/Chart";
import { prodData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
const Product = () => {
  return (
    <div className="product">
      <div className="prodTitleCont">
        <h1 className="prodTitle">Product</h1>
        <Link to="/newProduct">
          <button className="prodAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="prodTopLeft">
          <Chart data={prodData} dataKey="sales" title="Sales performance" />
        </div>
        <div className="prodTopRight">
          <div className="prodInfoTop">
            <img
              src="https://oasis.opstatics.com/content/dam/oasis/page/2021/operation/1220/homepage/1-banner-2.jpg"
              alt=""
              className="prodInfoImg"
            />
            <span className="prodName">One plus </span>
          </div>
          <div className="prodInfoBottom">
            <div className="prodInfoItem">
              <span className="prodInfoItmKey">Id:</span>
              <span className="prodInfoItmValue">123</span>
            </div>

            <div className="prodInfoItem">
              <span className="prodInfoItmKey">Sales:</span>
              <span className="prodInfoItmValue">358</span>
            </div>
            <div className="prodInfoItem">
              <span className="prodInfoItmKey">Active:</span>
              <span className="prodInfoItmValue">yes</span>
            </div>
            <div className="prodInfoItem">
              <span className="prodInfoItmKey">In stoc:</span>
              <span className="prodInfoItmValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="prodForm">
          <div className="prodFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Lenskart Sunglasses" />
            <label>In stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="prodFormRight">
            <div className="prodUpload">
              <img
                src="https://oasis.opstatics.com/content/dam/oasis/page/2021/operation/1220/homepage/1-banner-2.jpg"
                alt=""
                className="prodUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" style={{ display: "none" }} id="file" />
            </div>
            <button className="prodButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
