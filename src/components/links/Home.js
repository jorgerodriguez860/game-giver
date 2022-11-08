import React from 'react'
import { useSelector } from 'react-redux'
import AddFriend from '../subComponents/AddFriend'
import GameCards from '../subComponents/GameCards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../css/Home.css'

const Home = () => {
  const gameList = useSelector(state => state.gameVault)

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={7}><h1 className='text'>Welcome to Game Giver</h1></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={7}><h4 id='subheader' className='text'>Your assistant in giving the best videogame gifts to your friends</h4></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={7}><h3 className='text'>How to participate</h3></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={5}>
            <ul>
              <li className='text'>Make a list of your gamer friends</li>
              <li className='text'>Search for games you want to gift each friend</li>
              <li className='text'>Add the games to their profiles</li>
              <li className='text'>Take joy in the gift of giving a game your friend will love!</li>
            </ul>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={7}><h3 className='text'>Get started now</h3></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={7}><p className='text'>You can start adding friends below, then visit your friends list to add games to their profiles</p></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={8}><AddFriend /></Col>
          <Col></Col>
        </Row>
      </Container>

      <Row>
        <Col></Col>
        <Col xs={7}><p className='text'>Or take a look at some of the hottest games from previous years for inspiration</p></Col>
        <Col></Col>
      </Row>

      <Row className="gameCards">
          <GameCards games={gameList} />
      </Row>
    </>
  )
}

export default Home