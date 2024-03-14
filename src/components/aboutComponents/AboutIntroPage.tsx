// ssg
import Image from 'next/image';
import { CompanyType } from '@/types';

const AboutIntroPage = async () => {
	const response = await fetch(`http://localhost:4000/companyInfo`, {
		cache: 'force-cache',
	});
	const companyInfo: CompanyType = await response.json();

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
			<Image src={companyInfo.image} alt="todoImage" width={500} height={500} />
			{/* <Image src={introImage} alt="회사 이미지" width={500} height={600} /> */}
		</div>
	);
};

export default AboutIntroPage;
