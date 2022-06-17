import { Row, Col, Card } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer.js'
import ExperienceNavbar from '../components/ExperienceNavbar.js';
import Header from '../components/Header.js';

const ExperienceGridCard = () =>  {
  const [searchParams, setSearchParams]= useSearchParams ()
  const search= searchParams.get('search') || ''
  const [card, setCard] = useState([]);
  const [filterLugar, setFilterLugar] = useState([]);

  const handleChange = event => {
    event.target.value;
  }

  useEffect(() => {
    axios({
      url: "http://localhost:3000/econoExperience",
    })
      .then((response) => {
        console.log(search)
        const filterArray=response.data.filter(element=>{
          if (search!='')
                   return element.nombre.toLowerCase().includes(search.toLocaleLowerCase())
         return element })
         
        setCard(filterArray)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  


  return (
    <div>
       <Header />
   
    <div className="ExperienceHome">
    <div>
    <h1 className="ExperienceTitle">Experiencias en el área de Barcelona</h1>
    </div>
   
    
    <ExperienceNavbar />
    </div>
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4" >       
    {card.map(item =>(  
      <Col key={item.id}>
        <Card style={{cursor : 'pointer'}}>
          <Card.Img className='cardImageExper' variant="top" src={item.imagen} />
          <Card.Body>
          <Card.ImgOverlay>
            <Card.Title>{item.nombre}</Card.Title>
          </Card.ImgOverlay>
            <Row>
              <Col><div className='tagCard' ><Card.Text >{item.ubicacion}</Card.Text></div></Col>
              <Col><div className='tagCard'><Card.Text>{item.transporte}</Card.Text></div></Col>
              <Col><div className='tagCard'><Card.Text>{item.duracionHoras}</Card.Text></div></Col>
            </Row>
                <Card.Text>{item.duracion}</Card.Text>
              <Row>
              <Col>
                <Card.Text>{item.precio}</Card.Text>
              </Col>
              <Col>
                <button className="buttonExp">Reservar</button>
              </Col>
              </Row>
          </Card.Body>
        </Card>
      </Col>
 
  ))}
     
      </Row>
    </Container>
    
    <Footer />
    </div>
    
  )
}




export default ExperienceGridCard;

