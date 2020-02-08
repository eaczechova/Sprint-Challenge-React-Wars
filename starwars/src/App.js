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
	const [page, setPage] = useState(1);

	const effectCallback = () => {
		axios
			.get(`https://swapi.co/api/people/${page}/`)
			.then(response => setData(response.data))
			.catch(error => console.log(error));
	};

	useEffect(effectCallback, [page]);

	const App = styled.div`
		text-align: center;
	`;
	const MainHeading = styled.h1`
		color: #6d5130;
		text-shadow: 1px 1px 5px #fff;
	`;

	return (
		<App>
			<MainHeading className="Header">React Wars</MainHeading>
			<Card data={data} />
			<Pagination className="pagination" aria-label="Page navigation example">
				<PaginationItem
					onClick={() => (page === 1 ? setPage(1) : setPage(page - 1))}
				>
					<PaginationLink previous href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">{page}</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next href="#" onClick={() => setPage(page + 1)} />
				</PaginationItem>
			</Pagination>
		</App>
	);
};

export default App;
