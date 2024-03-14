import React from 'react';
import Link from 'next/link';

const Navigation = () => {
	return (
		<nav className="bg-gray-900 p-4 flex justify-start items-center text-white space-x-10">
			<Link href={'/about'}>About</Link>
			<Link href={'/report'}>Report</Link>
			<Link href={'/todo-csr'}>Todos-CSR</Link>
			<Link href={'/todo-ssr'}>Todos-SSR</Link>
		</nav>
	);
};

export default Navigation;
