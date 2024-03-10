import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border:'2px dashed orange', 
        borderRadius: '20px', 
        padding:'20px',
        margin: '20px'
    }

    return (
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={handleAdd}>Add Player</button> <br /> <br />
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}