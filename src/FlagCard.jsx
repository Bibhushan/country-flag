// import { Card, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import "./FlagCard.css";

function FlagCard({country, flagImage}){
    return (
        <div className='flag-card'>
            <img src={flagImage} alt={country + " image"} style={{width:'80%', height:'auto'}}/>
            <div>
                <h5>{country}</h5>
            </div>            
        </div>
    )
}

export default function FlagList(){

    const [countries, setCountries] = useState([]);

    const fetchCountries = async()=>{
        try{
            const countryData = await axios.get('https://restcountries.com/v3.1/all');  
            console.log('fetched data for countries: ', countryData.data);          
            setCountries(countryData.data);            
        } 
        catch (e) {
            console.log('Error occured when fetching country data: ', e);
        }

    }

    useEffect(()=>{
        fetchCountries();       
    },[])

    return (
        <>
            <h1 style={{textAlign:'center'}}>Countries and Their Flags</h1>
            <div className="main-page">
                {countries.map((country)=>{return (<FlagCard country={country.name.common} flagImage={country.flags.png}/>)})}
            </div>
        </>
    )
    
}