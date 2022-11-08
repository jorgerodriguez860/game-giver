import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../css/Support.css'

const Support = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={7}><h1 className='text'>Support</h1></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={8}><p className='text'>Like what you see and have ideas on where the platform could go? Consider supporting the project financially!</p></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={7}><p className='text'>Any amount of financial support is welcome</p></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Support