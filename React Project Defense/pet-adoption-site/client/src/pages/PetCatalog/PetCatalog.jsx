import React from "react";
import "./PetCatalog.css";
import PetCard from "../../components/PetCard/PetCard";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";


export default function PetCatalog() {
  const [dogs, setDogs] = useState([]);

  async function getDogs() {
    let response = await fetch("http://localhost:3030/jsonstore/dogs")
    let data = await response.json();
    let games = Object.values(data)
    setDogs(games);
    console.log(games);
    
  }


  useEffect(()=>{
    getDogs()
  },[])

  

  return (
    <>
    <div className="catalog-page">
      {dogs.map((dog) => (
        <div className="card-container" key={dog._id}>
          <img src={dog.imageUrl} alt={dog.name}  />
          <div className="pet-details">
            <h3>{dog.name}</h3>
            <p>Age: {dog.age} years old</p>
            <p><span><FontAwesomeIcon icon={faLocationDot}/></span>Location: {dog.location}</p>
          </div>
        </div>
      ))}

    </div>
    <Footer>  </Footer>
    </>
  );
}


{/* <div className='card-container'>
        <img src={} alt="" />
        <div className="pet-details">
            <h3>{}</h3>
            <p>Age: {}</p>
            <p><span><FontAwesomeIcon icon={faLocationDot}/></span>Location: {}</p>
        </div>
    </div> */}



    // {!dogs ? (
    //   <h1>Loading ...</h1>
    // ) : (
    //   <>
    //     <div className="catalog-page">
    //       {dogs.map((dog) => (
    //           <div className="card-container" key={dog.id}>
    //             {/* <img src={dog.image.url} alt={dog.name} /> */}
    //             <h3>{dog.name}</h3>
    //             <p>Bred for: {dog.bred_for}</p>
    //             <p><span><FontAwesomeIcon icon={faLocationDot}/></span>Location: {dog.origin}</p>
    //           </div>
    //       ))}
    //     </div>
    //   </>
    // )}