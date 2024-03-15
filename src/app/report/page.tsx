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
		<section className="container mx-auto py-8">
			<div className="bg-white shadow-md rounded-lg p-8">
				<h1 className="text-3xl font-bold mb-8">TODO-LIST Report</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-blue-100 p-6 rounded-lg flex flex-col justify-center items-center text-center">
						<label className="text-2xl font-semibold mb-2">진행중인 TODO-LIST </label>
						<p className="text-4xl font-bold">{workingTodo}</p>
					</div>

					<div className="bg-green-100 p-6 rounded-lg flex flex-col justify-center items-center text-center">
						<label className="text-2xl font-semibold mb-2">완료한 TODO-LIST </label>
						<p className="text-4xl font-bold">{doneTodo}</p>
					</div>
					<div className="bg-yellow-100 p-6 rounded-lg flex flex-col justify-center items-center text-center">
						<label className="text-2xl font-semibold mb-2">지금까지의 TODO-LIST 총 합계</label>
						<p className="text-4xl font-bold">{totalTodoList}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReportPage;
