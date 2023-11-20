import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar expand="lg" className="" style={{backgroundColor:'#262a34'}}>
      <Container fluid className='ms-5'>
        <Navbar.Brand href="#"><img src="https://bestforandroid.com/wp-content/uploads/2021/03/Fmovies.png" alt="" width={'150px'}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll 
          >
            <Nav.Link href="#action1" className='ms-4' style={{color:'#929ca5'}}>Home</Nav.Link>
            <Nav.Link href="#action2" className='ms-2' style={{color:'#929ca5'}}>Genre</Nav.Link>
            <Nav.Link href="#action2" className='ms-2' style={{color:'#929ca5'}}>Movies</Nav.Link>
            <Nav.Link href="#action2" className='ms-2' style={{color:'#929ca5'}}>Popular Movies</Nav.Link>
            <Nav.Link href="#action2" className='ms-2' style={{color:'#929ca5'}}>TV-Series</Nav.Link>
            <Nav.Link href="#action2" className='ms-2' style={{color:'#929ca5'}}>Top IMDB</Nav.Link>
            <Nav.Link href="#action2" className='ms-2' style={{color:'#929ca5'}}>A-Z List</Nav.Link>
            <Nav.Link href="#action2" className='ms-3' style={{color:'#929ca5'}}>Year</Nav.Link>
          
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex" style={{marginLeft:'45px',width:'450px'}}>
            {/* <Form.Control
              type="search"
              placeholder="Enter Keywords here"
              className="me-5"
              aria-label="Search"
              // style={{background:'transparent',color:'white'}}
              
            /> */}
            <nav style={{width:'450px'}}>
              <input type="text" placeholder="Enter Keyword here" style={{ backgroundColor: 'rgba(38, 42, 52, 0.7)',border: '1px solid #929ca5',padding: '5px',borderRadius:'3px', width:'310px'}}/>
            </nav>
            
            <Button variant="btn text-light" className='me-5' style={{backgroundColor:'#00acc1'}}>LOGIN</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header