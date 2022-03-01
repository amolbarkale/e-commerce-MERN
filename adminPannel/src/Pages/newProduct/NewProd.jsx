import { useState } from "react";
import "./newProd.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firabase";
import { addProduct } from "../../redux/apiCall";
import { useDispatch } from "react-redux";
const NewProd = () => {
  const [inputs, setinputs] = useState({});
  const [files, setfiles] = useState(null);
  const [categoris, setcategoris] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setinputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategories = (e) => {
    setcategoris(e.target.value.split(","));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo
    const fileName = new Date().getTime() + files.name;

    const storage = getStorage(app);

    const StorageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(StorageRef, files);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          const product = { ...inputs, img: downloadURL, categoris: categoris };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newProd">
      <div className="NewProduct">
        <h1 className="newProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItm">
            <label>Image</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setfiles(e.target.files[0])}
            />
          </div>
          <div className="addProductItm">
            <label>Title</label>
            <input
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="Lenskart summer sp."
            />
          </div>
          <div className="addProductItm">
            <label>Price</label>
            <input
              name="price"
              onChange={handleChange}
              type="number"
              placeholder="₹ 100"
            />
          </div>
          <div className="addProductItm">
            <label>Categories</label>
            <input
              onChange={handleCategories}
              type="text"
              placeholder="jeans / skirts"
            />
          </div>
          <div className="addProductItm">
            <label>Description</label>
            <input
              name="desc"
              onChange={handleChange}
              type="text"
              placeholder="description"
            />
          </div>

          <div className="addProductItm">
            <label>Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <button onClick={handleSubmit} className="addProductBtn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProd;
