import React from 'react';

export default function Ex2() {

  const handleClick = () => {
    alert(`Clicked!`);
  };

  return (
    <div >
      <h2>Exercise 2: Capturing User Clicks</h2>
        <div className="clickme">
          <button className="click" onClick={handleClick}>
            Click me
          </button>      
        </div>
    </div> 
  ); 
}