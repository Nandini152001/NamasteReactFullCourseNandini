/*
<div id="parent">
   <div id="child1">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
   </div>
   <div id="child2">
      <h3>I'm h3 tag</h3>
      <h4>I'm h4 tag</h4>
   </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I'm h3 tag"),
    React.createElement("h4", {}, "I'm h4 tag"),
  ]),
]);
// so this parent is not a div, this is a JS Object - a React Element.
//parent is ReactElement that is an object
//this ReactElement converts to HTML (browser Understands) using render method.

const heading = React.createElement(
  "h1",
  { className: "MainHeading", xyz: "abc" },
  "Hello React!"
);

//don't use class, use className

// console.log(heading); //object
//heading isn't h1 tag yet, it's a JS-Object or a React Element.

const root = ReactDOM.createRoot(document.getElementById("root"));

//this render method is converting the heading object to h1 tag and put it into DOM. -- this render method only putting this heading into that div h1 tag.
root.render(parent);
