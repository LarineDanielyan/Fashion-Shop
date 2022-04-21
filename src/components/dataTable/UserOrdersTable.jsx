import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Grid, Segment, List, Image, Dropdown, Popup,Pagination } from "semantic-ui-react";
import logo from "../../img/logo.png";
import "./dataTable.css";



function UserOrdersTable({list}){
  const [result, setResult] = useState([]);
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const pageDevider = 4;
  
  function getProductsByPage(productsByPage){
    setProductsByPage(productsByPage)
  }

  useEffect(() =>{
    if (list && list.length > 0) setResult(list)
  }, [start,list])

  useEffect(() => {
    if(result) getProductsByPage(result.slice(start, start + pageDevider));
  }, [start, result]); 

  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }

  return(
    <>
    {productsByPage &&
      productsByPage.length > 0 &&
      productsByPage.map((item) => {
        return (
            <Popup 
            key={nanoid()}
            inverted
            content={new Date(item.date).toString()}
          
            header={item.user.name}
            className="tooltip"
            trigger={
              <Grid className="grid-table" >
              <Grid.Row>
                <Grid.Column width="3">
                  <Segment.Inline 
                  className="orderId">{`Order Number N ${item.id}`} 
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="3">
                  <Segment.Inline>
                    <Image
                      avatar
                      className="product-icon"
                      src={item.product.img[0]?.imagePath || logo}
                    />
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="4">
                  <Segment.Inline>
                    <List.Content>
                      <List.Header>{item.product.name} </List.Header>
                      {item.product.price} {item.address} {item.phone}
                    </List.Content>
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="3">
                  <Segment.Inline>{item.orderStatus}</Segment.Inline>
                </Grid.Column>
                <Grid.Column width="3">

                </Grid.Column>
              </Grid.Row>
            </Grid>
            }
            
            />
        );
      })}
       <div className="pagination-container">
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDevider)}
        />
      </div>
  </>
  )
}

export default UserOrdersTable;