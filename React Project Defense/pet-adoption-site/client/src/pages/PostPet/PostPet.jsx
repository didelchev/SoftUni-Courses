import React from "react";
import "./PostPet.css";

const PostPet = () => {
  return (
    <div className="page">
      <div className="image"></div>
      <div className="post-pet-form-container">
        <h1>List a Pet for Adoption</h1>
        <form className="post-pet-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Breed</label>
            <input type="text" id="breed" required />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input type="text" id="color" required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" required />
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sex</label>
            <select id="sex" required>
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="size">Size</label>
            <select id="size" required>
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="file" id="image" required />
          </div>
          <button type="submit" className="submit-button">
            Post Pet
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostPet;
