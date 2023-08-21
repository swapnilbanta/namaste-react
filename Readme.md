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

