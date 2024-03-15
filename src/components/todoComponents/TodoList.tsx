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
			<div className="mt-8">
				<h2 className="text-2xl font-semibold mb-4">{isDone ? 'Done..!🎉' : 'Working..!🔥'}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{todoList
						?.filter((todoItem) => isDone === todoItem.isDone)
						.map((todoItem) => (
							<div key={todoItem.id} className="border rounded-lg overflow-hidden shadow-md bg-white">
								<div className="p-4">
									<p className="text-lg font-semibold mb-2">제목: {todoItem.title}</p>
									<p className="text-sm mb-4">내용: {todoItem.contents}</p>

									<div className="flex justify-end">
										<button onClick={() => updateTodoMutation({ ...todoItem, isDone: !todoItem.isDone })} className={`py-1 px-4 mr-2 rounded ${todoItem.isDone ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white'}`}>
											{todoItem.isDone ? '취소' : '완료'}
										</button>
										<button onClick={() => deleteTodoMutation(todoItem)} className="py-1 px-4 bg-red-500 text-white rounded">
											삭제
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
};

export default TodoList;
