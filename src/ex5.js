import React from 'react';

//Functional component Ex5
export default function Ex5() {

  //Farmpets array declaration
 const farmpets = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  
  return (
    <div>
      <h2>Exercise 5: Mapping Through A List And Rendering</h2> 
      <p>The map() method was used within a React component for rendering a list of items.</p> 
      <p>It iterates over the list and takes each item to add a marker to it and then returns the updated state.</p>  
        
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
    <div>
      {animals.map((animal, index) => (
        <ul>
            <ListItem
              key={animal.toString()}
              index = {index}
              value={animal} 
            />
        </ul>                      
      ))}
    </div>
  );
}

//Functional component ListItem
//Value as props of the ListItem component
function ListItem(props) {
  //returns a li element for the item value
  return <li className="farmpets">{props.value}</li>;
}

