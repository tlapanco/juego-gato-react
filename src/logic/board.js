import { WINNER_COMBOS } from "../constants"

//Checks if there is a winner acording to the winner combos
function checkWinner(board) {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            //When winner found returns winner
            return board[a]
        }
    }
    //When no winner returns null
    return null
}

//Checks if there are no more moves then it is a draw
function checkDraw (board) {
    //When draw returns true
    return board.every((square) => square !== null)
}

export function checkGame(game, turn)  {
    //if found a winner or draw return the winner
    if (checkWinner(game)) return turn
    if (checkDraw(game)) return 'draw'
    return false
}

