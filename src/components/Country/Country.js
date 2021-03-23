import React from 'react';
import './Country.css';

const Country = ({stats}) =>{
    return(
        <div className="country">
            <img src={`https://www.countryflags.io/${stats.CountryCode}/flat/64.png`} alt={stats.Country} ></img>
            <h1>{stats.Country}</h1>
            <div className="describe">
                <p>{`Active : ${stats.Active}`}</p>
                <p>{`Confirmed : ${stats.Confirmed}`}</p>
                <p>{`Deaths : ${stats.Deaths}`}</p>
                <p>{`Recovered : ${stats.Recovered}`}</p>
            </div>
        </div>
    )
}
export default Country;