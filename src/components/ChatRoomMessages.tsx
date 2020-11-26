import React from 'react';
import { Paper, Typography, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(15),
		margin: '50px',
		// backgroundColor: theme.palette.grey[200],
	},
}));

interface IProps {
	chatElement: {
		userName: string;
		message: string;
	};
}

export default function ChatRoomMessages(props: any): React.ReactElement {
	const classes = useStyles();

	return <Box className={classes.root}></Box>;
}
