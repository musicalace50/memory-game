export const WinMessage = ({moves}) => {
    return (
        <div className="win-message">
            <h2>🎇Congrats!🎇</h2>
            <p>You won in {moves} moves!</p>
        </div>
    )
}//ends WinMessage