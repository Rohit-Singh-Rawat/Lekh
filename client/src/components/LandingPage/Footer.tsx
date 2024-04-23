import React from 'react'
import github from '../../assets/Images/LandingPage/github.svg'
import x from '../../assets/Images/LandingPage/twitter.svg';
const Footer = () => {
  return (
		<div className='bottom-0 flex justify-between items-center border-[#013339] px-10 absolute p-3 border-t-[1px] w-full'>
			<div className='flex gap-6'>
				<a
					href='https://github.com/Rohit-Singh-Rawat'
					target='_blank'
				>
					<img
						src={github}
						alt=''
						className='size-5'
					/>
				</a>

				<a
					href='https://twitter.com/Spacing_Whale'
					target='_blank'
				>
					<img
						src={x}
						alt=''
						className='size-5'
					/>
				</a>
			</div>
			<span> Made with ❤️ by Rohit </span>
		</div>
	);
}

export default Footer