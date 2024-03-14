// ssg
import Image from 'next/image';
import { companyType } from '@/types';

const AboutPage = async () => {
	const response = await fetch('http://localhost:4000/companyInfo');
	const companyInfo: companyType = await response.json();
	console.log(companyInfo);
	return (
		<div>
			<h1>AboutPage!</h1>
			<div>
				<label>이름</label>
				{companyInfo.name}
			</div>
			<div>
				<label>소개</label>
				{companyInfo.desctiption}
			</div>
			<Image src={companyInfo} alt="소개페이지" width={500} height={700} />
		</div>
	);
};

export default AboutPage;
