//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";



//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";
//render your react application

let counter = 0;
setInterval(() => {
    ReactDOM.createRoot(document.getElementById('app')).render(
            <SecondsCounter
                one={Math.floor(counter / 1)}
                two={Math.floor(counter / 10)}
                three={Math.floor(counter / 100)}
                four={Math.floor(counter / 1000)}
                five={Math.floor(counter / 10000)}
                six={Math.floor(counter / 100000)}

            />
    );
    counter++

}, 1000);


document.title = "Simple Counter"
