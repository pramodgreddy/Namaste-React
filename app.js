const parent = React.createElement("div", {id:"parent"},
[
    React.createElement("div", {id:"child"},
    [ React.createElement("h1", {id:"head1"},"I'm heading from React"),
    React.createElement("h2", {id:"head2"},"I'm heading2 from React")]
    )
,
React.createElement("div", {id:"child"},
[ React.createElement("h1", {id:"head1"},"I'm heading from React"),
React.createElement("h2", {id:"head2"},"I'm heading2 from React")]
)
]
);

console.log(parent);
// root.render(parent);
 
// const heading= React.createElement("h1", {id:"heading"},"Hello World from React!")
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);