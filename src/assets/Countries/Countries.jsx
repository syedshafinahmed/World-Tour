import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) =>{
        console.log("dhur", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries); 
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>
            <h2>Visited Countries: {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;