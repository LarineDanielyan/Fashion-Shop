import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Icon,
} from "semantic-ui-react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">
                    <Icon name="phone square" />
                    +374 98759592
                  </List.Item>
                </List>
              </Grid.Column>
              
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Service
                </Header>
                <p>Payment by card during delivery/only in Yerevan /</p>
                <h5>Cash payment terms:</h5>
                <h6>
                  Cash payment is made immediately upon receipt of the order.
                  Our employee has the right not to deliver the goods to the
                  customer if the customer offers to delay payment. Dollar 
                  other foreign exchange rates are not accepted (in accordance
                  with the RA Code). The prices of the goods offered on the site
                  are final և include all types of taxes.
                </h6>
              </Grid.Column>
              <Grid.Column  width={3}>
                <Header as="h4" inverted>
                  <Icon name="facebook" />
                  <Icon name="instagram" />
                  <Icon name="twitter square" />
                </Header>
              </Grid.Column>
            
            </Grid.Row>
          </Grid>
          
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
