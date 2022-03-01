import "./home.css";
import FeaturedInfo from "../../Component/featuredInfo/FeaturedInfo";
import Chart from "../../Component/chart/Chart";
import Ws from "../../Component/widgetSmall/Ws";
import Wl from "../../Component/widgetLarge/Wl";
import { useState, useEffect, useMemo } from "react";
import { userRequest } from "../../reqMethods";

const Home = () => {
  // http://localhost:5000/users/stats

  const [userStats, setUserStats] = useState([]);

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
        const res = await userRequest.get("/users/stats");

        res.data.map((itm) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[itm._id - 1], ActiveUser: itm.total },
          ])
        );
      } catch (err) {
        console.log("err:", err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="ActiveUser"
      />
      <div className="homeWidgets">
        <Ws />
        <Wl />
      </div>
    </div>
  );
};

export default Home;
