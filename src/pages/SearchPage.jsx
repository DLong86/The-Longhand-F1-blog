import SearchBar from '../smallComponents/SearchBar';

function SearchPage({ filteredArticles, handleSearch, searchArticle }) {
	return (
		<div className='all-container'>
			<div>
				<SearchBar searchArticle={searchArticle} handleSearch={handleSearch} />
			</div>
			<ul>
				{filteredArticles.map(article => (
					<li key={article.id}>
						<h1>{article.title}</h1>
						<p>{article.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchPage;
