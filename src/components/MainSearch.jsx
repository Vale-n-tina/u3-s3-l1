import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBooksAction } from "../redux/Actions";
import { useDispatch } from "react-redux";




const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  console.log(jobs)
 const navigate=useNavigate()
 const dispatch=useDispatch()


 const cartArray= useSelector((reduxState)=>{
    return  reduxState.cart.content
      //torna un [] 
  })
 const pageArray= useSelector((reduxState)=>{
    return  reduxState.works.inStocks|| []
     
  })
  


  

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    dispatch(getBooksAction(query)); 
  };

  
  
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Button variant="primary" onClick={()=>{navigate("/cart")}} >carrello <span className="ms-2"> {cartArray.length} </span> </Button>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {pageArray.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
