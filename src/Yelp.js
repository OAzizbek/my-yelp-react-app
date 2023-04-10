import React, { useState } from 'react';
import { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import './Yelp.css';

function Yelp() {
  // Define state variables to hold restaurant data
  const [restaurant, setRestaurant] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object to hold the form input data
    const newRestaurant = {
      name: restaurant,
      description: description,
      city: city
    };
    console.log(newRestaurant); // Log the form input data as an object to the console

    // Add the new restaurant to the list of restaurants using the spread operator
    setRestaurants([...restaurants, newRestaurant]);

    // Clear the form input fields after submission
    setRestaurant('');
    setDescription('');
    setCity('');
  };

  // Handle restaurant deletion
  const handleDelete = (index) => {
    // Make a copy of the restaurants array using the spread operator
    const updatedRestaurants = [...restaurants];

    // Remove the restaurant at the specified index using the splice method
    updatedRestaurants.splice(index, 1);

    // Update the state with the new list of restaurants
    setRestaurants(updatedRestaurants);
  };

  return (
    <div className="yelp">
      {/* Display a form to add a new restaurant */}
      <form onSubmit={handleSubmit}>
        <label>
          Restaurant:
          <input
            type="text"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="button">
          Create
        </button>
      </form>
      {/* Display the list of restaurants */}
      <div className="card-type">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="card-name">
            <h2 className="names">{restaurant.name}</h2>
            <p className="box-text">{restaurant.description}</p>
            <p className="box-content">{restaurant.city}</p>
            <button onClick={() => handleDelete(index)} className="none">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Yelp;