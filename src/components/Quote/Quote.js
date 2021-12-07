const Quote = ({ quote, author, currPos, allQuotes, error }) => (
	<>
		{!error && <h1 className="quotesLegend">
			Cytat <span className="quotesLegend__curr">{currPos}</span> /{' '}
			{allQuotes}
		</h1>}
		<section className="quoteContainer">
			<blockquote className="quoteContainer__quote">
				<p className="quoteContainer__quote__item">{quote}</p>
			</blockquote>
			<p className="quoteContainer__author">— {author}</p>
		</section>
	</>
);

export default Quote;
