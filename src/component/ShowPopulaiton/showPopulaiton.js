import React from 'react';
import './showPopulaiton.css'

const showPopulaiton = (props) => {

    const {addPopulation}=props ||{}

    const totalReaducer=(prevPopulation,currentPopulation)=>prevPopulation+currentPopulation.population 

    const totalPopulation = addPopulation.reduce(totalReaducer, 0)


// console.log(addPopulation)
    return (
        <div className="population-box border border-5 border-dark">
            <h4 className="hover-underline-animation">Population Sarvy</h4>
            <h5>Add Country: {addPopulation.length}</h5>
            <h5 className="hover-underline-animation text-dark">Selected Country Population: {totalPopulation}</h5>
            <ul> <h4 className="hover-underline-animation ">Selected Country</h4>
                {
                    addPopulation.map(addPopulation=> 
                    <li key={addPopulation.alpha3Code}
                    >{addPopulation.name}
                    </li>) 
                }
            </ul>
        </div>
        
    );
};

export default showPopulaiton;