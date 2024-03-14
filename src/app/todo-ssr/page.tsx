import Link from 'next/link';
import React from 'react';

const TodoSSRPage = async () => {
	const response = await fetch(`https://catfact.ninja/fact`, {
		cache: 'no-cache',
	});
	const todos = await response.json();

	return (
		<div>
			<Link href={'/report'}>할일정보통계보러가기</Link>
		</div>
	);
};

export default TodoSSRPage;
