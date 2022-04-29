import React from "react";
import { useState } from "react";
import Cards from "../card/Cards";
import {Message,Sticky} from "semantic-ui-react"
function Products() {
  const[responseInfo,setResponseInfo]=useState()
  function handleDismiss() {
    setResponseInfo("");
  }
  let countPageProduct = 6;
  return (
    
      // <div className="home ui container">
      //   <Cards pageDevider={countPageProduct} />
      // </div>
      <div className="home ui container">
      {responseInfo && responseInfo.length > 0 ? (
        <Sticky >
           <Message success onDismiss={handleDismiss} content={responseInfo} />
      </Sticky>
       
      ) : (
        ""
      )}
      <Cards pageDevider={countPageProduct}
       setResponseInfo={setResponseInfo}
      />
    </div>
    
  );
}

export default Products;
