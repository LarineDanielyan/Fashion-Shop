import Cards from "../card/Cards";
import "../home/home.css";
import Slides from "../slider/Slides";
import { useAuth0 } from "@auth0/auth0-react";
import slidesData from "../../services/slideData";


function Home ()  {
    
    return (
        <div className="home ui container">
            <Slides slides={slidesData()} />
           <Cards />
        </div>
    );
}

export default Home;
