import React from 'react'
import Card from 'react-bootstrap/Card'

const GameCards = ({games}) => {
  return (
    <>
      {games.map(gameObj => {
        return (
          <Card style={{ width: '18rem' }} key={gameObj.id}>
            <Card.Img variant="top" src={gameObj.background_image} />

            <Card.Body>
              <Card.Title>{gameObj.name}</Card.Title>

              <Card.Text>Released: {gameObj.released}</Card.Text>

              <Card.Text>Rating: {gameObj.rating}</Card.Text>
            </Card.Body>
          </Card>
      )})}
    </>
  )
}

export default GameCards