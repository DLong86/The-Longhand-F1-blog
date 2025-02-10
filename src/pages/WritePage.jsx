function WritePage({ addNote, newArticle, handleArticleChange }) {
	return (
		<div>
			<h1>Write page</h1>
			<form
				onSubmit={addNote}
				style={{
					width: '80%',
					display: 'flex',
					gap: '10px',
					flexDirection: 'column',
				}}
			>
				<input
					value={newArticle.title}
					onChange={e => handleArticleChange(e, 'title')}
					placeholder='title...'
				/>
				<textarea
					value={newArticle.content}
					onChange={e => handleArticleChange(e, 'content')}
					placeholder='content...'
				></textarea>

				<button type='submit'>Save</button>
			</form>
		</div>
	);
}

export default WritePage;
