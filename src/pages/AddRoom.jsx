import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextApi from '../ContecxtApi';
import '../App.css';

function AddRoom() {
	const [roomTitle, setRoomTitle] = useState({});
	const [roomName, setRoomName] = useState({});
	const [roomColor, setRoomColor] = useState({});
	const { addNewRoom } = useContext(ContextApi);
	const nav = useNavigate();
	return (
		<div className="addRoom-container">
			<label className="addRoom-labl">Choose a room:</label>

			<select
				className="addRoom-input"
				name="room"
				id="room"
				onChange={(e) => {
					setRoomTitle(e.target.value);
				}}
			>
				<option>set option</option>
				<option value="badroom">badroom</option>
				<option value="bathroom/toilet">bathroom/toilet</option>
				<option value="kitchen">kitchen</option>
			</select>
			<input
				className="addRoom-input"
				type="text"
				maxLength="5"
				onChange={(e) => {
					setRoomName(e.target.value);
				}}
				id="name"
				placeholder="enter name of the room"
			/>
			<input
				className="addRoom-input"
				onChange={(e) => {
					setRoomColor(e.target.value);
				}}
				type="text"
				id="color"
				placeholder="enter color "
			/>
			<button
				className="addRoom-btn-Save"
				onClick={() => {
					if (roomTitle.length > 0 && roomName.length > 1) {
						addNewRoom(roomTitle, roomName, roomColor);
						nav('/');
					} else {
						alert('error in create room');
						nav('/');
					}
				}}
			>
				save
			</button>
		</div>
	);
}

export default AddRoom;
