import React from'react';
import ReactDOM from'react-dom/client';

const parent = React.createElement(
  'div',
  { id: 'parent' },
  [
    React.createElement(
      'div',
      { id: 'child1', key: 'child1' }, // added key
      [
        React.createElement('h1', { key: 'h1-child1' }, 'Hello World! 🌍🔥'),
        React.createElement('h2', { key: 'h2-child1' }, 'Another Heading')
      ]
    ),
    React.createElement(
      'div',
      { id: 'child2', key: 'child2' }, // added key
      [
        React.createElement('h1', { key: 'h1-child2' }, 'Hello World! from React'),
        React.createElement('h2', { key: 'h2-child2' }, 'Another Heading')
      ]
    )
  ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
