
// const heading = React.createElement("h1",{id:"heading" ,xyz:"abc"},"hello world from react !");
// console.log(heading);


const parent = React.createElement("div",{id:"parent"},
[
React.createElement("div",{id:"child"},
[React.createElement("h1", {},"I'm h1 tag"),
React.createElement("h2", {},"I'm h2 tag")])
,React.createElement("div",{id:"child two"},
[React.createElement("h1", {},"I'm h1 tag"),
React.createElement("h2", {},"I'm h2 tag")])

]);
console.log(parent);
//JSX
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
   root.render(heading);

