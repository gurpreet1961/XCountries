import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
	const [Countries, setCountries] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = "https://restcountries.com/v3.1/all";
				const res = await axios(url, {
					method: "GET",
				});
				const data = await res.data;

				setCountries(data);
			} catch (err) {
				console.error(getFailedCountries);
			}
		};
		fetchData();
	});

	return (
		<div className="container">
			{Countries?.map((ele) => {
				return (
					<div key={ele.cca3} className="card">
						<img src={ele.flags.png} alt={ele.flags.alt} />
						<h4>{ele.name.common}</h4>
					</div>
				);
			})}
		</div>
	);
};

export default App;
