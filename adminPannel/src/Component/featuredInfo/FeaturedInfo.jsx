import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { userRequest } from "../../reqMethods";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const grtIncome = async () => {
      try {
        const res = await userRequest.get(`/orders/income`);

        setIncome(res.data);
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (err) {
        console.log("err:", err);
      }
    };
    grtIncome();
  }, []);
  console.log("percentage:", percentage);

  return (
    <div className="featured">
      <div className="featuredItm">
        <span className="featuresTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featurMoney">₹ {income[1]?.total}</span>
          <span className="featurMoneyRate">
            {parseInt(percentage)}%
            {percentage > 0 ? (
              <ArrowDownward className="fIcon negative" />
            ) : (
              <ArrowDownward className="fIcon negative" />
            )}
          </span>
        </div>
        <span className="featureSub">compared to last month</span>
      </div>
      <div className="featuredItm">
        <span className="featuresTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featurMoney">₹ 2,412</span>
          <span className="featurMoneyRate">
            -1.5 <ArrowDownward className="fIcon negative" />
          </span>
        </div>
        <span className="featureSub">compared to last month</span>
      </div>
      <div className="featuredItm">
        <span className="featuresTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featurMoney">₹ 2,22</span>
          <span className="featurMoneyRate">
            +2.5 <ArrowUpward className="fIcon" />
          </span>
        </div>
        <span className="featureSub">compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
