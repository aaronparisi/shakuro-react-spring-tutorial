import React from "react";
import ImageZoomFrame from "./components/ImageZoomFrame/ImageZoomFrame";
import Spring1 from "./components/Spring1/Spring1";
import "./stylesheets/index.css";

function App() {
	return (
		<div className="App">
			<h1>Hello from App!</h1>
			{/* <Spring1 /> */}
			<ImageZoomFrame />
		</div>
	);
}

export default App;
