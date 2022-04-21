import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slidesData.js";
import "../home/home.css";
import { useState } from "react";
import {Message} from "semantic-ui-react"

function Home() {
  const[responseInfo,setResponseInfo]=useState()
  function handleDismiss() {
    setResponseInfo("");
  }
  let countPageProduct = 4;
  return (
    // <div className="home ui container">
    //   <Slide slides={slidesData()} />
    //   <Cards  pageDevider={countPageProduct}/>
    // </div>
    <div className="home ui container">
    {responseInfo && responseInfo.length > 0 ? (
     <Message success onDismiss={handleDismiss} content={responseInfo} />
   ) : (
     ""
   )}
   <Slide slides={slidesData()} />
   <Cards pageDevider={countPageProduct}
   setResponseInfo={setResponseInfo}
   />
 </div>
  );
}
export default Home;
