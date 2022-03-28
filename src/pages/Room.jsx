import React, { useContext, useState } from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import ContextApi from '../ContecxtApi';
import '../App.css';

function Room() {
	const { rooms, products, addNewProduct, changeStatus } =
		useContext(ContextApi);
	const { name } = useParams();
	const [productTitle, setProductTitle] = useState({});
	const [val, setVal] = useState(false);
	// const [flage, setFlage] = useState(false);
	const [thisRoom, setThisRoom] = useState(
		rooms.filter((room) => room.name === name)
	);
	// const [idRooms, setIdRooms] = useState('');
	// const [roomProducts, setRoomProducts] = useState('');

	const room = products.filter((product) => product.name === name);

	const validata = (e) => {
		if (productTitle === 'radio') {
			for (let i = 0; i < room.length; i++) {
				console.log(room[i].product);
				if (room[i].product === 'radio') {
					alert('only one radio');
					break;
				}
			}
		}
		if (productTitle === 'Boiler')
			if (thisRoom[0].title !== 'bathroom/toilet') {
				setVal(false);
				return alert('not bathroom/toilet');
			}
		if (room.length >= 5) {
			setVal(false);
			return alert('not more of 5 products');
		} else {
			addNewProduct(productTitle, name);
			setVal(false);
			e.value = null;
			setVal(false);
			// setFlage(false);
		}
	};

	return (
		<div>
			<Header />
			<h1 className="room-lbl">the room of {name}</h1>
			<h2>name: {name}</h2>
			<h2>title: {thisRoom[0].title}</h2>

			<button
				className="room-btn-show"
				onClick={() => setVal(true)}
				style={{ display: val ? 'none' : 'inline' }}
			>
				add product
			</button>
			<div style={{ display: val ? 'inline' : 'none' }}>
				<select
					className="addRoom-input"
					name="product"
					id="product"
					onChange={(e) => {
						setProductTitle(e.target.value);
						setVal(true);
					}}
				>
					<option>set option</option>
					<option value="Boiler">Boiler</option>
					<option value="radio">radio</option>
					<option value="lamp">lamp</option>
					<option value="Air-Conditioner">Air-Conditioner</option>
				</select>
				<button
					className="room-add-btn"
					onClick={(e) => {
						// addNewProduct(productTitle, name);
						// setVal(false);
						// e.value = null;
						validata(e);
					}}
				>
					add
				</button>
			</div>
			{room.map(({ idProduct, product, status }, index) => (
				<div key={idProduct}>
					<button
						className="room-product"
						style={{ backgroundColor: status ? 'green' : 'red' }}
						onClick={() => {
							changeStatus(idProduct);
						}}
					>
						{product}
					</button>
				</div>
			))}
			<button className="room-goHome">
				<Link to={'/'} className="link">
					home
				</Link>
			</button>
		</div>
	);
}

export default Room;
