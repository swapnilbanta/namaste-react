 Notes of the namsate react js
 <script>
     const heading =    document.createElement("h1");
     heading.innerHTML = "Hello world";
     const root = document.getElementById("root");
     root.appendChild(heading);
    </script>
    const heading  =  React.createElement("h1",{id:"heading"},"Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);