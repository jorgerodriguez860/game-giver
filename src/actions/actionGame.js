export const fillVault = (data) => {
    return {
        type: "FILL_VAULT",
        games: data
    }
}

export const addGameToFriend = (gamertag, game) => {
    return {
        type: "ADD_GAME_TO_FRIEND",
        gamertag,
        game
    }
}

export const removeGameFromFriend = (gamertag, game) => {
    return {
        type: "REMOVE_GAME_FROM_FRIEND",
        gamertag,
        game
    }
}