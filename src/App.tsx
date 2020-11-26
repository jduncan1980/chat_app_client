import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		minHeight: '100vh',
	},
}));
function App(): React.ReactElement {
	const classes = useStyles();
	return (
		<Container className={classes.root} id='App'>
			{/* <Dashboard /> */}
			<Register />
			{/* <Login /> */}
		</Container>
	);
}

export default App;
