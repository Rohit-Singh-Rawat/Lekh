import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<LandingPage/>}
				></Route>
				<Route
					path='/dashboard'
					element={<Dashboard/>}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
