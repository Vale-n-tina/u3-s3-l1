import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../redux/Actions";
const MyCart = () => {
  const dispach = useDispatch();
  const cartArray = useSelector((reduxstate) => {
    return reduxstate.cart.content;
  });

  console.log("cartArray", cartArray);
  return (
    <Container>
      <Row className=" flex-column">
        <Col>
          <h2>il tuo carrello!</h2>
        </Col>

        <Col className="my-3">
          <ListGroup>
            {cartArray.map((jobData, i) => (
              <Col
                key={jobData._id}
                xs={9}
                className=" d-flex justify-content-around"
              >
                <Link to={`/${jobData.company_name}`}>
                  {jobData.company_name}
                </Link>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispach(removeCart(i));
                  }}
                >
                  Elimina
                </Button>
              </Col>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyCart;
