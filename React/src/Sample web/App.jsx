import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaderComponent from './component/layout/HeaderComponent'
import FooterComponent from './component/layout/FooterComponent'
import Container from 'react-bootstrap/Container'
import { Router } from 'react-router-dom';
import RouterComponent from './RouterComponent';


function App() {
  return (
    <Container>
      <HeaderComponent/>
      <RouterComponent/>
      <FooterComponent/>
      </Container>
  )
}

export default App
