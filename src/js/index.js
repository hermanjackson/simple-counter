//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SimpleCounter } from "./component/counter.js";
let counter = 0;
setInterval(() => {
	let one = Math.floor(counter / 1);
	let two = Math.floor(counter / 10);
	let three = Math.floor(counter / 100);
	let four = Math.floor(counter / 1000);

	ReactDOM.render(
		<SimpleCounter one={one} two={two} three={three} four={four} />,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
