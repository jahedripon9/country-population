import React, { useEffect, useState } from 'react';
import CountriesTable from '../CountriesTable/CountriesTable';
import ShowPopulaiton from '../ShowPopulaiton/showPopulaiton';

const CountriesInfo = () => {

    const[countricInfo, setCountricInfo] = useState([])

    const[addPopulation, setAddPopulation] = useState([])

    const handleAddPopulation =(population)=>{

       const newAddPopulation=[...addPopulation,population]
        console.log(newAddPopulation)
       setAddPopulation(newAddPopulation)
    //    console.log(setAddPopulation)
    } 

    useEffect(()=>{
        fetch('country.json')
        .then(res => res.json())
        .then(data => setCountricInfo(data))
    },[])


    return (
        <div>
            <div className="row">
            <div className="col-md-9">

                <div className="row">
                {
                    countricInfo.map(country=> <CountriesTable
                    country={country} 
                    key={country.name}
                    handleAddPopulation={handleAddPopulation}
                    >

                    </CountriesTable>)
                }
                </div>

                </div>
                <div className="col-md-3">
                <ShowPopulaiton
                addPopulation={addPopulation}
                >
                
                </ShowPopulaiton>
                </div>
             </div>
                            
             </div>
                    );
                };

export default CountriesInfo;