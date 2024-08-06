import React from "react";
import "./SinglePetDetails.css";
import { Link, useParams } from "react-router-dom";
import { useGetOneDogs } from "../../hooks/useDogs";
import { useAuthContext } from "../../contexts/AuthContext";

export default function SinglePetDetails(singleDog) {
  const { dogId } = useParams();
  console.log(dogId);
  
  const [dog] = useGetOneDogs(dogId);
  const {userId} = useAuthContext();

  const isOwner = userId === dog._ownerId;





  return (
    <div className="dog-details-page">
      <div className="dog-card">
        <div className="border">
          <div className="image-container">
            <img
              src={singleDog.img}
              className="blur"
            />
            <img
              src={singleDog.img}
              alt={singleDog.name}
            />
          </div>
        </div>
        <div className="dog-info">
          <h2>{singleDog.name}</h2>
          <div className="about">
            <h3>About</h3>
            <div className="list-container">
              <div className="list-item">
                <div>Breed:</div>
                <div>{singleDog.breed}</div>
              </div>
              <div className="list-item">
                <div>Color: </div>
                <div>{singleDog.color}</div>
              </div>
              <div className="list-item">
                <div>Age: </div>
                <div>{singleDog.age}</div>
              </div>
              <div className="list-item">
                <div>Sex: </div>
                <div>{singleDog.sex}</div>
              </div>
              <div className="list-item">
                <div>Size: </div>
                <div>{singleDog.size}</div>
              </div>
              <div className="list-item">
                <div>Location: </div>
                <div>{singleDog.location}</div>
              </div>
            </div>
          </div>

        {isOwner && (<div className="buttons">
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
  );
}
