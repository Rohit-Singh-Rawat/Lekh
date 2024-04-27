import { ReactNode } from 'react';

type DivProps = {
	children: ReactNode;
	onClick?: () => void;
	className?: string
};

const SidebarItem = ({ onClick, children, className }: Readonly<DivProps>) => {
	return (
		<div className={`flex p-1 pl-3 hover:bg-[#20364f] justify-between m-2 rounded-md items-center ${className}`} onClick={onClick}>
			{children}
		</div>
	);
};

export default SidebarItem;
