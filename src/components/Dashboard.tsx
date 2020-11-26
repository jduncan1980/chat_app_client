import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Title from './Title';
import MessageBar from './MessageBar';
import ChatRoomMessages from './ChatRoomMessages';
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		placeItems: 'center',
	},
}));

export default function Dashboard(): React.ReactElement {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Title />
			<MessageBar />
			<ChatRoomMessages />
		</div>
	);
}
