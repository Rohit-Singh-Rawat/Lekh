import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import LekhIcon from '../components/LandingPage/LekhIcon';
const Login = () => {
	interface UserInfo {
		email: string;
		password: string;
	}

	const [signinInfo, setSigninInfo] = useState<UserInfo>({
		email: '',
		password: '',
	});

	const [passwordType, setPasswordType] = useState<string>('password');

	const handleToogle: () => void = () => {
		passwordType === 'password'
			? setPasswordType('text')
			: setPasswordType('password');
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (signinInfo.email.trim() == '' || signinInfo.password.trim() == '') {
			toast.error('Fill all credentials');
		} else {
			toast.success('Form Submitted');
		}
	};
	return (
		<div className='h-screen w-full bg-[#090C10] min-h-screen font-transforma-mix gap-4 flex-col flex justify-center items-center    bg-grid-blue-900/[0.1]  relative  '>
			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
				stacked
			></ToastContainer>
			<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#090C10)]'></div>
			<div>
				<Link to='/'>
					<LekhIcon
						width={150}
						height={55}
					/>
				</Link>
			</div>
			<div className='backdrop-blur-sm text-white  bg-white/5 p-10 rounded-3xl min-w-[400px] w-[23vw] min-h-[65vh]'>
				<form
					onSubmit={(e) => handleSubmit(e)}
					className='flex flex-col gap-4'
				>
					<div className='flex flex-col gap-3'>
						<p className='font-light'>Email address</p>
						<input
							type='text'
							name=''
							id=''
							placeholder='Email address'
							className='rounded-3xl text-white outline-none p-2 pl-4 bg-white/10 border-[1px]'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setSigninInfo((info) => ({ ...info, email: e.target.value }))
							}
						/>
					</div>
					<div className='flex flex-col gap-3'>
						<p className='text-white font-light'>Password</p>
						<input
							type='text'
							name=''
							id=''
							placeholder='Password'
							className='rounded-3xl text-white outline-none p-2 pl-4 bg-white/10 border-[1px]'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setSigninInfo((info) => ({ ...info, password: e.target.value }))
							}
						/>
					</div>

					<input
						type='submit'
						name=''
						id=''
						value='Log In'
						className='rounded-3xl  cursor-pointer text-center text-white outline-none p-2 pl-4 bg-blue-500 border-2'
					/>
				</form>
				<div className='flex  justify-center'>
					<Link
						to='/forgotPassword'
						className='text-xs  text-gray-500 mt-3'
					>
						Forgot your Password?
					</Link>
				</div>

				<div className='bg-gradient-to-r from-transparent  via-neutral-700 to-transparent my-6 h-[1px] w-full' />

				<div className='flex flex-col gap-5'>
					<button className='rounded-3xl flex gap-3 items-center justify-center border-b-0 text-center text-white outline-none p-2 pl-4 bg-white/10 border-2 border-gray-300/30'>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='2443'
								height='2500'
								preserveAspectRatio='xMidYMid'
								viewBox='0 0 256 262'
								id='google'
								className='size-5'
							>
								<path
									fill='#4285F4'
									d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
								></path>
								<path
									fill='#34A853'
									d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
								></path>
								<path
									fill='#FBBC05'
									d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
								></path>
								<path
									fill='#EB4335'
									d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
								></path>
							</svg>
						</span>
						Log in with Google
					</button>
					<button className='rounded-3xl flex gap-3 items-center justify-center border-b-0 text-center text-white outline-none p-2 pl-4 bg-white/10 border-2 border-gray-300/30'>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								id='github'
								className='size-7'
							>
								<path d='M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z'></path>
							</svg>
						</span>
						Log in with Github
					</button>
				</div>
			</div>
			<div className='text-white/70'>
				Don't have account yet?{' '}
				<Link
					to={'/signup'}
					className='text-white font-bold'
				>
					Register
				</Link>
			</div>
		</div>
	);
};

export default Login;
