import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css"

const Home = () => {
    return (
        <>
        {/* Hemo Page Designer component */}
        <div className="home">
            <FeaturedInfo></FeaturedInfo>
            <Chart></Chart>
        </div>
            
        </>
    );
};

export default Home;