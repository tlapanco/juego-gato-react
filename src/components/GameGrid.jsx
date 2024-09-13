import { TTT_TURNS } from "../constants";
import "../styles/GameGrid.css";
import { GameSquare } from "./GameSquare";
import { Turn } from "./Turn";
import { useGame } from "../hooks/useGame";
import { getSavedGame } from "../logic/localStorage";
import { WinnerModal } from "./WinnerModal";



export function GameBoard ({ gameGrid }) {
    
    
    //Checks if there is a game saved 
    //When found saved game, returns saved game board and turn
    //When not found saved game, returns default board and turn
    const {starterBoard, initialTurn} = getSavedGame({
        defaultBoard: gameGrid, 
        defaultTurn: TTT_TURNS.x
    })
    
    //Game hook 
    const { game }  = useGame({
        starterBoard,
        initialTurn,
        turns: TTT_TURNS,
        defaulBoard: gameGrid,
        defaultTurn: TTT_TURNS.x
    }) 

    return (
        <section className="tic-tac-toe">            
            <button className="button-restart" onClick={game.resetGame} >Reiniciar juego</button>

            <section className="game">
                {
                game.board.map((square, index) => {
                    return (
                        <GameSquare                         
                        key={index}
                        index={index}
                        updateBoard={game.updateBoard}                       
                        > 
                        {square}
                        </GameSquare>
                    )
                })
                }
            </section>

            <section className="turns">
                <Turn value= {TTT_TURNS.x} turn={game.turn} />
                <Turn value= {TTT_TURNS.o} turn={game.turn} />
            </section>
            <WinnerModal resetGame={game.resetGame} winner={game.winner}  />
        </section>
    );
};