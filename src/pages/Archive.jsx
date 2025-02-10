function Archive({ articles }) {
	return (
		<div className='all-container'>
			<ul>
				{articles.map(article => (
					<li key={article.id}>
						<h1>{article.title}</h1>
						<p>{article.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Archive;
