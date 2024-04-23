
import logo from '../../assets/Images/LandingPage/Lekh Main Logo Transparent bg.svg'
import { NavigateFunction, useNavigate } from 'react-router-dom';
const Navbar = () => {
    
	const navigate: NavigateFunction = useNavigate();
  return (
		<nav className='border-b-[1px] flex justify-between px-10 border-[#06e1f9] pb-2'>
			<img
				src={logo}
				alt=''
				className='w-24 h-10 '
			/>
			<button
				className='uppercase px-2  border-b-4  rounded-sm border-green-500'
				onClick={() => navigate('/login')}
			>
				Get Started
			</button>
		</nav>
	);
}

export default Navbar