import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Title from './Title';
import MessageBar from './MessageBar';
import ChatRoomMessages from './ChatRoomMessages';
import io from 'socket.io-client';

const SERVER = process.env.CHAT_SERVER || 'https://localhost:5000';
const socket = io(SERVER);

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		placeItems: 'center',
	},
}));

export default function Dashboard(): React.ReactElement {
	const classes = useStyles();
	socket.on('connection', () => {
		console.log('Connected!');
	});

	return (
		<div className={classes.root}>
			<Title />
			<MessageBar />
			<ChatRoomMessages />
		</div>
	);
}
