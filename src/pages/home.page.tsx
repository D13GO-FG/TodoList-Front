import React from 'react';
import './TodoList.css';
import AddTask from '../components/task/AddTask';
import { CardTask } from '../components/task/CardTask';

const HomePage: React.FC = () => {
	return (
		<div className="container" style={{ marginTop: '10px' }}>
			<div className="title">
				<h1>My List (5)</h1>
			</div>
			<AddTask />
			<CardTask />
			<CardTask />
			<CardTask />
			<CardTask />
			<CardTask />
			<CardTask />
		</div>
	);
};

export { HomePage };
