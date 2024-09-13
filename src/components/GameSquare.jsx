
// Returns a single square of the game board
export const GameSquare = ({children, index, updateBoard }) => {
    const handleClick = ()=>{
        updateBoard(index)
    }

    return (        
        <>
        <div onClick={handleClick} className="square">
            { children }
        </div>        
        </>
        
    );
};
