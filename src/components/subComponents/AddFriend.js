import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFriend } from '../../actions/actionFriend'
import { v4 as uuidv4 } from 'uuid'

const AddFriend = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gamertag, setGamertag] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addFriend(uuidv4(), firstName, lastName, gamertag, []))

        setFirstName("")
        setLastName("")
        setGamertag("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />

                <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />

                <input type="text" placeholder="gamertag" value={gamertag} onChange={e => setGamertag(e.target.value)} />

                <input type="submit" value="Add Friend" />
            </form>
        </>
    )
}

export default AddFriend