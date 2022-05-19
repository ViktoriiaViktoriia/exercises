import React, { useState } from 'react';

export default function Ex7() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const sayHello = (firstname, lastname) => {
    alert(`Hello ${firstname} ${lastname}!`);
  };

  
  const handleSubmit = e => {
      e.preventDefault();
      if (!firstname || !lastname) return;
      sayHello(firstname, lastname);
      setFirstName("");
      setLastName("");
  };
  
  return (
    <div >
      <h2>Exercise 7: Building A Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          name="firstname"
          placeholder='First name'
          value={firstname}
          onChange={e => setFirstName(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="input"
          name="lastname"
          placeholder='Last name'
          value={lastname}
          onChange={e => setLastName(e.target.value)}
        />
        <br/>
        <button type="submit" className="btn">
          GREET ME
        </button>
      </form>      
    </div> 
  ); 
}

