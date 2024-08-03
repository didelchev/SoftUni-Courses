import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

import './PetDetails.css'
import SinglePetDetails from '../../components/SinglePetDetails/SinglePetDetails';
import Footer from '../../components/Footer/Footer';

// This will be the page showing the information of a pet

export default function PetDetails() {
  const [dog, setDog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getDogs = async () =>{
      const response = await fetch(`http://localhost:3030/jsonstore/dogs/${id}`);
      const data = await response.json();
      // const dogData = Object.values(data);
      setDog(data);
      console.log(data);
    }
    getDogs()
  }, [id])


  return (
    <div className='pet-details-page'>
      <SinglePetDetails
        name={dog.name}
        img = {dog.imageUrl}
        breed = {dog.breed}
        age = {dog.age}
        location = {dog.location}
        color = {dog.color}
        sex = {dog.sex}
        size = {dog.size}
      />
      <Footer/>
    </div>
  )
}

