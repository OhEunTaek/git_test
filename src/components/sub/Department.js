import { useEffect, useState } from "react";
import Layout from "../common/Layout";

function Department() {
	let [num, setNum] = useState(0);
	useEffect(() => {
		console.log("디파트먼트 생성");

		return () => {
			console.log('디파트먼트 소멸');
		}
	}, []);
	useEffect(() => {
		console.log(num);
	}, [num]);
	return (
		<Layout name={"department"}>

			<button onClick={() => setNum(num + 1)}>증가</button>
			<h1>{num}</h1>
			<p>디파트먼트 컨텐츠가 들어올자리</p>
		</Layout>
	);
}

export default Department;
