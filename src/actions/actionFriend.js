export const addFriend = (id, firstName, lastName, gamertag, games) => {
    return {
        type: "ADD_FRIEND",
        data: {
            id,
            firstName,
            lastName,
            gamertag,
            games
        }
    }
}

export const removeFriend = (gamertag) => {
    return {
        type: "REMOVE_FRIEND",
        gamertag
    }
}