import "./ws.css";
import { Visibility } from "@material-ui/icons";
const Ws = () => {
  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">New join members</span>
      <ul className="sidgetSmList">
        <li className="widgetSmListItm">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetUsername">Amol Barkale</span>
            <span className="widgetJobTitle">Software engineer </span>
          </div>
          <button className="widgetBtn">
            <Visibility cassName="widgetVisi" />
            Display
          </button>
        </li>
        <li className="widgetSmListItm">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetUsername">Amol Barkale</span>
            <span className="widgetJobTitle">Software engineer </span>
          </div>
          <button className="widgetBtn">
            <Visibility cassName="widgetVisi" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Ws;
