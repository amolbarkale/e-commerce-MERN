import "./product.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../Component/chart/Chart";
import { prodData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useMemo, useState, useEffect } from "react";
import { userRequest } from "../../reqMethods";

const Product = () => {
  const location = useLocation();

  const prodId = location.pathname.split("/")[2];
  console.log("prodId:", prodId);

  const [pstats, setPstats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === prodId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/orders/income?pid=" + prodId);

        res.data.map((itm) =>
          setPstats((prev) => [
            ...prev,
            { name: MONTHS[itm._id - 1], Sales: itm.total },
          ])
        );
      } catch (err) {
        console.log("err:", err);
      }
    };
    getStats();
  }, [MONTHS, prodId]);

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
          <Chart data={pstats} dataKey="Sales" title="Sales performance" />
        </div>
        <div className="prodTopRight">
          <div className="prodInfoTop">
            <img src={product.img} alt="" className="prodInfoImg" />
            <span className="prodName">{product.title} </span>
          </div>
          <div className="prodInfoBottom">
            <div className="prodInfoItem">
              <span className="prodInfoItmKey">Id:</span>
              <span className="prodInfoItmValue">{product._id}</span>
            </div>

            <div className="prodInfoItem">
              <span className="prodInfoItmKey">Sales:</span>
              <span className="prodInfoItmValue">358</span>
            </div>

            <div className="prodInfoItem">
              <span className="prodInfoItmKey">In stock:</span>
              <span className="prodInfoItmValue">
                {product.inStock && "yes"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="prodForm">
          <div className="prodFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} />
            <label>Product Price</label>
            <input type="text" placeholder={product.price} />

            <label>In stock</label>
            <select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="prodFormRight">
            <div className="prodUpload">
              <img src={product.img} alt="" className="prodUploadImg" />
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
