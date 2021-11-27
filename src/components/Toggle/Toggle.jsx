import React from 'react';
import './toggle.css';
import sun from "../../img/sun.png";
import moon from "../../img/moon.png";
import { useContext } from 'react';
import { ThemeContext } from '../../Context';

const Toggle = () => {

    const theme = useContext(ThemeContext)
    
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"});
    };

    return (
        <div className="toggle">
            <img src={sun} alt="" className="t-icon" />
            <img src={moon} alt="" className="t-icon" />
            <div 
              className="t-btn" 
              onClick={handleClick}
              style={{ left: theme.state.darkMode ? 0 : 25 }}
            ></div>
        </div>
    )
}

export default Toggle;