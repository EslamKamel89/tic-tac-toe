import { useState } from 'react';
export default function Player({ initialName, symbol, onChangeName, ...props }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);
    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, name);
        }
    };
    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }
    return (
        <li {...props}>
            <span className="player">
                {!isEditing && <span className="player-name">{name}</span>}
                {isEditing && <input type='text' value={name} onChange={handleOnChangeName} />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}