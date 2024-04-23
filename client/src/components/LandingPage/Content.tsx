import { NavigateFunction, useNavigate } from 'react-router-dom';
import img from '../../assets/Images/LandingPage/img.svg'
const Content = () => {
	const navigate: NavigateFunction = useNavigate();
	return (
		<main className='flex justify-between items-center '>
			<div className='px-20 pt-[180px] flex flex-col gap-10'>
				<h1 className='text-4xl font-bold '>One Idea, One Solution.</h1>
				<ul className='font-transforma-script text-xl font-black'>
					<li>Notes.</li>
					<li>Art.</li>
					<li>Inspiration.</li>
					<li>Leaderboard.</li>
					<li>Startup.</li>
					<li>Haccelerator.</li>
				</ul>
				<div>
					<button
						className='border-black  text-sm border-[3px] p-3 px-14 bg-white  text-black font-bold shadow-[7px_7px_0px_0px_rgba(0,150,0)] '
						onClick={() => navigate('/login')}
					>
						GET STARTED
					</button>
				</div>
			</div>
      <div className='size-[400px] mr-32'>
        <img src={img} alt="" />
      </div>
		</main>
	);
};

export default Content;
