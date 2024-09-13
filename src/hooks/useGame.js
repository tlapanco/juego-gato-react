import { useState } from "react";
import { checkGame } from "../logic/board";
import { resetGameStorage, saveGameToStorage } from "../logic/localStorage";

export function useGame ({starterBoard,defaulBoard, defaultTurn, initialTurn, turns}) {   
    

    const [board, setBoard] = useState(starterBoard)

    const [turn, setTurn] = useState(initialTurn) 
    
    const [winner, setWinner] = useState(false)
    
    const resetGame = () => {
        setBoard(defaulBoard)
        setTurn(defaultTurn)
        setWinner(false)
        resetGameStorage()
    }

    const updateBoard = (index) => {
        //If square is already selected or there is a winner no action
        if (board[index] || winner ) return

        //If square is not selected
        
        //Update board
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        //Update winner state
        const newWinner = checkGame(newBoard, turn)
        newWinner !== false ? setWinner(newWinner): setWinner(false)

        //Update turn
        const newTurn = turn === turns.x ? turns.o : turns.x
        setTurn(newTurn)

        //Save game
        saveGameToStorage({ board: newBoard, turn: newTurn})        
    }

    const game = {
        board: board,
        turn: turn,
        winner,
        updateBoard: updateBoard,
        resetGame: resetGame

    }   
    

    return { game }

}