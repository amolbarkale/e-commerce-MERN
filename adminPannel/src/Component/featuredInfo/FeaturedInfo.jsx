import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItm">
        <span className="featuresTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featurMoney">$2,412</span>
          <span className="featurMoneyRate">
            -11.5 <ArrowDownward className="fIcon negative" />
          </span>
        </div>
        <span className="featureSub">compared to last month</span>
      </div>
      <div className="featuredItm">
        <span className="featuresTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featurMoney">$2,412</span>
          <span className="featurMoneyRate">
            -1.5 <ArrowDownward className="fIcon negative" />
          </span>
        </div>
        <span className="featureSub">compared to last month</span>
      </div>
      <div className="featuredItm">
        <span className="featuresTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featurMoney">$2,22</span>
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
