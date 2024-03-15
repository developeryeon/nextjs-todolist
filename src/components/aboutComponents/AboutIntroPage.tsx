// ssg
import Image from 'next/image';
import { CompanyType } from '@/types';

const AboutIntroPage = async () => {
	const response = await fetch(`http://localhost:4000/companyInfo`, {
		cache: 'force-cache',
	});
	const companyInfo: CompanyType = await response.json();

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
			<div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
				<h1 className="text-3xl font-bold mb-4 text-center">About</h1>
				<div className="mb-4">
					<label className="font-semibold">이름</label>
					<span className="ml-2">{companyInfo.name}</span>
				</div>
				<div className="mb-4">
					<label className="font-semibold">소개</label>
					<span className="ml-2">{companyInfo.desctiption}</span>
				</div>
				<div className="flex justify-center mb-8">
					<Image src={companyInfo.image} alt="todoImage" width={500} height={500} />
					{/* <Image src={introImage} alt="회사 이미지" width={500} height={600} /> */}
				</div>
			</div>
		</div>
	);
};

export default AboutIntroPage;
