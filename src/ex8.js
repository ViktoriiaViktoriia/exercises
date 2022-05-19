import React from 'react';

export default function Ex8() {
  //declaration of the array 
  const Jokes = [
    {
      id: "1",
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit."
    },
    {
      id: "2",
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#."
    }
  ];
  
  return (
    <div>
      <h2>Exercise 8: Rendering JSON</h2>

      <div className="jokesboard">
        {Jokes.map((e) => (      
          <Joke
            key={e.id}
            setup={e.setup}
            punchline={e.punchline} 
          />                           
        ))}
      </div>
    </div> 
  ); 
}

//Custom component
function Joke (props) {
  //returns a div element for the joke setup and punchline
  return (
  <div className="joke">
    <p className ="setup">{props.setup}</p>
    <p className="punchline">{props.punchline}</p> 
  </div>
  );
}