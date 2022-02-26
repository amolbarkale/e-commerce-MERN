import "./home.css";
import FeaturedInfo from "../../Component/featuredInfo/FeaturedInfo";
import Chart from "../../Component/chart/Chart";
import { userData } from "../../dummyData";
import Ws from "../../Component/widgetSmall/Ws";
import Wl from "../../Component/widgetLarge/Wl";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="UserAnalytics"
        grid={true}
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
