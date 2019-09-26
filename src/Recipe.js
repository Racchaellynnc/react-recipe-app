import React from 'react';

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className="container">
            <div className="title"> {title} </div>
            <ul>
                {ingredients.map (ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <p>Total calories: {calories}</p>
            <img src={image} alt="recipe" />
        </div>
    );
}

export default Recipe; 