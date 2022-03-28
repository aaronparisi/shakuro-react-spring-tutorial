import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

interface Spring1Props {}

const Spring1: React.FC<Spring1Props> = () => {
	const [toggled, setToggled] = useState<boolean>(false);
	const springProps = useSpring({
		from: { opacity: toggled ? 0 : 1, fontSize: toggled ? 16 : 72 },
		to: { opacity: toggled ? 1 : 0, fontSize: toggled ? 72 : 16 },
		config: {
			duration: 1500,
		},
	});

	return (
		<div>
			<button onClick={() => setToggled(!toggled)}>Toggle!</button>
			<animated.div className="opacity-div" style={springProps}>
				hello from opacity animation
			</animated.div>
		</div>
	);
};

export default Spring1;
