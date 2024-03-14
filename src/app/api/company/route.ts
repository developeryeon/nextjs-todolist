import { TodoType } from '@/types';

export async function GET() {
	const response = await fetch('http://localhost:4000/companyInfo');
	const companyInfo = await response.json();

	if (!companyInfo) {
		return new Response('Company Info is not found', {
			status: 404,
		});
	}

	return Response.json({
		companyInfo,
	});
}
