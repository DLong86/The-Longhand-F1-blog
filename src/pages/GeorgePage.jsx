function GeorgePage({ articles }) {
  if (!articles || articles.length === 0) {
    return <div className="recent-page">No articles available.</div>;
  }
  const georgeArticles = articles.filter((article) =>
    article.title.toLowerCase().includes("faraway george")
  );

  return (
    <div className="all-container">
      <ul>
        {georgeArticles.map((article) => (
          <li key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GeorgePage;
