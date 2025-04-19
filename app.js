const heading = React.createElement(
  "h1",
  { id: "heading", val: "yoyo" },
  "I am React h1 tag"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
