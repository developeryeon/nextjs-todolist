import { TodoType } from '@/types';
import Link from 'next/link';
import React from 'react';

const TodoSSRPage = async () => {
	const response = await fetch(`http://localhost:4000/todos`, {
		cache: 'no-cache',
	});
	const todoList: TodoType[] = await response.json();

	return (
		<section>
			<div className="text-2xl">
				<Link href={'/report'}>할일 정보 통계 보러가기</Link>
			</div>
			<hr />
			<div className="bg-indigo-100 outline outline-offset-2  max-w-96">
				<h2 className="text-3xl text-black ml-4 ">Working..!🔥</h2>
				<div>
					{todoList
						.filter((todoItem) => {
							return todoItem.isDone === false;
						})
						.map((todoItem) => (
							<div key={todoItem.id}>
								<p>
									<label>제목: {todoItem.title}</label>
								</p>
								<p>
									<label>내용: {todoItem.contents}</label>
								</p>
							</div>
						))}
				</div>
			</div>
			<br />
			<div>
				<h2 className="text-3xl text-black ml-4">Done..!🎉</h2>
				<div>
					{todoList
						.filter((todoItem) => {
							return todoItem.isDone === true;
						})
						.map((todoItem) => {
							return (
								<div key={todoItem.id}>
									<p>
										<label>제목: {todoItem.title}</label>
									</p>
									<p>
										<label>내용: {todoItem.contents}</label>
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default TodoSSRPage;
