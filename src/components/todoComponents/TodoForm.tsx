'use client';

import React, { useState } from 'react';
import useTodosQuery from '../hooks/useTodosQuery';

const TodoForm = () => {
	const [title, setTitle] = useState('');
	const [contents, setContents] = useState('');
	const { newTodoMutation } = useTodosQuery();

	const onChangeTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const onChangeContentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContents(e.target.value);
	};

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!title || !contents) return;

		const newTodo = {
			id: Date.now().toLocaleString(),
			title,
			contents,
			isDone: false,
		};

		newTodoMutation(newTodo);

		setTitle('');
		setContents('');
	};

	return (
		<form onSubmit={onSubmitHandler} className="max-w-md mx-auto mt-8">
			<h2 className="text-xl font-semibold mb-4">오늘의 할일을 작성해주세요!</h2>
			<div className="flex">
				<input type="text" value={title} onChange={onChangeTitleInput} className="mr-2 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md flex-1" placeholder="제목을 입력하세요" required />
				<input type="text" value={contents} onChange={onChangeContentInput} className="px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md flex-1" placeholder="내용을 입력하세요" required />
				<button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
					ADD
				</button>
			</div>
		</form>
	);
};

export default TodoForm;
