import "./user.css";
import {
  CalendarToday,
  LocationCityOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="userTitleCont">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userBtn">Create</button>
        </Link>
      </div>
      <div className="userCont">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Amol S Barkale</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfoCont">
              <PermIdentity className="userShowIcn" />
              <span className="userShowInfoTitle">amolsb99</span>
            </div>
            <div className="userShowInfoCont">
              <CalendarToday className="userShowIcn" />
              <span className="userShowInfoTitle">29.09.1993</span>
            </div>{" "}
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfoCont">
              <PhoneAndroid className="userShowIcn" />
              <span className="userShowInfoTitle">8626022099</span>
            </div>
            <div className="userShowInfoCont">
              <MailOutline className="userShowIcn" />
              <span className="userShowInfoTitle">barkaleamol@gmail.com</span>
            </div>
            <div className="userShowInfoCont">
              <LocationCityOutlined className="userShowIcn" />
              <span className="userShowInfoTitle">MIDC Jalgaon</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItm">
                <label>Username</label>
                <input
                  className="userUpdateIp"
                  type="text"
                  placeholder="amolsb"
                />
              </div>
              <div className="userUpdateItm">
                <label>Full name</label>
                <input
                  className="userUpdateIp"
                  type="text"
                  placeholder="amol S Barkale"
                />
              </div>
              <div className="userUpdateItm">
                <label>Email</label>
                <input
                  className="userUpdateIp"
                  type="text"
                  placeholder="abc@abc.com"
                />
              </div>
              <div className="userUpdateItm">
                <label>Phone</label>
                <input
                  className="userUpdateIp"
                  type="text"
                  placeholder="8626022099"
                />
              </div>
              <div className="userUpdateItm">
                <label>Address</label>
                <input
                  className="userUpdateIp"
                  type="text"
                  placeholder="Maharashtra|India"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish style={{ cursor: "pointer" }} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
