import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import styled from 'styled-components';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [data, setData] = useState([]);
	const effectCallback = () => {
		axios
			.get('https://swapi.co/api/people/1/')
			.then(response => setData(response.data))
			.catch(error => console.log(error));
	};

	useEffect(effectCallback, []);
	console.log(data);
	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			<Card data={data} />
			<Pagination className="pagination" aria-label="Page navigation example">
				<PaginationItem disabled>
					<PaginationLink previous href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next href="#" />
				</PaginationItem>
			</Pagination>
		</div>
	);
};

export default App;
