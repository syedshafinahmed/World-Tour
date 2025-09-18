import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries}) => {
    // console.log(handleVisitedCountries)
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        // if (visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        setVisited(!visited);
        handleVisitedCountries(country);

        // setVisited(visited ? false : true);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "(Large Country)" : "(Small Country)"}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;