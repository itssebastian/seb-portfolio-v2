import React,{useContext} from 'react';
import basketballPlay from '../../assets/img/basketball.jpg'

import { ThemeContext } from '../../contexts/ThemeContext';
import '../Experience/Experience.css'

import ExperienceCard from '../Experience/ExperienceCard';
import { Height } from '@material-ui/icons';

function Hobbies() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
             <div className="experience-image">
                     <img style={{borderRadius:"5px"}} src={basketballPlay} alt="" />
                 </div>
                <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Hobbies</h1>
                    <p>I am very fond of playing outdoor sports. I play basketball at sunday evening it helps to keep body energtic and stamina</p>
                 </div>
             </div>
        </div>
    )
}

export default Hobbies
