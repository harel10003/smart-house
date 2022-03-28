import { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	// useNavigate,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddRoom from './pages/AddRoom';
import ContextApi from './ContecxtApi';
import Room from './pages/Room';

function App() {
	const [rooms, setRooms] = useState([]);
	const [products, setProducts] = useState([]);
	const [id, setId] = useState(0);
	const [idProduct, setIdProduct] = useState(0);

	const addNewRoom = (title, name, color) => {
		setRooms([...rooms, { id, title, name, color }]);
		setId(id + 1);
	};

	const addNewProduct = (product, name) => {
		let tempProducts = products;
		tempProducts.push({ name, product, status: false, idProduct });
		setProducts([...tempProducts]);
		setIdProduct(idProduct + 1);
	};

	const changeStatus = (id) => {
		// debugger;
		let temp = products;
		for (let i = 0; i < temp.length; i++) {
			if (temp[i].idProduct === id) {
				temp[i].status = !temp[i].status;
				break;
			}
		}
		setProducts([...temp]);
	};

	return (
		<div className="App">
			<ContextApi.Provider
				value={{
					products,
					rooms,
					addNewRoom,
					addNewProduct,
					changeStatus,
				}}
			>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/addroom" element={<AddRoom />} />
						<Route path="/room/:name" element={<Room />} />
					</Routes>
				</Router>
			</ContextApi.Provider>
		</div>
	);
}

export default App;
