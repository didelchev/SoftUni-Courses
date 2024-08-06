import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import dogsAPI from "../../api/dogs-api"
import { useGetOneDogs } from '../../hooks/useDogs';

import './PetDetails.css'
import SinglePetDetails from '../../components/SinglePetDetails/SinglePetDetails';
import Footer from '../../components/Footer/Footer';
import { useAuthContext } from '../../contexts/AuthContext';


export default function PetDetails() {
  const { id } = useParams();
  const [dog, setDog] = useGetOneDogs(id)

  const {userId} = useAuthContext();

  const isOwner = userId === dog._ownerId;

  console.log(userId);
  

  return (
    <div className="dog-details-page">
      <div className="dog-card">
        <div className="border">
          <div className="image-container">
            <img
              src={dog.imageUrl}
              className="blur"
            />
            <img
              src={dog.imageUrl}
              alt={dog.name}
            />
          </div>
        </div>
        <div className="dog-info">
          <h2>{dog.name}</h2>
          <div className="about">
            <h3>About</h3>
            <div className="list-container">
              <div className="list-item">
                <div>Breed:</div>
                <div>{dog.breed}</div>
              </div>
              <div className="list-item">
                <div>Color: </div>
                <div>{dog.color}</div>
              </div>
              <div className="list-item">
                <div>Age: </div>
                <div>{dog.age}</div>
              </div>
              <div className="list-item">
                <div>Sex: </div>
                <div>{dog.sex}</div>
              </div>
              <div className="list-item">
                <div>Size: </div>
                <div>{dog.size}</div>
              </div>
              <div className="list-item">
                <div>Location: </div>
                <div>{dog.location}</div>
              </div>
            </div>
          </div>

        {isOwner &&(<div className="buttons">
          <button><Link>Edit</Link></button>
          <button><Link>Delete</Link></button>
        </div>)}

        </div>
      </div>
      <div className="dog-description">
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellendus. Dolore, facere? Officia, hic. Nam totam ea nesciunt sint quaerat fugiat eligendi magni aliquam facere hic dolor distinctio, doloribus itaque, vel cum! Dolor laborum, impedit sapiente similique voluptatum necessitatibus et hic nam eos officiis, tenetur, libero eius repudiandae ratione architecto reiciendis voluptatem praesentium error! Inventore accusantium nobis corporis id a sapiente ut, ratione officia eveniet, minima ipsa dolorem aut provident labore mollitia voluptate placeat! Aperiam dolor assumenda, nesciunt ad illo eligendi, laborum doloribus iure, voluptatum consequuntur eius tenetur eos. Hic velit nesciunt vero suscipit exercitationem sequi libero sed, maxime beatae.</p>
        </div>
    </div>
    
  )
}










{/* <div className='pet-details-page'>
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
    </div> */}