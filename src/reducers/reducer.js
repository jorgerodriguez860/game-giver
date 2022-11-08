const reducer = (state, action) => {
    if(state === undefined) {
        state = {
            friends: [],
            gameVault: []
        }
    }

    switch(action.type) {
        case "ADD_FRIEND":
            return {
                ...state,
                friends: state.friends.concat(action.data)
            }
        
        case "REMOVE_FRIEND":
            return {
                ...state,
                friends: state.friends.filter(friend => {
                    return friend.gamertag !== action.gamertag
                })
            }

        case "FILL_VAULT":
            return {
                ...state,
                gameVault: state.gameVault.concat(action.games)
            }

        // case "ADD_GAME_TO_FRIEND":
        //     const friend = state.friends.filter(friendObj => {
        //         return friendObj.gamertag === action.gamertag
        //     })

        //     console.log('Should be the friend object:', friend[0])

            // const thisGame = state.gameVault.filter(gameObj => {
            //     return gameObj.name === action.game
            // })

        //     console.log('Should be the game object:', thisGame[0])

        //     return {
        //         ...state,
        //         friends: [...state.friends, state.friends.friend[0].name.games.concat(thisGame[0])]
        //     }

        case "ADD_GAME_TO_FRIEND":
            const checkGamerTag = (friend) => {
                const thisGame = state.gameVault.filter(gameObj => {
                    return gameObj.name === action.game
                })

                if(friend.gamertag === action.gamertag) {
                    return friend.games.concat(thisGame[0])
                }
            }
        
            return {
                ...state,
                friends: [...state.friends, state.friends.filter(friend => checkGamerTag(friend))]
            }

        case "REMOVE_GAME_FROM_FRIEND":
            return {
                ...state,
                friends: state.friends.games.filter(game => {
                    return game.name !== action.game
                })
            }

        default:
            return state
    }
}

export default reducer