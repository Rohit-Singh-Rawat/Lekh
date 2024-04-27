import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Workspace from './pages/Workspace';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<LandingPage />}
				></Route>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				></Route>
				<Route
					path='/login'
					element={<Login />}
				></Route>
				<Route
					path='/signup'
					element={<Signup/>}
				></Route>
				<Route
				path='/workspace'
				element={<Workspace/>}
				>

				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
