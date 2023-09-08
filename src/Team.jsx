import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)
    const addPlayers = () => {
        setTeam(team + 1);
    }

    const removePlayers = () => {
        setTeam(team - 1)
    }

    const styleTeam = {
        border: '2px solid red',
        margin: '20px',
        padding: '15px',
        borderRedius: '10px'
    }
    return (
        <div style={styleTeam}>
            <h3>Players:{team} </h3>
            <button onClick={addPlayers}>Add</button>
            <button onClick={removePlayers}>Remove</button>
        </div>
    )
}