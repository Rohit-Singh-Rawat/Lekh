import Navbar from "../components/Workspace/Navbar";
import Sidebar from "../components/Workspace/Sidebar";
const Workspace = () => {
	return <div className="flex bg-custom">
  <Sidebar></Sidebar>
  <div className="w-full">
    <Navbar>

    </Navbar>
  </div>
  </div>;
};

export default Workspace;
