import React, { useState } from 'react';

export default function Ex4() {
  //State variable declaration
  const [count, setCount] = useState(0);

  //When the button is clicked the state is updated
  // and number of clicked times are displayed 
  // (every made click is counted)
  return (
    <div>
      <h2>Exercise 4: State and Props</h2>
       
        <div className="clickmecount">
          <p>Button has been clicked: {count} times</p>
          <button className="countclick" onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
    </div> 
  ); 
}