
export default function Log({ gameTurns }) {

    return <ol id="log" >
        {gameTurns.map((value, index) => {
            return <li
                key={`Col:${value.square.col},Row:${value.square.row},index:${index}`}
                className={index == 0 ? 'highlighted' : undefined}>
                {`Player ${value.player} Selected{ ROW: ${value.square.row}, COL: ${value.square.col} }`}
            </li>
        })}
    </ol>
}
