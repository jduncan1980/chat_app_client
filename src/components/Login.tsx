import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
	Button,
	TextField,
	Box,
	makeStyles,
	Typography,
} from '@material-ui/core';
import Line from './Line';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reduxSlices/userSlice';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		// padding: theme.spacing(1, 15),
		margin: '0 auto',
		width: '40%',
		[theme.breakpoints.down('sm')]: {
			width: '90%',
		},
	},
	btn: {
		margin: '10px',
	},
	input: {
		width: '100%',
		margin: '5%',
	},
}));

type FormData = {
	username: string;
	password: string;
};

// const URL = process.env.REACT_APP_SERVER;

export default function Login(): React.ReactElement {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const { register, handleSubmit, formState } = useForm<FormData>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		await dispatch(loginUser(data));
		history.push('/dashboard');
	};

	return (
		<Box
			component='form'
			className={classes.root}
			onSubmit={handleSubmit(onSubmit)}
			id='login-form'
		>
			<Line />
			<Typography variant='h2' color='primary'>
				Let's Chat!
			</Typography>
			<TextField
				label='User Name'
				variant='outlined'
				name='username'
				id='username'
				inputRef={register({
					required: true,
				})}
				className={classes.input}
			/>
			<TextField
				label='Password'
				variant='outlined'
				name='password'
				id='password'
				inputRef={register({
					required: true,
				})}
				className={classes.input}
			/>
			<Button
				type='submit'
				variant='contained'
				color='secondary'
				className={classes.btn}
				disabled={!formState.isValid}
			>
				Login
			</Button>
			<Line />
			<Link to='/register' style={{ textDecoration: 'none' }}>
				<Typography variant='h5' color='primary'>
					Not Signed Up?
				</Typography>
			</Link>
		</Box>
	);
}
