import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const [VisitedCountries,setVisitedCountries] = useState([])
    const  [VisitedFlags , setVisitedflags] = useState([])
    const countries = countriesData.countries;
    const handaleVisitedCountries = (country)=>{
        //  console.log('click handaleVisitedCounties' ,country)
        const newVisitedCountry = [...VisitedCountries,country]
        // console.log(newVisitedCountry)
        setVisitedCountries(newVisitedCountry)
    }
    const handalVisitedFlags = (flag)=>{
        // console.log('hello',flag);
        const newVisitedFlags = [...VisitedFlags,flag];
        setVisitedflags(newVisitedFlags)
    }
    // console.log(countries)
    return (
        <div>
            <h1>In The Countres</h1>
            <h2>Total Vesited Country : {VisitedCountries.length}</h2>
            <h3>total visited flags :{VisitedFlags.length}</h3>
            <div className='visited-flag-container'>
                {
                    VisitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
            
            <ol>
                {
                    VisitedCountries.map(country => <li
                    key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
               countries.map(country =><Country key={country.cca3.cca3} country={country} handaleVisitedCountries={handaleVisitedCountries} handalVisitedFlags={handalVisitedFlags} ></Country>)   
            }
            </div>
        </div>
    );
};

export default Countries;