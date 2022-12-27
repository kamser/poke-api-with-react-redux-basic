import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const CustomFooter = () => {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container>
                <Navbar.Brand>Created by KAMS.</Navbar.Brand>
            </Container>
        </Navbar>
       
    </div>
  );
}

export default CustomFooter;