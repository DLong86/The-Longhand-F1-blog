function Recent({ articles }) {
	if (!articles || articles.length === 0) {
		return <div className='recent-page'>No recent articles available.</div>;
	}
	const recentArticle = articles[articles.length - 1];

	return (
		<div className='recent-page'>
			<div className=''>
				{[recentArticle].map(article => (
					<div key={article.id}>
						<h1>{article.title}</h1>
						<p>{article.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Recent;
