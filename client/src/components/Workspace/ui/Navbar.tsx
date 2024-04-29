import { useState } from 'react';
import FavouriteIcon from '../icons/favouriteIcon';


const Navbar = () => {
	const [currentPage, setCurrentPage] = useState({
		id: 1,
		title: 'Page 1',
	});
	return (
		<nav className='bg-custom text-white px-20 border-b-2 p-4 border-[#20364f] flex justify-between items-center'>
			<div>{currentPage.title}</div>
			<div className='flex gap-6'>
				<div className='text-slate-400 bg-slate-900 p-1 px-3 rounded-full flex justify-center items-center'>
					Share
				</div>
				<div>
					<FavouriteIcon starred={false}/>
				</div>
				<div className=' bg-slate-900 p-1 px-2 rounded-full flex justify-center items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						id='menu'
						className='size-5 fill-current text-slate-400'
					>
						<path d='M12 7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0 20c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0-4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z'></path>
					</svg>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
