// main.js

/* You don't need these imports
**  import React from 'react';
**  import ReactDOM from 'react-dom';
*/
// React and ReactDOM are already imported in you HTML
// Also import / require are NodeJS thing that doesn't exist in a browser

ReactDOM.render(
  <ContentContextProvider>
    <App />
  </ContentContextProvider>,
  document.getElementById('the_root_of_your_reactJS_component')
);

