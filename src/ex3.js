import React from 'react';

export default function Ex3() {

  const buttons = [{value: 1}, {value: 2}, {value: 3}];

  return (
    <div >
      <h2>Exercise 3: Custom Component</h2>

      <div className="clickmybuttons">
      
        {buttons.map((button, index) => (      
          <Button
            key={index}
            value={button.value}
          />                           
        ))}
      </div>    
    </div> 
  ); 
}

function Button(props) {

  const handleClick = () => {
    alert(`You clicked on Button ${props.value}`);
  };
  //returns a button element for the item value
  return (
    <button className="clickbuttons" onClick={handleClick}> Button {props.value}</button>
  );
}