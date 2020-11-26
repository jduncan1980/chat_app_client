import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(15),
		margin: '50px',
		width: '50%',
	},
}));

export default function Title(): React.ReactElement {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper elevation={3}>
				<Typography variant='h4' component='h4'>
					Chat App
				</Typography>
				<Typography component='h5' variant='h5'>
					Topic Placeholder
				</Typography>
			</Paper>
		</div>
	);
}
