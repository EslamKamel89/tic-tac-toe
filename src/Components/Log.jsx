
export default function Log({ gameTurns }) {

    return <ol id="log" >
        {gameTurns.map((value, index) => {
            return <li className={index == 0 ? 'highlighted' : undefined}>{value.player + ' row: ' + value.square.row + ' col: ' + value.square.col}</li>
        })}
    </ol>
}
