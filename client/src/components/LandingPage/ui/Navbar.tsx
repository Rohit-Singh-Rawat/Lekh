import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import LekhIcon from '../icons/LekhIcon';
const Navbar = () => {
	const navigate: NavigateFunction = useNavigate();
	return (
		<nav className='border-b-[1px] flex justify-between px-10 border-[#06e1f9] pb-2'>
			<Link to={'/'}>
				<LekhIcon
					width={120}
					height={40}
				/>
			</Link>

			<button
				className='uppercase px-2  border-b-4  rounded-sm border-green-500'
				onClick={() => navigate('/login')}
			>
				Get Started
			</button>
		</nav>
	);
};

export default Navbar;
