import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import '../../css/FriendInfo.css'

const FriendInfo = () => {
  const friends = useSelector(state => state.friends)

  return (
    <>
      <ul>
        {friends.map(friend => {
          return (
            <li key={friend.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{friend.firstName} {friend.lastName}</Card.Title>

                  <Card.Subtitle className="mb-2 text-muted">{friend.gamertag}</Card.Subtitle>
                </Card.Body>
              </Card>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default FriendInfo