import { NavigateFunction, useNavigate } from 'react-router-dom';
import img from '../../../assets/Images/LandingPage/img.svg';
const Content = () => {
	const navigate: NavigateFunction = useNavigate();
	return (
		<main className='flex justify-between items-center '>
			<div className='px-20 pt-[180px] flex flex-col gap-10'>
				<h1 className='text-4xl font-bold '>One Idea, One Solution.</h1>
				<ul className='font-transforma-script text-xl font-black'>
					<li>Notes.</li>
					<li>Art.</li>
					<li>Vision.</li>

					<li>Inspiration.</li>
					<li>Startup.</li>
					<li>Haccelerator.</li>
				</ul>
				<div>
					<button
						className='border-black  text-sm border-[3px] p-3 px-14 bg-white  text-black font-bold shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition-all duration-300'
						onClick={() => navigate('/login')}
					>
						GET STARTED
					</button>
				</div>
			</div>
			<div className='size-[400px] mr-32'>
				<img
					src={img}
					alt=''
				/>
			</div>
		</main>
	);
};

export default Content;
