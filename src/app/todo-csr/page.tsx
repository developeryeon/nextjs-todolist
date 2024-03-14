// todolist 목록 만드는 페이지
import TodoForm from '@/components/todoComponents/TodoForm';
import TodoList from '@/components/todoComponents/TodoList';
import Link from 'next/link';
import React from 'react';

const TodoCSRPage = () => {
	return (
		<div>
			<TodoForm />
			<TodoList isDone={false} />
			<TodoList isDone={true} />
			<div>
				<Link href={'/report'}>할일정보통계보러가기</Link>
			</div>
		</div>
	);
};

export default TodoCSRPage;
