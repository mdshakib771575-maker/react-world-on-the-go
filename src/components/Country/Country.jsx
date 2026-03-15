import React, { useState } from 'react';
import './Country.css'

const Country = ({ country,handaleVisitedCountries,handalVisitedFlags }) => {
    const [Visited, setVisited] = useState(false)
    // console.log(country)
    // console.log(handaleVisitedCountries)

    const handaleVisited = () => {
        // console.log('clicked')
        //basic way
        // if(Visited){
        //   setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        // way 2 turnari
        // setVisited(Visited ? false : true)

        //way 3
        setVisited(!Visited)
        handaleVisitedCountries(country)
    }
    return (
        // <div className={`country ${ Visited ? 'country-visited' : 'Not-visited'}`}>
         <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <h3>Capital : {country.capital.capital}</h3>
            <h3>Population : {country.population.population}</h3>
            <h3>Area : {country.area.area} {country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}</h3>
            <button onClick={ handaleVisited
            //way number 1.
            // handaleVisited এর ভিতরে handalVisitedCountries() কল করা 
            //way number 2
            //  ()=>{ handaleVisited; handaleVisitedCountries()}
            } className='btn'>{Visited ? "Visited" : "Not Visited"}</button>
            <button onClick={()=>{
                handalVisitedFlags(country.flags?.flags?.png)
            }} className='btn'>Add Visited flag</button>
        </div>
    );
};

export default Country;