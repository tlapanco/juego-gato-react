// Returns a single square of the game current turn
export const Turn = ({ turn, value }) => {
    const is_selected = turn === value ? 'selected': ''
    return (
        <div className={`turn ${is_selected}`}>
            { value }
        </div>
    )


}