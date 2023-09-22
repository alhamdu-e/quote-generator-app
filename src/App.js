import "./App.css";
import { FaQuoteLeft, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
function App() {
	const [quote, setQuote] = useState([]);
	const apiurl = "https://api.api-ninjas.com/v1/quotes";
	const apikey = "Bw5LBpgqVQKZhNrnbiOTag==pRUsxfoZnLXyX5X6";

	const fetchQuote = () => {
		fetch(apiurl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": apikey,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setQuote(data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		fetchQuote();
	}, []);
	const handlClick = () => {
		fetchQuote();
	};

	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 text-center bg-white custom-padding quote-cont">
					<div>
						<span className="quote">
							<FaQuoteLeft></FaQuoteLeft>
						</span>
						&nbsp;&nbsp;&nbsp;
						<span className="quote">{quote.quote}</span>
					</div>
					<div className="author-cont">
						<span className="author">{quote.author}</span>
					</div>
					<div className="flex">
						<div>
							<a href="#">
								<FaGithub></FaGithub>
							</a>
						</div>
						<button className="btn" onClick={handlClick}>
							New Quote
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
