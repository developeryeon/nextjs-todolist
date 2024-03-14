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
		<form onSubmit={onSubmitHandler}>
			<h2>오늘의 할일을 작성해주세요!</h2>
			<div>
				<input type="text" value={title} onChange={onChangeTitleInput} />
				<input type="text" value={contents} onChange={onChangeContentInput} />
				<button type="submit">ADD</button>
			</div>
		</form>
	);
};

export default TodoForm;
