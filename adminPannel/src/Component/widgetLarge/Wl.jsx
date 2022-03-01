import "./wl.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../reqMethods";
import { format } from "timeago.js";
const Wl = () => {
  const [orders, setOrders] = useState([]);

  const Btn = ({ type }) => {
    return <button className={"widgetlgBtn " + type}>{type}</button>;
  };

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get(`orders`);
        setOrders(res.data);
      } catch (err) {
        console.log("err:", err);
      }
    };
    getOrders();
  }, []);

  return (
    <div className="widgetlg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetlgTr">
            <th className="widgetlgTh">Customer</th>
            <th className="widgetlgTh">Date</th>
            <th className="widgetlgTh">Amount</th>
            <th className="widgetlgTh">Status</th>
          </tr>

          {orders.map((order) => (
            <tr className="widgetlgTr" key={order._id}>
              <td className="widgetlgUser">
                <img
                  src="https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
                  alt=""
                  className="widgetlgImg"
                />
                <span className="widgetLgName">{order._id}</span>
              </td>
              <td className="widgetlgDate">{format(order.createdAt)}</td>
              <td className="widgetlgAmount">₹ {order.amount}</td>
              <td className="widgetlgStatus">
                <Btn type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wl;
