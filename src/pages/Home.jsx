import React, { useContext } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ContextApi from '../ContecxtApi';

function Home() {
	const nav = useNavigate();
	const { rooms } = useContext(ContextApi);
	return (
		<div className="home">
			<Header />
			<Link to="/addroom">
				<button className="home-btn">+</button>
			</Link>

			{rooms.map(({ id, title, name, color }) => (
				<div
					className="home-bord"
					key={id}
					style={{
						border: '1px solid black',
						backgroundColor: color,
					}}
					onClick={() => nav(`room/${name}`)}
				>
					<h2>
						{title}: {name}
					</h2>
				</div>
			))}
		</div>
	);
}

export default Home;
