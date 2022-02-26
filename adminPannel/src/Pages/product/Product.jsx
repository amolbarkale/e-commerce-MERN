import "./product.css";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div className="product">
      <div className="prodTitleCont">
        <h1 className="prodTitle">Product</h1>
        <Link to="/newProduct">
          <button className="prodAddBtn">Create</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
