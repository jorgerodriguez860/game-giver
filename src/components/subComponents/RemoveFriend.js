import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFriend } from '../../actions/actionFriend'

const RemoveFriend = () => {
    const [gamertag, setGamertag] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(removeFriend(gamertag))

        setGamertag("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="gamertag" value={gamertag} onChange={e => setGamertag(e.target.value)} />

                <input type="submit" value="Remove Friend" />
            </form>
        </>
    )
}

export default RemoveFriend