import TodoForm from '@/components/todoComponents/TodoForm';
import { TodoType } from '@/types';
import Link from 'next/link';
import React from 'react';

const TodoSSRPage = async () => {
	const response = await fetch(`http://localhost:4000/todos`, {
		cache: 'no-cache',
	});
	const todoList: TodoType[] = await response.json();

	return (
		<section className="container mx-auto py-8">
			<div className="text-center text-2xl mb-8">
				<span className="text-blue-500 hover:underline">
					<Link href={'/report'}>할일 정보 통계 보러가기</Link>
				</span>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-indigo-100 rounded-lg p-6">
					<h2 className="text-3xl font-semibold mb-4">Working..!🔥</h2>
					<div>
						{todoList
							.filter((todoItem) => {
								return todoItem.isDone === false;
							})
							.map((todoItem) => (
								<div key={todoItem.id} className="mb-4">
									<p className="text-lg font-semibold">
										<label>제목: {todoItem.title}</label>
									</p>
									<p className="text-sm">
										<label>내용: {todoItem.contents}</label>
									</p>
								</div>
							))}
					</div>
				</div>

				<div className="bg-green-100 rounded-lg p-6">
					<h2 className="text-3xl font-semibold mb-4">Done..!🎉</h2>
					<div>
						{todoList
							.filter((todoItem) => {
								return todoItem.isDone === true;
							})
							.map((todoItem) => {
								return (
									<div key={todoItem.id} className="mb-4">
										<p className="text-lg font-semibold">
											<label>제목: {todoItem.title}</label>
										</p>
										<p className="text-sm">
											<label>내용: {todoItem.contents}</label>
										</p>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TodoSSRPage;
