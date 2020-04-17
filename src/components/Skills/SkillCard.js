import React from 'react'

const SkillCard = ({ skillname, skillUrl }) => {
    // recieves a skill svg or png, name, 
    return (
        <div className="skill-card">
            <img src={skillUrl} alt="some technicall skill"/>
            <em>{skillname}</em>
        </div>
    )
}

export default SkillCard;
