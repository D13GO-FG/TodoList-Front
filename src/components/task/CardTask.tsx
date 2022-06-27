import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './CardTask.css';

const CardTask: React.FC = () => {
	return (
		<div className="task">
			<div className="description">
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</p>
			</div>

			<div>
				<div className="optionbutton">
					<IconButton aria-label="complete">
						<CheckCircleOutlineIcon fontSize="large" />
					</IconButton>
					<IconButton aria-label="delete">
						<DeleteIcon fontSize="large" />
					</IconButton>
				</div>
				<p className="date">End: 01/01/01</p>
			</div>
		</div>
	);
};

export { CardTask };
