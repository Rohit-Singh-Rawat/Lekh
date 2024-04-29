import { useState } from 'react';
import AddBtn from './AddBtn';
import SidebarItem from './SidebarItem';
const Sidebar = () => {
	const userProfile = {
		name: 'Rohit Singh Rawat',
		imageUrl:
			'https://i.pinimg.com/736x/70/b6/d5/70b6d5e018f260305f687f95a06ff291.jpg',
	};
	const pages = [
		{ id: 1, title: 'Page 1' },
		{ id: 2, title: 'Page 2' },
		// Add more pages as needed
	];
	const favorites = [
		{ id: 1, title: 'Page 1' },
		{ id: 2, title: 'Page 2' },
		// Add more favorites as needed
	];
	// const trash = [
	// 	{ id: 1, title: 'Trashed Item 1' },
	// 	{ id: 2, title: 'Trashed Item 2' },
	// 	// Add more trashed items as needed
	// ];
	const [currentPage, setCurrentPage] = useState({
		id: 1,
		title: 'Page 1',
	});
	const [showFavourite, SetShowFavourite] = useState<boolean>(true);
	const [showPages, SetShowPages] = useState<boolean>(true);
	return (
		<aside className='w-[250px] h-screen bg-custom text-white flex flex-col gap-5 border-r-[1px] border-[#20364f]'>
			<div>
				<SidebarItem>
					<div className='flex gap-2'>
						<div className='size-6 '>
							<img
								src={userProfile.imageUrl}
								alt=''
								className='rounded w-full h-full'
							/>
						</div>
						<div className='w-[11ch] truncate'>{userProfile.name}</div>
					</div>
					<div className='size-8 rounded hover:bg-[#060e18] p-1 flex justify-center items-center'>
						<svg
							role='graphics-symbol'
							viewBox='0 0 24 24'
							className='createPage size-7 fill-current'
						>
							<g>
								<path
									fill-rule='evenodd'
									d='M9.944 14.721c.104.094.216.12.336.079l1.703-.688 6.844-6.844-1.406-1.398-6.836 6.836-.711 1.68c-.052.13-.029.242.07.335zm8.102-9.484l1.414 1.406.515-.523a.917.917 0 00.282-.633.76.76 0 00-.258-.61l-.25-.25a.702.702 0 00-.578-.187.975.975 0 00-.617.297l-.508.5zm-9.453.127a3.85 3.85 0 00-3.85 3.85v6.5a3.85 3.85 0 003.85 3.85h6.5a3.85 3.85 0 003.85-3.85V12.95a.85.85 0 10-1.7 0v2.764a2.15 2.15 0 01-2.15 2.15h-6.5a2.15 2.15 0 01-2.15-2.15v-6.5a2.15 2.15 0 012.15-2.15h3.395a.85.85 0 000-1.7H8.593z'
									clip-rule='evenodd'
								></path>
							</g>
						</svg>
					</div>
				</SidebarItem>
				<SidebarItem>Search</SidebarItem>
				<SidebarItem>Settings</SidebarItem>
			</div>
			<div>
				<SidebarItem onClick={() => SetShowFavourite((fav) => !fav)}>
					Favourite
				</SidebarItem>
				<div>
					{showFavourite ? (
						<ul>
							{favorites.map((page) => (
								<li key={page.id}>
									<SidebarItem
										className={
											currentPage.id === page.id &&
											currentPage.title === page.title
												? 'bg-[#132232]'
												: ''
										}
									>
										{page.title}
									</SidebarItem>
								</li>
							))}
						</ul>
					) : null}
				</div>
			</div>
			<div>
				<SidebarItem
					className='group'
					onClick={() => SetShowPages((pag) => !pag)}
				>
					<div>Pages</div>
					<AddBtn></AddBtn>
				</SidebarItem>
				<div>
					{showPages ? (
						<ul>
							{pages.map((page) => (
								<li key={page.id}>
									<SidebarItem
										className={
											currentPage.id === page.id &&
											currentPage.title === page.title
												? 'bg-[#132232]'
												: ''
										}
									>
										{page.title}
									</SidebarItem>
								</li>
							))}
						</ul>
					) : null}
				</div>
			</div>
			<SidebarItem>
				<div className='flex justify-start items-center gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 48 48'
						id='trash'
						className='size-5 fill-current text-white'
					>
						<path
							fill='#000000'
							d='M16 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1h2V7a3 3 0 0 0-3-3H17a3 3 0 0 0-3 3v2h2zm27 3H5a1 1 0 0 0 0 2h4v28a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V13h4a1 1 0 0 0 0-2zM18 34a1 1 0 0 1-2 0V20a1 1 0 0 1 2 0zm7 2a1 1 0 0 1-2 0V18a1 1 0 0 1 2 0zm7-2a1 1 0 0 1-2 0V20a1 1 0 0 1 2 0z'
							className='fill-current text-white svgShape'
						></path>
					</svg>
					<span>Trash</span>
				</div>
			</SidebarItem>
		</aside>
	);
};

export default Sidebar;
