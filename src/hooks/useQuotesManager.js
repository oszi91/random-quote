import { useEffect, useState } from 'react';

import API_URL from '../config/API_URL';
import randomNumberGenerator from '../utils/randomNumberGenerator';

const useQuotesManager = () => {
	const [quotes, setQuotes] = useState([]);
	const [randomQuote, setRandomQuote] = useState({ author: '', quote: '' });
	const [randomNumbersArr, setRandomNumbersArr] = useState([]);
	const [currPosition, setCurrPositon] = useState(0);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	const generateNewQuote = quotes => {
		const randomNum = randomNumberGenerator(quotes.length - 1);
		setRandomNumbersArr(numArr => (numArr = [...numArr, randomNum]));
		setCurrPositon(randomNumbersArr.length);
		setRandomQuote(quotes[randomNum]);
	};

	const switchToPrevQuote = quotes => {
		setRandomQuote(quotes[randomNumbersArr[currPosition - 1]]);
		setCurrPositon(currPosition => currPosition - 1);
	};

	const getQuotes = async () => {
		try {
			setLoading(true);
			setError(false);
			const response = await fetch(API_URL);
			const data = await response.json();
			setQuotes(data);
			generateNewQuote(data);
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	useEffect(() => {
		getQuotes();
		// eslint-disable-next-line
	}, []);

	return {
		quotes,
		randomQuote,
		error,
		loading,
		currPosition,
		randomNumbersArr,
		generateNewQuote,
		switchToPrevQuote,
	};
};

export default useQuotesManager;
