import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import {userData} from "./../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";


const Home = () => {
    return (
        <>
        {/* Hemo Page Designer component */}
        <div className="home"> 
            <FeaturedInfo></FeaturedInfo>
            <Chart data = {userData} title="User Analytics" grid  dataKey="Active User" />
            <div className="home-widgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
            
        </>
    );
};

export default Home;