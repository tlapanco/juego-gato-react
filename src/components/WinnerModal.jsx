export const WinnerModal = ({winner, resetGame, turn }) => {
    if (winner === false) return null
    const winnerTitle = winner === 'draw' ? 'Empate' : 'Ganador'
  
    return (
      <section className='winner-modal'>
        <div className='text'>
          <h2>{winnerTitle}</h2>
  
          <header className='win'>
            {winnerTitle === 'Ganador' ? winner : ''}
          </header>
  
          <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </div>
      </section>
    )

}