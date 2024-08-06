import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import dogsAPI from "../../api/dogs-api";

import "./FeaturedSection.css";
import PetCard from "../PetCard/PetCard";
import { Link, useNavigate } from "react-router-dom";

export default function FeaturedSection() {
  const navigate = useNavigate();
  const [featuredDogs, setFeaturedDogs] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await dogsAPI.getAll();
      
      setFeaturedDogs(result.reverse().slice(0,3))
      
    })();
  },[])

  

  return (
    <div className="featured-section">
      <div className="featured-text">
        <h1>Featured Pets</h1>
        <p>Browse the pets that have just been listed</p>
      </div>
      <div className="featured-container">
        {featuredDogs.map((dog) => (
         <Link to={`/petcatalog/${dog._id}`}>
         <div className="featured-pet" >
          <div className="thumbnail-img">
            <img src={dog.imageUrl} />
          </div>
          <div className="pet-details">
            <h3>{dog.name}</h3>
            <p>{dog.breed}</p>
            <p>{dog.age}</p>
            <p>{dog.location}</p>
          </div>
        </div>
        </Link>
        )) }
      </div>
    </div>
  );
}

