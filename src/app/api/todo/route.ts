import { TodoType } from '@/types';

const url = 'http://localhost:4000/todos';

export const fetchTodoList = async () => {
	const response = await fetch('http://localhost:4000/todos');
	const todo = await response.json();

	if (!todo) {
		return new Response('Todo is not found', {
			status: 404,
		});
	}

	// todo가 있다면 가지고 있는 todo 배열을 전달받아서 쓸 수 있음
	return Response.json({
		todo,
	});
};

export const addTodoList = async (newTodo: TodoType) => {
	const response = await fetch('http://localhost:4000/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newTodo),
	});
	// 입력이 된 그 todo를 반환받아온다.
	const todo = await response.json();

	return Response.json({
		todo,
	});
};

// updateTodoList fetch로 업데이트
export const updateTodoList = async (todo: TodoType) => {
	const response = await fetch(`http://localhost:4000/todos/${todo.id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(todo),
	});
	const updatedTodo = await response.json();

	return Response.json({
		updatedTodo,
	});
};

export const deleteTodoList = async (todo: TodoType) => {
	await fetch(`http://localhost:4000/todos/${todo.id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(todo),
	});
};
