import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import dogsAPI from "../../api/dogs-api"

import './PetDetails.css'
import SinglePetDetails from '../../components/SinglePetDetails/SinglePetDetails';
import Footer from '../../components/Footer/Footer';


export default function PetDetails() {
  const [dog, setDog] = useState({});
  const { id } = useParams();

  // useEffect(() => {
  //   const getDogs = async () =>{
  //     const response = await fetch(`http://localhost:3030/jsonstore/dogs/${id}`);
  //     const data = await response.json();
  //     // const dogData = Object.values(data);
  //     setDog(data);
  //     console.log(data);
  //   }
  //   getDogs()
  // }, [id])

  useEffect (() => {
    const getDog = async () => {
      const result =  await dogsAPI.getOne(id)
      setDog(result)
    }
    getDog()
  },[id])


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

