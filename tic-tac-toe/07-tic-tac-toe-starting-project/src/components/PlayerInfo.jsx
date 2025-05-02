import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName,setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handelChangeName(event){
        setPlayerName(event.target.value);
    }

    let updatedName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        updatedName = <input type="text" value={playerName} onChange={handelChangeName}/>
    }

    return (
        <li className = {isActive? 'active':undefined}>
            <span className="player">
                {updatedName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}