// main.js

/* You don't need these imports
**  import React from 'react';
**  import ReactDOM from 'react-dom';
*/
// React and ReactDOM are already imported in you HTML
// Also import / require are NodeJS thing that doesn't exist in a browser

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <Test />
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('the_root_of_your_reactJS_component')
  );
}

setInterval(tick, 1000);
