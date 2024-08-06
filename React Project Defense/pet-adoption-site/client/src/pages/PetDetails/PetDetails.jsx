import React, {useState, useEffect} from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import dogsAPI from "../../api/dogs-api"
import { useGetOneDogs } from '../../hooks/useDogs';

import './PetDetails.css'
import Footer from '../../components/Footer/Footer';
import { useAuthContext } from '../../contexts/AuthContext';


export default function PetDetails() {
  const { id } = useParams();
  const [dog, setDog] = useGetOneDogs(id)
  const navigate = useNavigate();
  const {userId} = useAuthContext();

  const isOwner = userId === dog._ownerId;

  const dogDeletHandler = async () => {
    const isConfirmed = confirm(`Are you sure you want to delete ${dog.name} ?`)

     if(!isConfirmed){
      return
     }

    try {
      await dogsAPI.remove(id);
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
  }

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
          <Link to={`/petcatalog/${id}/edit`}><button>Edit</button></Link>
          <button onClick={dogDeletHandler}>Delete</button>
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










