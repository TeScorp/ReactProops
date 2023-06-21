/* eslint-disable no-unused-vars */
// src/Player.js

import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./styles.css";

// const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {  
    const Player = ({
        name = "Unknown",
        team = "Unknown",
        nationality = "Unknown",
        jerseyNumber = "Unknown",
        age = "Unknown",
        imageUrl = "https://example.com/default.jpg",
      }) => {
  return (
    // React bbostrap card that isplay all attributes for each player defined in the players.js & inline style use
    <Card style={{  width:'600px' , height:'100px' , margin:'20px'}}>
      <Card.Img variant="top" src={imageUrl} style={{ width: "100%", height: "400px"}}/>
      <Card.Body style={{backgroundColor:'gray'}}>
        <Card.Title style={{color:'#041c12' , fontWeight:'900'}}>{name}</Card.Title>
        <Card.Text style={{color:'white' , fontWeight:'bold'}}>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageUrl: PropTypes.string
};

export default Player;
