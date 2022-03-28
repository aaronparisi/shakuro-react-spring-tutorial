import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

import img from "../../images/img.jpeg";

interface ImageZoomFrameProps {}

const ImageZoomFrame: React.FC<ImageZoomFrameProps> = () => {
	const [zoomingIn, setZoomingIn] = useState<boolean>(false);

	const frameProps = useSpring({
		from: {
			height: zoomingIn ? "10%" : "30%",
			width: zoomingIn ? "30%" : "90%",
			border: zoomingIn ? "5px solid black" : "25px solid black",
			backgroundSize: zoomingIn ? "325%" : "100%",
		},
		to: {
			height: zoomingIn ? "30%" : "10%",
			width: zoomingIn ? "90%" : "30%",
			border: zoomingIn ? "25px solid black" : "5px solid black",
			backgroundSize: zoomingIn ? "100%" : "325%",
		},
	});

	const imageProps = useSpring({});

	return (
		<div className="image-zoom-frame-wrapper">
			<button onClick={() => setZoomingIn(!zoomingIn)}>Toggle!</button>
			<animated.div
				className="image-zoom-frame"
				style={{
					overflow: "hidden",
					backgroundImage: `url(${img})`,
					backgroundPosition: "50% 50%",
					...frameProps,
				}}
			>
				{/* <animated.div className="framed-image" style={imageProps}>
					<img
						src={img}
						alt="docked boats on a tranquil lake with the sun setting behind mountains in the background"
					/>
				</animated.div> */}
			</animated.div>
		</div>
	);
};

export default ImageZoomFrame;
