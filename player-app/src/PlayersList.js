/* eslint-disable no-lone-blocks */
// src/PlayersList.js

import React from "react";
import Player from "./Player"; // player component importatation
import players from "./players";


const PlayersList = () => {
  return (
    <div style={{display:'flex' , justifyContent:'space-around' , alignItems:'center'}}>
      {players.map((player, index) => (   //mapping function
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;