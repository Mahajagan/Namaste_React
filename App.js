//Create element in react

{/* <div id="root"><h1>Hello from react!</h1></div> */}


// const heading = React.createElement('h1',{},"Hello from react!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// Nested elements in react

{/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2><h2> // pass array of child elemenrs
    </div>
    <div id="child">
        <h1></h1>
        <h2><h2> // pass array of child elemenrs
    </div>
    
</div> */}

const parentElem = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div", 
        { id: "child1" },
        [React.createElement("h1",{ id: "heading1" },"Hello from h1!"),
        React.createElement("h2", { id: "heading2" },"Hello from h2!")
        ]
    ),
    React.createElement(
        "div", 
        { id: "child2" },
        [React.createElement("h1",{ id: "heading3" },"Hello from h1!"),
        React.createElement("h2", { id: "heading4" },"Hello from h2!")
        ]
    ),

    ]
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parentElem);
root.render(parentElem);

