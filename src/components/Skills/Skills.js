import React from 'react'
import SkillsCard from './SkillCard';
import { iconDictionary } from '../../iconDictionary';
import './Skills.scss';

const Skills = ({ skills }) => {
    return (
        <div className="skills">
            <ul className="skills-container">
                { skills && skills.map(({ skillname }) => {
                    const skillUrl = iconDictionary[skillname];
                    return <SkillsCard skillname={skillname} skillUrl={skillUrl} />
                }) }
            </ul>
        </div>
    )
}

export default Skills;