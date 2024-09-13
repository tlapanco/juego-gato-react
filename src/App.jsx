import { GameBoard } from "./components/GameGrid"

const gameGrid = Array(9).fill(null)


function App() {  
  return (
    <main>
      <h1> Gato </h1>   
      <GameBoard gameGrid={gameGrid} />      
    </main>
  )
}

export default App
