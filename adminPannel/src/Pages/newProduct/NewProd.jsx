import "./newProd.css";
const NewProd = () => {
  return (
    <div className="newProd">
      <div className="NewProduct">
        <h1 className="newProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItm">
            <label>Image</label>
            <input type="file" id="file" />
          </div>
          <div className="addProductItm">
            <label>Name</label>
            <input type="text" placeholder="one plus" />
          </div>
          <div className="addProductItm">
            <label>Stock</label>
            <input type="email" placeholder="123" />
          </div>
          <div className="addProductItm">
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="addProductBtn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default NewProd;
