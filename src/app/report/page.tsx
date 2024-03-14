import { TodoType } from '@/types';
import React from 'react';

const ReportPage = async () => {
	// ISR
	const response = await fetch(`http://localhost:4000/todos`, {
		next: {
			revalidate: 10,
		},
	});

	const todoList = await response.json();

	const workingTodo = todoList.filter((todoItem: TodoType) => todoItem.isDone === false).length;
	const doneTodo = todoList.filter((todoItem: TodoType) => todoItem.isDone === true).length;
	const totalTodoList = todoList.length;

	return (
		<section>
			<div>
				<h1>TODO-LIST Report</h1>
				<div>
					<label>진행중인 TODO-LIST </label>
					<p>{workingTodo}</p>
				</div>
				<div>
					<label>완료한 TODO-LIST </label>
					<p>{doneTodo}</p>
				</div>
				<div>
					<label>지금까지의 TODO-LIST 총 합계</label>
					<p>{totalTodoList}</p>
				</div>
			</div>
		</section>
	);
};

export default ReportPage;
