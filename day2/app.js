import React from "react";
import ReactDOM from "react-dom/client";

//React Elements
//  const heading = React.createElement("h1",{id:"heading"}, "Namste React!"); // it looks like lenthy to create a heading element

const jsxheading =( 
<h1
 id="heading">Namste React by JSX!
 </h1>
 ); // JSX syntax this is not html but JS syntax





//FUNCTIONAL COMPONENTS new way of creating components


/*Features of Functional Components
Simple function – just returns UI (JSX).
No this keyword – unlike class components, they don’t use this.
Hooks support – they can use React Hooks (useState, useEffect, etc.) to manage state & lifecycle.
Reusable – you can call them as many times as needed.
Preferred in modern React – most code today is written with functional components (class components are old style).
functional component name always start with upp

*/


const HeadingComponent = () => {
  return (
    <div id="container">
      {jsxheading}
      <h1>Namste React functional component!</h1>
    </div>
  );
};




const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(<HeadingComponent/>); // renders the JSX heading in the DOM





/*
bable transpile JSX to JavaScript
babel will convert the JSX to JavaScript behind the scenes
babel is a JavaScript compiler that allows you to write modern JavaScript using syntax that is compatible with older browsers.
babel conver this const jsxheading to:react.createElement("h1", { id: "heading" }, "Namste React by JSX!");
it helps in maintaining the code readability and maintainability.
it is also used to transform JSX into React.createElement calls.
it works behind the scenes and doesn't require any additional configuration.
*/

