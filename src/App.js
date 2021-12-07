import Button from './components/Button/Button';
import Error from './components/Error/Error';
import Loading from './components/Loading/Loading';
import Quote from './components/Quote/Quote';

import useAPI from './hooks/useQuotesManager';

const App = () => {
	const {
		quotes,
		randomQuote,
		error,
		loading,
		currPosition,
		randomNumbersArr,
		generateNewQuote,
		switchToPrevQuote,
	} = useAPI();

	return (
		<div className="app">
			{!!error && <Error>{error}</Error>}
			{loading ? (
				<Loading />
			) : (
				<>
					<Quote
						{...randomQuote}
						currPos={currPosition + 1}
						allQuotes={randomNumbersArr.length}
						error={!!error}
					/>
					<div className="buttonsContainer">
						<Button
							onClick={() => generateNewQuote(quotes)}
							disabled={!!error ? true : false}
						>
							Losuj nowy cytat
						</Button>
						<Button
							onClick={() => switchToPrevQuote(quotes)}
							disabled={currPosition === 0 ? true : false}
						>
							Poprzedni cytat
						</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default App;
