const AddBtn = ({ onClick }: { onClick?: () => void }) => {
	return (
		<button
			onClick={onClick}
			className='hover:bg-[#0f1215] p-1 hidden rounded group-hover:block'
		>
			<svg
				role='graphics-symbol'
				viewBox='0 0 14 14'
				className='plusThick size-4 fill-current text-slate-600  '
			>
				<path d='M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z'></path>
			</svg>
		</button>
	);
};

export default AddBtn;
