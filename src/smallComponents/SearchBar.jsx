function SearchBar({ searchArticle, handleSearch }) {
	return (
		<div style={{ margin: '0 auto', width: '60%' }}>
			<input
				type='text'
				placeholder='search...'
				style={{
					width: '100%',
					// margin: "0 auto",
					borderRadius: '20px',
					border: 'none',
					padding: '10px 15px',
					boxSizing: 'border-box',
				}}
				value={searchArticle}
				onChange={handleSearch}
			/>
		</div>
	);
}

export default SearchBar;
