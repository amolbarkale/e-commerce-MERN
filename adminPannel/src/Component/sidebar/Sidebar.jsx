import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  Facebook,
  LineStyle,
  Mail,
  Message,
  PermIdentity,
  Report,
  ReportOutlined,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcn" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcn" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcn" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem active">
                <PermIdentity className="sidebarIcn" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcn" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcn" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <ReportOutlined className="sidebarIcn" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Mail className="sidebarIcn" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Facebook className="sidebarIcn" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcn" />
              Messagess
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <WorkOutline className="sidebarIcn" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcn" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcn" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
