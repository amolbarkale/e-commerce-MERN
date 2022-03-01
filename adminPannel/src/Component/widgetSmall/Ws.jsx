import "./ws.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../reqMethods";
const Ws = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get(`users/?new=true`);
        setUsers(res.data);
      } catch (err) {
        console.log("err:", err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">New join members</span>
      <ul className="sidgetSmList">
        {users?.map((user) => (
          <li className="widgetSmListItm" key={user._id}>
            <img
              src={
                user.img ||
                "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
              }
              alt="profile"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetUsername">{user.username}</span>
            </div>
            <button className="widgetBtn">
              <Visibility className="widgetVisi" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ws;
