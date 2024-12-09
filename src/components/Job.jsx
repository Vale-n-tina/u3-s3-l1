import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9} className=" d-flex justify-content-around">
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
      <Button variant="primary">Salva</Button>
    </Col>
  </Row>
);

export default Job;
