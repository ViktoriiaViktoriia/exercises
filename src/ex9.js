import React, { useState, useEffect} from 'react';


export default function Ex9() {
  //Initial state of the items 
  //Using useState hook
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  //useEffect hook
  useEffect(() => {
    fetch(`https://random-data-api.com/api/users/random_user?size=10`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


 //returns updated state of the users
  const refresh = (e) => {
    e.preventDefault();
    fetch(`https://random-data-api.com/api/users/random_user?size=10`+e.target.value)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((users) => {
        setUsers(users);
        //setError(null);
      })
      .catch((err) => {
        setError(err.message);
        //setUsers(null);
      })
      .finally(() => {
        setLoading(false);
      });

  }

  // If the users updates, the effect will run again
  useEffect(() => {
    if(refresh) {
      console.log("useEffect");
      //setUsers(users)
    }
  },[users]);

  
  return (
    
    //when the button is clicked the fetch is run
    //refresh function is passed to the component
    //window.location.reload(false)
    <div>
      <h2>Exercise 9: Working with an API</h2>
      <br/>
      <button type="submit" className="btn" onClick={refresh}> 
        FETCH RANDOM
      </button>
      <br/>

      {loading && <div>Loading...</div>}
      {error && (
        <div>{`There is an error fetching the post data - ${error}`}</div>
      )}
      <div className='users'>
        {users && users.map(({id, avatar, first_name, last_name, employment:title}) => (
          <User
            key={id}
            avatar={avatar}
            first_name={first_name}
            last_name={last_name}
            occupation={title}
          />      
        ))}  
      </div>
      
    </div> 
  ); 
}

//Functional component User
//id, avatar,first name, lastname and
//employment title are as props of the User component
function User(props) {
  //returns div elements for the user profile 
  //single user profile is implemented as a card with flip effect
  return (
    <div className="user-profilecard">
      <div className="profilecard-inner">
        <div className="flip-profilecard-front">
          <img className ="avatar" alt="avatar" src={props.avatar}/>
          <div className="user-info">
            <p className="name">{props.first_name} {props.last_name}</p>
            <p className="occupation">{props.occupation.title}</p> 
          </div>
        </div>
        <div className="flip-profilecard-back">
          <p>More information here</p>
        </div>
      </div>
   </div>
  
  );
}