import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../css/GivingProfile.css'

const GivingProfile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={7}><h1 className='text'>Giving Profile</h1></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={7}><p className='text'>Future feature: see stats about your giving</p></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default GivingProfile