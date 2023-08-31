 Notes of the namsate react js
 <script>
     const heading =    document.createElement("h1");
     heading.innerHTML = "Hello world";
     const root = document.getElementById("root");
     root.appendChild(heading);``
    </script>
    const heading  =  React.createElement("h1",{id:"heading"},"Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

#parcel
-dev build
-local server
-HMR = hot Module replacement -refresh karna tha
-File watching algorthim - written in c++
-catching fasting the build -next build in faster
-Image optimization
-Minification
-Bunding or bundler
-Compressing your file
-Consistent hashing
-Code spliting
-differential bundling -to support  older versions of the browser
-Diagonstic  = beautifull diagonstic of the errors
-Error handling
-SSL feature also provided
-Tree shaking algorthim
-reomve the unused code for you.
-different dev and prod buildes

Example of react
// const heading  =  React.createElement("h1",{id:"heading"},"Hello world from react");
import  React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement( "h1",{},"This is a namsate react "),
React.createElement( "h1",{},"I am a h2 tag")
]
)],
[React.createElement("div",{id:"child2"},[React.createElement( "h1",{},"I am a h1 tag"),
React.createElement( "h1",{},"I am a h2 tag")
]
)]

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

Example of the react js
const heading  = React.createElement("h1",{id:"heading"},"Hello from namsate react course");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



// const heading  =  React.createElement("h1",{id:"heading"},"Hello world from react");
import  React from "react";
import ReactDOM from "react-dom/client";

//React.createElement = >ReactElement-JS Object =>HTMLElement(render)
//JSX is not html in JS
//JSX HTML- like syntax or XL-syntax
//JSX(Transplied before it goes to JS Engine) -Parcel -Babel
//Babel covert the code that react will understand
//JSX =>Babel transplies it to=>React.createElement = >ReactElement-JS Object =>HTMLElement(render)
//babel converting the JSX into React create Element   
//babel is a javascript compiler 
//babel transplied into e6 features for e6 features
// const jsxHeading = <h1 id="heading"  className="head">Namsate from react js using jsx</h1>;
//React element
const   title = (
    <div>
<h1 id="heading"  className="head">Namsate react by using using jsx
</h1>
<h2>
    Test two
</h2>
</div>

);
//React component
//Two types of the component
//Class component
//Functional component
//Component compositions
const numbers = 10000;
const HeadingComponent = ()=>{
return <div className="container">
    <h1>Namsate React functional component</h1>
   {title}
    </div>
};
const HeadingComponent2 = () =><h1 className="heading">Namsate React functional component</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< HeadingComponent/>);

