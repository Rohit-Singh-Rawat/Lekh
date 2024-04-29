import Navbar from '../components/LandingPage/ui/Navbar';
import Content from '../components/LandingPage/ui/Content';
import Footer from '../components/LandingPage/ui/Footer';

const LandingPage = () => {
	return (
		<div className='bg-[#090C10] relative min-h-screen font-transforma-mix min-w-[100dvw] text-white pt-5  '>
			<Navbar />
			<Content />
			<Footer />
		</div>
	);
};

export default LandingPage;
