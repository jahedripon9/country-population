import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const CountriesTable = (props) => {
    
    const{name, flags, population, capital, timezones, continent}= props.country
     ||{};

    // console.log(props.country)

    return (
        <div className="col-md-4 ps-4">
        <div className="card mb-3 bg-light p-2 hover-underline-animation1" style={ {"maxWidth": "540px"}}>
    <div className="row g-0">
      <div className="col-md-5">
        <img src={flags} className="img-fluid rounded border border-dark border-4  rounded-pill mt-3  " alt="..."/>
      </div>
      <div className="col-md-7 ">
        <div className="card-body ">
          <h5 className="card-title fs-5 hover-underline-animation "><span>Name:</span> {name}</h5>
          <div className="card-text">
          <h6> <span className="fw-bold">Capital:</span>  {capital}</h6>
          <p> <span className="fw-bold">Continent:</span>  {continent} </p>
          </div>
          <div className="card-text">
          <h5> <span className="fw-bold">Population:</span> {population} </h5>
          <p> <span className="fw-bold">Time Zones:</span>  {timezones} </p>
        </div>
          <button 
          onClick={()=> props.handleAddPopulation(props.country)}
          className="btn btn-outline-success">  
          Add Population <FontAwesomeIcon icon={faPlus} />  </button>
            
        </div>
      </div>
    </div>
  </div>
 </div>
    );
};

export default CountriesTable;