import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Recent from './pages/Recent';
import SearchPage from './pages/SearchPage';
import Footer from './components/Footer';
import axios from 'axios';
import WritePage from './pages/writePage';
import Archive from './pages/Archive';

const App = () => {
	const [articles, setArticles] = useState([]);
	const [searchArticle, setSearchArticle] = useState('');
	const [filteredArticles, setFilteredArticles] = useState(articles);
	const [newArticle, setNewArticle] = useState({ title: '', content: '' });

	useEffect(() => {
		console.log('effect');

		axios.get('http://localhost:3001/articles').then(response => {
			console.log('Promised fulfilled');
			setArticles(response.data);
		});
	}, []);

	console.log('render', articles.length, 'articles');
	console.log(articles);

	const addNote = event => {
		event.preventDefault();
		const noteObject = {
			id: String(articles.length + 1),
			title: newArticle.title,
			content: newArticle.content,
		};

		setArticles(articles.concat(noteObject));
		setNewArticle({ title: '', content: '' });
	};

	const handleArticleChange = (event, field) => {
		console.log('?????', event.target.value);
		setNewArticle(prevArticle => ({
			...prevArticle,
			[field]: event.target.value,
		}));
	};

	const handleSearch = e => {
		console.log(e.target.value, 'From search');

		setSearchArticle(e.target.value);

		const searchArticles = articles.filter(article =>
			article.title.toLowerCase().includes(searchArticle.toLowerCase())
		);

		setFilteredArticles(searchArticles);
	};

	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/recent' element={<Recent articles={articles} />} />
					<Route path='/archive' element={<Archive articles={articles} />} />
					<Route
						path='/search'
						element={
							<SearchPage
								articles={articles}
								filteredArticles={filteredArticles}
								handleSearch={handleSearch}
								searchArticle={searchArticle}
							/>
						}
					/>
					<Route
						path='/write'
						element={
							<WritePage
								addNote={addNote}
								newArticle={newArticle}
								handleArticleChange={handleArticleChange}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
