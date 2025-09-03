//Part 111
/*
        
        //react code
        const heading=React.createElement('h1',
            {
            className:'heading', xyz:'abc'
            }
        ,'Hello World! from React');


        

        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
*/


/*
root.creatElement() function is used to create a new element  JAVASCRIPT OBJECT 
        React.createElement() returns a new React element.
        this function takes three parameters:
        1. the type of element we want to create
        2. an object containing the attributes of the element
        3. the children of the element

        important things if i ask you what is heading in it,
        here 'heading' is an object with properties like className, xyz, and children
        className is used to add class to the element
        xyz is used to add an attribute to the element
        children is used to add text to the element
        Here is one concept children and props to elements
        props are used to pass data from parent to child component
        like in this case, we are adding class and attribute 'xyz' to the h1 element
        children is used to add text to the element
        xyz is used to add an attribute to the element
        xyz is a custom attribute and it can be used in any element in react
        you can add any attribute to an element in react by adding them as key-value pair in the object passed to the element.
        

    IMP THINGS WHAT IS PROPS 
    { }=== props
        //props are used to pass data from parent to child component
       ********* props: {className: 'heading', xyz: 'abc' children: 'Hello World! from React' },

        console.log(heading); //<h1 class="heading" xyz="abc">Hello World! from React</h1>
*/











//Part222

/*
<div id="parent">

      <div id="child">            

            <h1>Hello World from React </h1>    

      </div>

</div>

how we create nested elements in react.


const parent=React.createElement('div',{
    id:'parent'
},React.createElement('div',{
    id:'child'
    },React.createElement('h1',null,'Hello World! from React')));

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//go and inspect it in browser to see the nested elements.

*/







//part333
//we want to create sibling more child elements in react.
//then we will create an array of child elements and pass it to parent component.

/*
<div id="parent">

      <div id="child">            

            <h1>Hello World from React </h1>
            <h2>Another Heading</h2>    

      </div>

</div>

how we create nested elements in react.


const parent=React.createElement('div',{
    id:'parent'
},React.createElement('div',{
    id:'child'
    },
    [React.createElement('h1',null,'Hello World! from React'),
    React.createElement('h2',null,'Another Heading')])); //we create an array of child elements and pass it to parent component.


console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

*/



//part4444



/*
<div id="parent">

      <div id="child">            

            <h1>Hello World from React </h1>
            <h2>Another Heading</h2>    

      </div>

      <div id="child">            

            <h1>Hello World from React </h1>
            <h2>Another Heading</h2>    

      </div>

</div>

how we create nested elements in react. how we create it more complex nested elements in react.

*/
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

    //inspect it in browser to see the nested elements.
    //making more complex to write and we have seen that it will make our code more readable and maintainable.
    //but it make our code more complex and harder to understand.
    //we improve this by using JSX which is a syntax extension to JavaScript and it allows us to write HTML in JavaScript.






    
/*
    JSX stands for JavaScript XML.
    jsx is a syntax extension to JavaScript, not a new language.
    jsx allows us to write HTML in JavaScript.
    jsx is used to create React elements.
    jsx allows us to use JavaScript expressions inside HTML tags.
    jsx allows us to use JavaScript objects as props.
    jsx allows us to use JavaScript arrays as children.
    jsx allows us to use JavaScript variables and functions as expressions.
    jsx allows us to use JavaScript logical operators and expressions.
    jsx allows us to use JavaScript conditional statements and expressions.
    jsx allows us to use JavaScript loops and expressions.
    jsx allows us to use JavaScript events and handlers.
    jsx allows us to use JavaScript fragments and elements.
    jsx allows us to use JavaScript spread and rest operators.
    jsx allows us to use JavaScript destructuring and assignment.
    jsx allows us to use JavaScript default and rest parameters.
    jsx allows us to use JavaScript optional chaining and nullish coalescing.
*/




//what is package.json and package-locjk.json             INTERVIEW
//package.json keep the version of package installed in it 
//and package-lock.json is used to lock down the version of package installed in it.
//it keeps the version of package installed in it and it helps in maintaining the same version of package across different projects.
//package-lock.json is a file generated by npm5+ that locks down the exact versions of your dependencies.



//what is npm
/*

npm is a package manager for JavaScript and the world's largest software registry.
npm is used to install, share, and manage JavaScript packages.
npm is a command-line tool that makes it easy to install and manage Node.js packages.
npm is a package manager for JavaScript and the world's largest software registry.
npm is used to install, share, and manage JavaScript packages.
npm is a package manager for JavaScript and the world's largest software registry.
npm is used to install, share, and manage JavaScript packages.
npm is a package manager for JavaScript and the world's largest software registry.
*/



//what is bundler?
/*

Bundler is a tool that takes a set of modules and combines them into a single file for easy distribution and loading.
Bundlers are used to create a single file that includes all the dependencies and code of a project.
parcel is a popular bundler that is designed for JavaScript and TypeScript.
more bundler like webpack, rollup, and browserify are also popular.
*/


//what is npm install
/*
npm install is a command-line tool used to install packages from the npm registry.
npm install is used to install packages from the npm registry.
npm install is a command-line tool used to install packages from the npm registry.
npm install is a command-line tool used to install packages from the npm registry.
npm install is a command-line tool used to install packages from the npm registry.
*/



//what is npm init
/*
npm init is a command-line tool used to create a new package.json file for a project.
*/



//what is npx
/*
npx is a tool that allows you to run npm packages directly from the command line.
*/



//what is node modules
/*
Node modules are packages that can be installed and used in your Node.js projects.
like databases for all packages 
*/
