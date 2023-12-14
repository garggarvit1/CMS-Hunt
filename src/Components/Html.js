import React from 'react'
import SideNavbar from './SideNavbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import MatchedContent from './MatchedContent';
import MainFooter from './MainFooter';


const Html = (props) => {
  
  console.log(props.name);
  const location = useLocation();
  const currentRoute = location.pathname;
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams);
  var qpm = queryParams.get("page");
  const qps = queryParams.get("subpage");
  

  return (
    <div>
   
     <Container fluid className='p-0'>
      <Row className='container p-0'>
        <Col className='column1' sm={3}>
          <SideNavbar query={qpm}/>
        </Col>
        <Col className='column2 p-0' sm={9}>
          <MatchedContent  path={qpm} query={qps===null?qpm: qps} />
            
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default Html;