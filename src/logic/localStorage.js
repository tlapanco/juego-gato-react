export function saveGameToStorage ({ board, turn }) {
    //Save game board to local storage
    window.localStorage.setItem('board', JSON.stringify(board))
    //Save game player turn to local storage
    window.localStorage.setItem('turn', turn)
  }
  
export function resetGameStorage () {
    //Remove game board from local storage
    window.localStorage.removeItem('board')
    //Remove game turn from local storage
    window.localStorage.removeItem('turn')
}

//Checks if there is a saved game in local storage
export function getSavedGame ({defaultBoard, defaultTurn}) {
    //if there is a saved game, return the board and turn from local storage
    const board = JSON.parse(window.localStorage.getItem('board'))    
    const turn = window.localStorage.getItem('turn')
    // if there is no saved game, return the default board and turn
    if (!board || !turn) {
        return {
            starterBoard: defaultBoard,
            initialTurn: defaultTurn
        }
    }
    //if there is a saved game, return the board and turn from local storage  
    return {
        starterBoard: board,
        initialTurn: turn 
    }
}