'use client';

import React from 'react';
import useTodosQuery from '../hooks/useTodosQuery';
import { isDoneType } from '@/types';

const TodoList = ({ isDone }: isDoneType) => {
	const { todoList, isLoading, isError, isSuccess, updateTodoMutation, deleteTodoMutation } = useTodosQuery();
	console.log(updateTodoMutation);

	if (isLoading) return <div>로딩중...</div>;

	if (isError) return <div>에러 발생ㅜㅡㅜ</div>;

	if (isSuccess) {
		return (
			<div>
				<h2 className="text-2xl text-black ml-4">{isDone ? 'Done..!🎉' : 'Working..!🔥'}</h2>
				<div>
					{todoList
						?.filter((todoItem) => isDone === todoItem.isDone)
						.map((todoItem) => (
							<div key={todoItem.id}>
								<p>
									<label>제목: {todoItem.title}</label>
								</p>
								<p>
									<label>내용: {todoItem.contents}</label>
								</p>

								<div>
									<button onClick={() => updateTodoMutation({ ...todoItem, isDone: !todoItem.isDone })}>{todoItem.isDone ? '취소' : '완료'}</button>
									<br />
									<button onClick={() => deleteTodoMutation(todoItem)}>삭제</button>
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
};

export default TodoList;
