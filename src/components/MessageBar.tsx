import React from 'react';
import { Button, TextField, Box, makeStyles } from '@material-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: theme.spacing(1, 15),
		margin: '0 auto',
		width: '60%',
	},
	btn: {
		margin: '10px',
	},
	input: {
		width: '100%',
	},
}));

type FormData = {
	message: string;
};

export default function MessageBar(): React.ReactElement {
	const classes = useStyles();

	const { register, handleSubmit } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

	return (
		<Box
			component='form'
			className={classes.root}
			onSubmit={handleSubmit(onSubmit)}
		>
			<TextField
				label='User Name'
				variant='outlined'
				name='message'
				id='message'
				inputRef={register}
				className={classes.input}
			/>
			<Button type='submit' variant='contained' className={classes.btn}>
				Submit
			</Button>
		</Box>
	);
}
