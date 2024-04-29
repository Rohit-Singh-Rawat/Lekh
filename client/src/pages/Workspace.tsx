import Navbar from "../components/Workspace/ui/Navbar";
import Sidebar from "../components/Workspace/ui/Sidebar";
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
