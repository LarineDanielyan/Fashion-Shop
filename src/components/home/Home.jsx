import Cards from "../card/Cards";
import "../home/home.css";
import Slides from "../slider/Slides";


const Home = () => {
    return (
        <div className="home">
            <Slides />
           <Cards />
        </div>
    );
}

export default Home;
