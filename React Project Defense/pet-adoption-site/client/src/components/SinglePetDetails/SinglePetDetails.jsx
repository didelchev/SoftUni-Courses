import React from "react";
import "./SinglePetDetails.css";

export default function SinglePetDetails(singleDog) {
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
          <button className="apply-button">Apply to Adopt</button>
        </div>
      </div>
      <div className="dog-description">
            <h2>Dog Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellendus. Dolore, facere? Officia, hic. Nam totam ea nesciunt sint quaerat fugiat eligendi magni aliquam facere hic dolor distinctio, doloribus itaque, vel cum! Dolor laborum, impedit sapiente similique voluptatum necessitatibus et hic nam eos officiis, tenetur, libero eius repudiandae ratione architecto reiciendis voluptatem praesentium error! Inventore accusantium nobis corporis id a sapiente ut, ratione officia eveniet, minima ipsa dolorem aut provident labore mollitia voluptate placeat! Aperiam dolor assumenda, nesciunt ad illo eligendi, laborum doloribus iure, voluptatum consequuntur eius tenetur eos. Hic velit nesciunt vero suscipit exercitationem sequi libero sed, maxime beatae.</p>
        </div>
    </div>
  );
}
