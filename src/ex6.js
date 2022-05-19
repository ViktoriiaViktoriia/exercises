//Emojis resource: https://emojidb.org/
import React from 'react';

export default function Ex6() {

    //Farmpets array declaration
    const farmpets = [
      {
        emoji: '🐶 ',
        name:'dog'
      },
      {
        emoji: '😺 ', 
        name:'cat'
      },
      {
        emoji: '🐔 ', 
        name:'chicken'
      }, 
      {
        emoji: '🐮 ', 
        name:'cow'
      }, 
      {
        emoji: '🐑 ', 
        name:'sheep'
      }, 
      {
        emoji: '🐴 ', 
        name:'horse'
      }
    ];
  
  return (
    <div >
      <h2>Exercise 6: Mapping Through A List And Rendering (With A Custom Component)</h2>
      
      <div className="farmpetslist">
        <AnimalList
          animals = {farmpets}
      /> 
      </div>
    </div> 
  ); 
}

//Functional component AnimalList
function AnimalList(props) {
  const animals = props.animals;

  //Returns the list of animals after mapping and rendering
  //AnimalList component renders the ListItem
  return (
    <div className="animals">
      
      {animals.map((animal, index) => (      
        <ListItem
          key={index}
          emoji={animal.emoji}
          name={animal.name} 
        />                           
      ))}
    </div>
  );
}

//Functional component ListItem
//Emoji and name are as props of the ListItem component
function ListItem(props) {
  //returns a div element for the item emoji and name
  return (
  <div className="farmpets"> {props.emoji} {props.name}</div>
  );
}