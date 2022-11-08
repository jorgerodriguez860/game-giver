import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeGameFromFriend } from '../../actions/actionGame'

const RemoveGameFromFriend = () => {
    const [gamertag, setGamertag] = useState("")
    const [game, setGame] =useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(removeGameFromFriend(gamertag, game))

        setGamertag("")
        setGame("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="gamertag" value={gamertag} onChange={e => setGamertag(e.target.value)} />

                <input type="text" placeholder="game" value={game} onChange={e => setGame(e.target.value)} />

                <input type="submit" value="Remove Game" />
            </form>
        </>
    )
}

export default RemoveGameFromFriend