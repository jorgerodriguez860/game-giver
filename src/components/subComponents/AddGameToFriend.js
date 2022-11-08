import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGameToFriend } from '../../actions/actionGame'

const AddGameToFriend = () => {
    const [gamertag, setGamertag] = useState("")
    const [game, setGame] =useState("")
    const friendList = useSelector(state => state.friends)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addGameToFriend(gamertag, game))

        console.log('Friend list:', friendList)

        setGamertag("")
        setGame("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="gamertag" value={gamertag} onChange={e => setGamertag(e.target.value)} />

                <input type="text" placeholder="game" value={game} onChange={e => setGame(e.target.value)} />

                <input type="submit" value="Add Game" />
            </form>
        </>
    )
}

export default AddGameToFriend