import "./FeaturedInfo.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowUpwardTwoTone } from "@mui/icons-material";

const FeaturedInfo = () => {
    return (
        <>
            {/* Featured Info   */}
            <div className="featured">
                <div className="featured-item">
                    <span className="featuredTitle">Revanue</span>
                    <div className="featured-money-container">
                        <span className="featured-money"> $2,564 </span>
                        <span className="featured-money-rate">-13.4 <ArrowDownwardIcon className="featured-icon negative" /> </span>
                    </div>
                    <span className="featured-sub">
                             Compared to last month              
                    </span>
                </div>

                <div className="featured-item">
                    <span className="featuredTitle">Sales</span>
                    <div className="featured-money-container">
                        <span className="featured-money"> $4,564 </span>
                        <span className="featured-money-rate">-1.4 <ArrowDownwardIcon className="featured-icon negative" /> </span>
                    </div>
                    <span className="featured-sub">
                             Compared to last month              
                    </span>
                </div>

                <div className="featured-item">
                    <span className="featuredTitle">Cost</span>
                    <div className="featured-money-container">
                        <span className="featured-money"> $2,564 </span>
                        <span className="featured-money-rate">2.4 <ArrowUpwardTwoTone className="featured-icon" /> </span>
                    </div>
                    <span className="featured-sub">
                             Compared to last month              
                    </span>
                </div>
                
            </div>
            
        </>
    );
};

export default FeaturedInfo;