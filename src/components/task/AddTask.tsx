import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/';
import './AddTask.css';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';

const AddTask: React.FC = () => {
	const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
	// const [values, setValues] = useState({
	// 	task: '',
	// });

	// const handleChange2 = (prop) => (event) => {
	// 	setValues({ ...values, [prop]: event.target.value });
	// };

	const handleChange = (newValue: any) => {
		setValue(newValue);
	};

	return (
		<div className="main_input">
			{/* <FormControl fullWidth sx={{ m: 1 }}>
				<InputLabel htmlFor="outlined-adornment-amount">My Task</InputLabel>
				<OutlinedInput
					id="outlined-adornment-amount"
					value={values.task}
					onChange={handleChange2('task')}
					startAdornment={<InputAdornment position="start"></InputAdornment>}
					label="Amount"
				/>
			</FormControl> */}
			<TextField fullWidth label="Add Task" id="fullWidth" />
			<div className="addTask">
				{/* <TextField id="outlined-basic" label="New task" variant="outlined" /> */}
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DateTimePicker
						label="Date&Time picker"
						value={value}
						onChange={handleChange}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				<Button variant="contained">Add</Button>
			</div>
		</div>
	);
};

export default AddTask;
