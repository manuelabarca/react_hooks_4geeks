import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Count(props) {
	let [count, setCount] = useState(0);
	let [count2, setCount2] = useState(0);

	const sum = () => setCount(count++);
	const sum2 = () => setCount2(count2++);

	const rest = () => (count >= 0 ? setCount(count--) : count);

	useEffect(() => {
		console.log("Se ejecuta siempre");
	});

	useEffect(() => {
		console.log("Se ejecuta solouna vez");
	}, []);

	useEffect(() => {
		console.log("Se ejecuta solo count");
	}, [count]);

	useEffect(() => {
		return () => console.log("me fui");
	});

	return (
		<>
			<p>
				Clicks: {count} - count2: {count2}
			</p>
			<button onClick={rest}>Rest</button>
			<button onClick={sum}>Add</button>
			<button onClick={sum2}>Add2</button>
		</>
	);
}
