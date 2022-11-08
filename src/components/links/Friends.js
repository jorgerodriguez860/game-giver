import React from 'react'
import AddFriend from '../subComponents/AddFriend'
import RemoveFriend from '../subComponents/RemoveFriend'
import AddGameToFriends from '../subComponents/AddGameToFriend'
import RemoveGameFromFriend from '../subComponents/RemoveGameFromFriend'
import FriendInfo from '../subComponents/FriendInfo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../css/Friends.css'

const Friends = () => {
  return (
    <>
      <Container>
        <Row id='row1'>
          <Col></Col>
          <Col xs={7}><h1 className='text'>Friends List</h1></Col>
          <Col></Col>
        </Row>

        <Row id='row2'>
          <Col></Col>
          <Col xs={7}><p className='text'>Add another friend?</p></Col>
          <Col></Col>
        </Row>

        <Row id='row3'>
          <Col></Col>
          <Col xs={8}><AddFriend /></Col>
          <Col></Col>
        </Row>

        <Row id='row4'>
          <Col></Col>
          <Col xs={7}><p className='text'>Need to scrub your list?</p></Col>
          <Col></Col>
        </Row>

        <Row id='row5'>
          <Col></Col>
          <Col><RemoveFriend /></Col>
          <Col></Col>
        </Row>

        <Row id='row6'>
          <Col></Col>
          <Col xs={7}><p className='text'>Add games to gift to your friends!</p></Col>
          <Col></Col>
        </Row>

        <Row id='row7'>
          <Col></Col>
          <Col><AddGameToFriends /></Col>
          <Col></Col>
        </Row>

        <Row id='row8'>
          <Col></Col>
          <Col xs={7}><p className='text'>Need to scrub a game from a friend's gift list?</p></Col>
          <Col></Col>
        </Row>

        <Row id='row9'>
          <Col></Col>
          <Col><RemoveGameFromFriend /></Col>
          <Col></Col>
        </Row>

        <Row id='row10'>
          <Col></Col>
          <Col xs={7}><FriendInfo /></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Friends