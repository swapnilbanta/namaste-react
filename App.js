// const heading  =  React.createElement("h1",{id:"heading"},"Hello world from react");
import  React from "react";
import ReactDOM from "react-dom/client";

//React.createElement = >ReactElement-JS Object =>HTMLElement(render)
//JSX is not html in JS
//JSX HTML- like syntax or XL-syntax
//JSX(Transplied before it goes to JS Engine) -Parcel -Babel
//Babel covert the code that react will understand
//JSX =>React.createElement = >ReactElement-JS Object =>HTMLElement(render)
//babel converting the JSX into React create Element    
const heading = <h1 id="heading">Namsate from react js using jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);