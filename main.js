// main.js

/* You don't need these imports
**  import React from 'react';
**  import ReactDOM from 'react-dom';
*/
// React and ReactDOM are already imported in you HTML
// Also import / require are NodeJS thing that doesn't exist in a browser

function tick() {
  const element = (
    <Wrapper>
      <div>
        <h1>Hello, world!</h1>
        <Text>Quer Descobrir os produtos ideais para SUA ROTINA?</Text>
      </div>
    </Wrapper>
  );
  ReactDOM.render(
    element,
    document.getElementById('the_root_of_your_reactJS_component')
  );
}

setInterval(tick, 1000);
