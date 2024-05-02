import Navbar from '../components/Workspace/ui/Navbar';
import Page from '../components/Workspace/ui/Page';
import Sidebar from '../components/Workspace/ui/Sidebar';
const Workspace = () => {
	return (
		<div className='flex bg-custom'>
			<Sidebar></Sidebar>
			<div className='w-[calc(100%-250px)] left-[250px] absolute '>
				<Navbar></Navbar>
				<Page></Page>
			</div>
		</div>
	);
};

export default Workspace;
