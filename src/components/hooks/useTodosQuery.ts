import { deleteTodoList, updateTodoList } from '@/app/api/todo/route';
import { TodoType } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ElementType } from 'react';

const queryKey = ['todos'];

// 모든 투두 리스트를 가져와서 화면에 표시

const useTodosQuery = () => {
	const queryClient = useQueryClient();

	const {
		data: todoList,
		isLoading,
		isError,
		isSuccess,
	} = useQuery<TodoType[]>({
		queryKey,
		queryFn: async () => {
			const response = await fetch(`http://localhost:4000/todos`);
			const todo = await response.json();
			return todo;
		},
	});

	// 투두 추가
	const useAddTodoMutation = () => {
		const { mutate: newTodoMutation } = useMutation<TodoType, Error, TodoType>({
			mutationFn: async (newTodo: TodoType) => {
				const response = await fetch(`http://localhost:4000/todos`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newTodo),
				});
				const todo = await response.json();
				return todo;
			},
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey });
			},
		});

		return newTodoMutation;
	};
	const newTodoMutation = useAddTodoMutation();

	// 투두 업데이트
	const useUpdateTodoMutation = () => {
		const { mutate: updateTodoMutation } = useMutation({
			mutationFn: updateTodoList,
			onSuccess: () => {
				// 쿼리 무효화
				queryClient.invalidateQueries({ queryKey });
			},
		});
		// 생성된 투두 업데이트 함수를 반환함
		return updateTodoMutation;
	};
	const updateTodoMutation = useUpdateTodoMutation();

	// 투두 삭제
	const useDeleteTodoMutation = () => {
		const { mutate: deleteTodoMutation } = useMutation({
			mutationFn: deleteTodoList,
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey });
			},
		});
		return deleteTodoMutation;
	};
	const deleteTodoMutation = useDeleteTodoMutation();

	return { todoList, isLoading, isError, isSuccess, newTodoMutation, updateTodoMutation, deleteTodoMutation };
};

export default useTodosQuery;
