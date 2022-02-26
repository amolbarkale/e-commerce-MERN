import "./wl.css";
const Wl = () => {
  const Btn = ({ type }) => {
    return <button className={"widgetlgBtn " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetLgName">Nrupul Dev</span>
          </td>
          <td className="widgetlgDate">26 Feb 2022</td>
          <td className="widgetlgAmount">$122.23</td>
          <td className="widgetlgStatus">
            <Btn type="Approved" />
          </td>
        </tr>

        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetLgName">Nrupul Dev</span>
          </td>
          <td className="widgetlgDate">26 Feb 2022</td>
          <td className="widgetlgAmount">$122.23</td>
          <td className="widgetlgStatus">
            <Btn type="Declined" />
          </td>
        </tr>

        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetLgName">Nrupul Dev</span>
          </td>
          <td className="widgetlgDate">26 Feb 2022</td>
          <td className="widgetlgAmount">$122.23</td>
          <td className="widgetlgStatus">
            <Btn type="Pending" />
          </td>
        </tr>

        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetLgName">Nrupul Dev</span>
          </td>
          <td className="widgetlgDate">26 Feb 2022</td>
          <td className="widgetlgAmount">$122.23</td>
          <td className="widgetlgStatus">
            <Btn type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Wl;
