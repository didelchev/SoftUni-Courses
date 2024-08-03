import React from "react";
import "./PetCatalog.css";
import { useState, useEffect } from "react";
import PetCard from "../../components/PetCard/PetCard";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import { Link } from 'react-router-dom'
import * as request from "../../api/requester";
import * as dogsAPI from '../../api/dogs-api'





export default function PetCatalog() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  // useEffect(() => {
  //   const getDogs = async () =>{
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:3030/jsonstore/dogs");
  //     const data = await response.json();
  //     const dogData = Object.values(data);
  //     setDogs(dogData);
  //     setIsLoading(false)
  //   }
  //   getDogs()
  // }, []);

  // useEffect(() => {
  //   setIsLoading(true)
  //   dogsAPI.getAll()
  //     .then(result => {
  //       setDogs(result)
  //       setIsLoading(false)
  // })
  // },[])

  useEffect(() => {
    const getDogs = async () => {
      const dogsData = await dogsAPI.getAll()
      setDogs(dogsData)
    }
    getDogs()
  },[])

  return (
    <>
    {isLoading ?  <Loading/> : 
    <>
      <div className="catalog-page">
        {dogs.map((dog) => (
          <Link to={`/petcatalog/${dog._id}`} key ={dog._id} >
          <PetCard 
          img = {dog.imageUrl}
          name = {dog.name}
          breed = {dog.breed}
          age = {dog.age}
          location = {dog.location}/>
        </Link>
        ))}
      </div>
      <Footer/>
    </>}
      </>
  );
}

