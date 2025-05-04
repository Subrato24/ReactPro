import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();

        if(!response.ok){
          throw new Error('Failed to fetch places!!!');
        }
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(resData.places,position.coords.latitude,position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
        })
      } catch (error) {
        setError({message: error.message || 'Could not fetch places, try again sometime!!!'});
      }
    }
  
    fetchPlaces();
  }, []);

  if(error){
    return <Error title={error} message={error.message} onConfirm= 'true'/>
  }
  

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
